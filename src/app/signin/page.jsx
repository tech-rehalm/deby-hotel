import Link from 'next/link';
import { login } from "@/actions/user";

export default function Page() { 

  return (
    <div className="w-full min-h-screen grid content-center">
      <form action={login} className='max-w-[350px] sm:m-auto sm:w-[350px] p-5 m-5 sm:p-[20px] shadow-inner shadow-[#00ff0048] rounded-xl border border-[lime] text-[lime]'>
        <h1 className="w-full mb-4 text-4xl font-extrabold bg-gradient-to-r from-[lime] to-[aqua] text-center clip">
          Sign in
        </h1>
        <label htmlFor="email" className='my-1'>Email</label>
        <input 
          id="email"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' 
        />
        <label htmlFor="password" className='my-1'>Password</label>
        <input 
          id="password"
          placeholder="*************"
          type="password"
          name="password"
          className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' 
        />
        <button type="submit" className="text-lg mb-4 text-slate-900 font-bold btn w-full bg-gradient-to-r from-[lime] to-[aqua]">
          Sign in
        </button>
        <p className="my-2 text-sm font-light">Doesn&apos;t have an account? <span className="underline"><Link href="/register">Register</Link></span></p>
      </form>
    </div>
  );
}
