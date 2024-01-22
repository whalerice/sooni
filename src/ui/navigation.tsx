import { MailOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/">대시보드</Link>, 'dashboard', <PieChartOutlined />),

  getItem('티켓', 'ticket', <MailOutlined />, [
    getItem(<Link href="/ticket/list">티켓 조회</Link>, 'ticketList'),
    getItem(<Link href="/ticket/settings">티켓 설정</Link>, 'ticketSettings'),
  ]),
];
const Navigation = () => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['ticket']}
      mode="inline"
      items={items}
    />
  );
};

export default Navigation;
