import { useEffect } from 'react';
import Link from 'next/link';

import { Menu } from 'antd';
import type { MenuProps, MenuTheme } from 'antd';
import { usePathname } from 'next/navigation';
import { menuInfo } from '@/lib/constants';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  key: React.Key,
  children?: MenuItem[],
  type?: 'group' | 'sub',
): MenuItem {
  let name = (key: any) => {
    if (type) {
      return menuInfo[key].nav;
    }
    return (
      <Link href={key} scroll={false}>
        {menuInfo[key].nav}
      </Link>
    );
  };

  let getIcon = (key: any) => {
    const Icon = menuInfo[key].icon;
    return menuInfo[key].icon ? <Icon /> : null;
  };
  const label = name(key);
  const icon = getIcon(key);
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const agentItems: MenuProps['items'] = [
  getItem('dashboard', [getItem('/agent')], 'group'),
  getItem('tickets', [getItem('/agent/ticket')], 'group'),
  getItem(
    'management',
    [
      getItem('/agent/answer'),
      getItem('/agent/branch'),
      getItem('/agent/roadshow'),
    ],
    'group',
  ),
];

const items: MenuProps['items'] = [
  getItem(
    'dashboard',
    [getItem('/admin'), getItem('/admin/monitor'), getItem('/admin/report')],
    'group',
  ),
  { type: 'divider' },
  getItem(
    'tickets',
    [getItem('/admin/ticket'), getItem('/admin/ticket/setting')],
    'group',
  ),
  { type: 'divider' },
  getItem(
    'management',
    [
      getItem('/admin/team'),
      getItem('/admin/member'),
      getItem('/admin/manager'),
      getItem('/admin/counselor'),
      getItem('/admin/message'),
      getItem('/admin/answer'),
      getItem('/admin/branch'),
      getItem('/admin/roadshow'),
    ],
    'group',
  ),
  { type: 'divider' },
  getItem(
    'setting',
    [
      getItem(
        'general',
        [
          getItem('/admin/general'),
          getItem('/admin/general/auto'),
          getItem('/admin/general/rank'),
          getItem('/admin/general/abusive'),
        ],
        'sub',
      ),
      getItem('/admin/operation'),
      getItem('/admin/chatbot'),
      getItem(
        'event',
        [getItem('/admin/event/time'), getItem('/admin/event/instantly')],
        'sub',
      ),
    ],
    'group',
  ),
  { type: 'divider' },
];

type GradeType = {
  [key: string]: MenuProps['items'];
};

const gradeMenu: GradeType = {
  admin: items,
  agent: agentItems,
};

const Navigation = ({ theme, grade }: { theme: MenuTheme; grade: string }) => {
  const pathname = usePathname();
  let defaultSelectedKeys: string[] = [];
  let defaultOpenKeys: string[] = [];

  const loop = (item: any) => {
    item.map((e: any) => {
      if (e.key !== undefined) {
        if (pathname === e.key) {
          const parentName = e.key.split('/')[1];
          defaultSelectedKeys.push(e.key);
          defaultOpenKeys.push(parentName);
        }
      }

      if (e.children) loop(e.children);
    });
  };

  const onOpenChange = (openKeys: string[]) => {
    defaultOpenKeys = [...defaultOpenKeys, ...openKeys];
  };
  // items
  useEffect(() => {
    loop(gradeMenu[grade]);
  }, [pathname]);
  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={gradeMenu[grade]}
      theme={theme}
    />
  );
};

export default Navigation;
