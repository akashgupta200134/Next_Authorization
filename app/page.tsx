"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  return  <SessionProvider>
    <Main />
  </SessionProvider>
 

}

function Main() {
  const session = useSession();

  return (
    <div>
      {session.status == "authenticated" && ( <button  onClick={() => { signOut() }}> SignOut  </button>)}
      {session.status == "unauthenticated" && (<button  onClick={() => signIn()}> Signin</button> )}

    </div>
  );
}
