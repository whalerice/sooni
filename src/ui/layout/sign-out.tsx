import { signOutAction } from '@/lib/actions';
import { Button } from 'antd';

export default function SignOut() {
  return <Button onClick={() => signOutAction()}>로그아웃</Button>;
}
