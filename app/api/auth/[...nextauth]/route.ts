import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({

  providers: [

    CredentialsProvider({
      name: "email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "akash@gmail.com" },
        password: { label: "Password", type: "password" },

      },

      async authorize(credentials, req) {
        
        const email = credentials?.email;
        const password = credentials?.password;
        
        console.log(email);
        console.log(password);
    
        const user = { 
        id: "1",
        name: "Akash",
        email: "akash@gmail.com"

         };


        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
