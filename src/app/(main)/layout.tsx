import MainLayout from '@/ui/main-layout';
import { cookies } from 'next/headers';

export default function Layout({ children }: { children: React.ReactNode }) {
  const mode = cookies().get('theme-mode')?.value;

  return (
    <>
      <MainLayout themeMode={mode}>{children}</MainLayout>
    </>
  );
}
