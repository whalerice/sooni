import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      credentials: {
        id: { label: 'Id', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        console.log(credentials);

        console.log(request);

        const user = {
          /* add function to get user */
        };

        return user;
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
