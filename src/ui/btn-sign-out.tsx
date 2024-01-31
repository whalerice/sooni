import { signOut } from '@/auth';
import { Button } from 'antd';

export const BtnSignOut = () => {
  const onSignOut = async () => {
    await signOut({ redirect: true, redirectTo: '/login' });
  };
  <Button onClick={onSignOut}>로그아웃</Button>;
  return;
};
