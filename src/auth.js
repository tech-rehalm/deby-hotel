import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "./utils/db";
import { compare } from "bcryptjs";
import User from "./models/UserModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.Git_CLIENT,
      clientSecret: process.env.GIT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;
        if (!email || !password) {
          throw new Error("Please fill in all the fields");
        }
        await connectDB();
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error("Incorrect email or password");
        }
        const isMatched = await compare(password, user.password);
        if (!isMatched) {
          throw new Error("Password did not match");
        }
        const userData = {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          isAdmin: user.isAdmin,
          _id: user._id,
        };

        console.log("Password matched, user authenticated:", userData);

        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.isAdmin) {
        session.user._id = token.sub;
        session.user.isAdmin = token.isAdmin;
        session.user.firstname = token.firstname;
        session.user.lastname = token.lastname;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectDB();
          const alreadyUser = await User.findOne({ email });

          if (!alreadyUser) {
            await User.create({ email, name, image, authProviderId: id });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("Error while creating user");
        }
      }
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
