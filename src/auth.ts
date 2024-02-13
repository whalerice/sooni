import NextAuth from 'next-auth';
import type { NextAuthConfig, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apis } from '@/lib/apis';
import { sessionTouch } from '@/lib/actions';
// import { cookies } from 'next/headers';

type GradeType = {
  [key: string]: string;
};
const gradeType: GradeType = {
  SUPER: 'admin',
  AGENT: 'agent',
};

declare module 'next-auth' {
  interface Session {
    user: {
      type: string;
    };
  }
}

export const authConfig = {
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      credentials: {
        loginId: { label: 'loginId', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await apis.user.login({
          loginId: credentials.loginId,
          password: credentials.password,
        });

        if (response) {
          await sessionTouch();
          return response;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }: { session: Session; token?: JWT }) {
      session.user = token as any;
      return session;
    },
  },
  secret: 'dddd',
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
