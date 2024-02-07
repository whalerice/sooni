'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { apis } from './apis';

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
  const id = cookies().get('id')?.value;
  console.log(id);

  try {
    // cookies().delete('id');
    // cookies().delete('name');
    // cookies().delete('x-qbot-session');
    await signOut();

    // const response = await apis.user.logout({ user: { id: id } });
    // console.log(response);
  } catch (error: any) {
    // console.log(error.response.status);
    // console.log(error.response.data.message);

    throw error;
    // console.log(error.response.data);

    // throw error.response.data.message;
  }
}
