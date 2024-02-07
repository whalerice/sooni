'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';

export async function changeTheme(value: string) {
  cookies().set('theme-mode', value);
}

export async function getTheme() {
  const mode = cookies().get('theme-mode')?.value;
  return mode;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return error.cause?.err?.message;
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
}
