import { MailOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

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
  getItem(<Link href="/">대시보드</Link>, '/', <PieChartOutlined />),
  { type: 'divider' },
  getItem('티켓', 'ticket', <MailOutlined />, [
    getItem(<Link href="/ticket/list">티켓 조회</Link>, '/ticket/list'),
    getItem(<Link href="/ticket/settings">티켓 설정</Link>, '/ticket/settings'),
    getItem(
      <Link href="/ticket/situation">티켓 현황</Link>,
      '/ticket/situation',
    ),
    getItem(<Link href="/ticket/field">티켓 필드</Link>, '/ticket/field'),
  ]),
  getItem('배정', 'assign', <MailOutlined />, [
    getItem(
      <Link href="/assign/unassigned">미배정 조회</Link>,
      '/assign/unassigned',
    ),
    getItem(<Link href="/assign/settings">배정 설정</Link>, '/assign/settings'),
    getItem(
      <Link href="/assign/situation">배정 현황</Link>,
      '/assign/situation',
    ),
  ]),
  getItem('상담', 'counsel', <MailOutlined />, [
    getItem(<Link href="/counsel/closed">완료된 티켓</Link>, '/counsel/closed'),
    getItem(
      <Link href="/counsel/situation">상담 현황</Link>,
      '/counsel/situation',
    ),
  ]),
  getItem('사용자', 'user', <MailOutlined />, [
    getItem(<Link href="/user/list">사용자 조회</Link>, '/user/list'),
    getItem(
      <Link href="/user/assessment">사용자 평가</Link>,
      '/user/assessment',
    ),
  ]),
  getItem('그룹', 'group', <MailOutlined />, [
    getItem(<Link href="/group/list">그룹 조회</Link>, '/group/list'),
  ]),
  getItem('조직', 'organize', <MailOutlined />, [
    getItem(<Link href="/organize/list">조직 조회</Link>, '/organize/list'),
  ]),
  getItem('지점', 'branch', <MailOutlined />, [
    getItem(<Link href="/branch/list">지점 조회</Link>, '/branch/list'),
  ]),
  getItem('시스템 설정', 'system', <MailOutlined />, [
    getItem(<Link href="/system/code">코드</Link>, '/system/code'),
  ]),
  getItem(<Link href="/holiday">휴일</Link>, '/holiday', <MailOutlined />),
  getItem(<Link href="/notice">휴일</Link>, '/notice', <MailOutlined />),
  { type: 'divider' },
  getItem('챗로그 자동화', 'chatlog', <MailOutlined />, [
    getItem(
      <Link href="/chatlog/annotation">어노테이션</Link>,
      '/chatlog/annotation',
    ),
    getItem(
      <Link href="/chatlog/classification">재분류</Link>,
      '/chatlog/classification',
    ),
    getItem(<Link href="/chatlog/standard">표준셋</Link>, '/chatlog/standard'),
    getItem(<Link href="/chatlog/faqlog">FAQ 로그</Link>, '/chatlog/faqlog'),
    getItem(
      <Link href="/chatlog/calculate">정산 관리</Link>,
      '/chatlog/calculate',
    ),
    getItem(
      <Link href="/chatlog/statistics">재분류 현황</Link>,
      '/chatlog/statistics',
    ),
  ]),
  getItem('메세지', 'message', <MailOutlined />, [
    getItem(<Link href="/message/ivr">IVR 멘트</Link>, '/message/ivr'),
    getItem(<Link href="/message/trigger">트리거</Link>, '/message/trigger'),
    getItem(
      <Link href="/message/system-message">시스템 메세지</Link>,
      '/message/system-message',
    ),
    getItem(<Link href="/message/filter">욕설 필터</Link>, '/message/filter'),
  ]),

  { type: 'divider' },
];
const Navigation = () => {
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

  useEffect(() => {
    loop(items);
  }, [pathname]);

  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={items}
    />
  );
};

export default Navigation;
