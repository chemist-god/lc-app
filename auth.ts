import NextAuth from "next-auth";
export const{handlers, signIn, signOut, auth} =NextAuth(config:{
    providers:[],
})