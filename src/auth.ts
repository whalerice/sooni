import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apis } from '@/lib/apis';
import { sessionTouch } from '@/lib/actions';
import { cookies } from 'next/headers';

type GradeType = {
  [key: string]: string;
};
const gradeType: GradeType = {
  SUPER: 'admin',
  AGENT: 'agent',
};

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

        if (response) {
          console.log(response);
          cookies().set('id', response['id']);

          const grade = gradeType[response['type']];
          cookies().set('grade', grade);

          const token = await sessionTouch();
          if (token) {
            cookies().set(token[0], token[1]);
          }
          return response;
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
