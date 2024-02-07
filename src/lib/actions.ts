'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { apis } from '@/lib/apis';

export async function changeTheme(value: string) {
  cookies().set('theme-mode', value);
}

export async function getTheme() {
  const mode = cookies().get('theme-mode')?.value;
  return mode;
}

export async function sessionTouch() {
  'use server';
  try {
    const res = await fetch(`${process.env.APIURL}/user/session-touch`, {
      method: 'GET',
    });
    const setCookie = res.headers.get('set-cookie');
    const text = setCookie!.split(' ');
    const sooniSession = text[0].split('=');
    return sooniSession;
  } catch (error: any) {
    throw error;
  }
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

  try {
    cookies().delete('id');
    cookies().delete('x-qbot-session');
    await signOut();

    await apis.user.logout({ user: { id: id } });
  } catch (error: any) {
    // console.log(error.response.status);
    // console.log(error.response.data.message);

    throw error;
    // console.log(error.response.data);

    // throw error.response.data.message;
  }
}
