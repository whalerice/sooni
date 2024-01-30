'use server';

import { getCookie, setCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export async function changeTheme(value: string) {
  setCookie('theme-mode', value, { cookies });
}

export async function getTheme() {
  const mode = cookies().get('theme-mode')?.value;
  return mode;
}
