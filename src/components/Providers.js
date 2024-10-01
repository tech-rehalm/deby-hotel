import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import React from 'react'

export default async function Providers({children}) {
    const session = await auth()
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
