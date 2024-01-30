'use server';

import { setCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export async function changeTheme(value: string) {
  setCookie('theme-mode', value, { cookies });
}
