import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./db";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth/";
import User from "../model/user";

export const authOptions: NextAuthOptions = {
   providers: [
      CredentialsProvider({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
               throw new Error("Missing email or password");
            }

            try {
               await connectToDatabase();
               const user = await User.findOne({ email: credentials.email });

               if (!user || !user.password) {
                  throw new Error("No user found or password is missing!");
               }

               const isMatched = await bcrypt.compare(credentials.password, user.password);
               if (!isMatched) {
                  throw new Error("Incorrect password!");
               }

               return {
                  id: user._id.toString(),
                  email: user.email,
               };
            } catch (error) {
               console.error("Authorization error:", error);
               throw new Error("Authentication failed!");
            }
         }
      }),
   ],

   callbacks: {
      async jwt({ token, user }: any) {
         if (user?.id) {
            token.id = user.id;
         }
         return token;
      },
      async session({ session, token }: any) {
         if (session.user && token.id) {
            session.user.id = token.id as string;
         }
         return session;
      },
   },

   pages: {
      signIn: '/login',
      error: '/login',
   },

   session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
   },

   secret: process.env.JWT_SECRET,
};