'use server';

// import { setCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export async function changeTheme(value: string) {
  cookies().set('theme-mode', value);

  // setCookie('theme-mode', value, { cookies });
}

export async function getTheme() {
  const mode = cookies().get('theme-mode')?.value;
  return mode;
}
