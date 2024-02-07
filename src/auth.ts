import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      credentials: {
        loginId: { label: 'loginId', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        console.log(credentials);

        const res = await fetch('http://192.168.0.164:8080/api/v1/user/login', {
          method: 'POST',
          body: JSON.stringify({
            loginId: credentials.loginId,
            password: credentials.password,
          }),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        if (res.status > 200) {
          throw new Error(user.message);
        }
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
