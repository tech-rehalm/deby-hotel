"use server";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export const login = async (formData) => {
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    throw new Error(error)
  }
  redirect("/");
};