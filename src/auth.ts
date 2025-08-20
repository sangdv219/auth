import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  events:{
    async linkAccount({user}){
     
    }
  },
  callbacks: {
    // async signIn({user}){
    //   const existingUser = await getUserById(user.id) 
    //   if(!existingUser || !existingUser.emailVerified){
    //     return false
    //   }
    //   return true
    // },
    async session({ token, session }) {
      if(token.sub && session.user){
        session.user.id = token.sub
      }
      if(token.role && session.user){
        
      }
      return session
    },
    async jwt({ token }) {
      if(!token.sub) return token;
      const existingUser = await getUserById(token.sub)
      if(!existingUser) return token
      // token.role = existingUser.role;
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
