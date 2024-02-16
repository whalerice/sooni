import { Children, Component, useEffect } from 'react';
import Link from 'next/link';

import { GetProp, Menu, MenuProps, MenuTheme } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

import { agentRouter, menuInfo } from '@/lib/constants';

type MenuItem = GetProp<MenuProps, 'items'>[number];

// const items: MenuItem[] = [];

const title = (item: any) => {
  if (item.path) {
    return <Link href={item.path}>{item.label}</Link>;
  }

  return item.label;
};

const icon = (item: any) => {
  const Icon = item;
  return !item ? null : <Icon />;
};

const child = (item: any) => {
  return null;
};

const items: any[] = agentRouter.map((item) => ({
  key: item.type ? null : item.path,
  label: title(item),
  icon: icon(item.icon),
  type: item.type,
  children: child(item.children),
}));

// const items: MenuItem[] = [
//   { key: 'dashboard', type: 'group', label: '대시보드' },
//   {
//     label: 'ddd',
//     key: '1',
//     icon: <DashboardOutlined />,
//     children: [
//       { label: <Link href="/">ddd</Link>, key: '1-1' },
//       { label: 'ccc', key: '1-2' },
//     ],
//   },

//   {
//     label: 'ddd',
//     key: '2',
//     icon: <DashboardOutlined />,
//   },
//   {
//     label: 'ddd',
//     key: '3',
//     icon: <DashboardOutlined />,
//   },
//   { type: 'divider' },
// ];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click ', e);
};

const Navigation = ({ theme, role }: { theme: MenuTheme; role: string }) => {
  return (
    <Menu
      defaultSelectedKeys={['1-1']}
      defaultOpenKeys={['1']}
      onClick={onClick}
      mode="inline"
      items={items}
      theme={theme}
    />
  );
};

export default Navigation;
