'use client';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
const { Title } = Typography;

export default function Page() {
  return (
    <>
      <Avatar size={64} icon={<UserOutlined />} />
      <Title>대시보드 - Agent</Title>
    </>
  );
}
