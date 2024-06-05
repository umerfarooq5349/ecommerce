import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/app/api/auth/route"; // Ensure this path is correct
import { JWT } from "next-auth/jwt";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLEID!,
      clientSecret: process.env.GOOGLESECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // Perform the login logic
          const user = await login(credentials!.email, credentials!.password);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user!.name = token.name;
      session.user!.email = token.email;
      //   session.user!.role = token.role;
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `jwt`,
      options: {
        path: "/",
      },
    },
  },
};
