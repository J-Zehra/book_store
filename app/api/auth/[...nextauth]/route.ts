import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    FacebookProvider({
      clientId: "",
      clientSecret: "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Here");

        // CHECK IF THE EMAIL AND PASSWORD IS THERE
        if (!credentials?.email || !credentials.password) {
          console.log("Error 1");
          throw new Error("Please enter an email and password");
        }

        // CHECK IF THE USER EXISTS
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.password) {
          console.log("Error 2");
          throw new Error("No user found.");
        }

        // CHECK IF THE PASSWORD MATCHES
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          console.log("Error 3");
          throw new Error("Incorrect password.");
        }

        console.log(user);

        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: "dskhmnklrshmkshkrshmyorwh",
  callbacks: {
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      console.log("JWT Callback", { user, token });
      return token;
    },
  },
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
