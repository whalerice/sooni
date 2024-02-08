import { getGrade, getTheme } from '@/lib/actions';
import MainLayout from '@/ui/layout/main-layout';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = await getTheme();
  const grade = await getGrade();

  return (
    <>
      <MainLayout themeMode={mode} grade={grade!}>
        {children}
      </MainLayout>
    </>
  );
}
