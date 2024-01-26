import MainLayout from '@/ui/main-layout';
import { cookies } from 'next/headers';

export default function Layout({ children }: { children: React.ReactNode }) {
  let mode: any = cookies().has('theme-mode')
    ? cookies().get('theme-mode')?.value
    : 'light';
  return (
    <>
      <MainLayout themeMode={mode}>{children}</MainLayout>
    </>
  );
}
