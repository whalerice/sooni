import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apis } from '@/lib/apis';

export const authConfig = {
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      credentials: {
        loginId: { label: 'loginId', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        const response = await apis.user.login({
          loginId: credentials.loginId,
          password: credentials.password,
        });

        if (response) return response;

        return null;
      },
    }),
  ],
  callbacks: {},
  secret: 'dddd',
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
