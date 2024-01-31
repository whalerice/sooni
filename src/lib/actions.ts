'use server';

import { signIn } from '@/auth';
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
    await signIn('credentials', { ...formData, redirectTo: '/' });
    // await signIn('credentials', formData);
  } catch (error) {
    console.log(error);

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
