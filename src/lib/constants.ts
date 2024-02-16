import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  FundViewOutlined,
  SearchOutlined,
  UserOutlined,
  UserAddOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  SolutionOutlined,
  StarOutlined,
  GiftOutlined,
  RobotOutlined,
  FieldTimeOutlined,
  CommentOutlined,
} from '@ant-design/icons';

type MenuInfoType = {
  [key: string]: {
    pageTitle: string;
    nav: string;
    icon?: any;
  };
};

// type GradeType = {
//   [key: string]: string;
// };

// const grade: GradeType = {
//   admin: 'admin',
//   agent: 'agent',
// };

export const menuInfo: MenuInfoType = {
  '/admin': {
    pageTitle: '대시보드 - 실시간',
    nav: '실시간',
    icon: DashboardOutlined,
  },
  '/admin/monitor': {
    pageTitle: '모니터링',
    nav: '모니터링',
    icon: FundViewOutlined,
  },
  '/admin/report': {
    pageTitle: '리포트',
    nav: '리포트',
    icon: PieChartOutlined,
  },
  '/admin/ticket': {
    pageTitle: '티켓 조회',
    nav: '티켓 조회',
    icon: SearchOutlined,
  },
  '/admin/ticket/setting': {
    pageTitle: '티켓 설정',
    nav: '티켓 설정',
    icon: ProfileOutlined,
  },
  '/admin/team': { pageTitle: '팀', nav: '팀', icon: TeamOutlined },
  '/admin/member': {
    pageTitle: '팀원 관리',
    nav: '팀원 관리',
    icon: UserAddOutlined,
  },
  '/admin/manager': {
    pageTitle: '관리자',
    nav: '관리자',
    icon: SolutionOutlined,
  },
  '/admin/counselor': {
    pageTitle: '상담사',
    nav: '상담사',
    icon: UserOutlined,
  },
  '/admin/message': {
    pageTitle: '챗봇 메세지',
    nav: '챗봇 메세지',
    icon: CommentOutlined,
  },
  '/admin/answer': {
    pageTitle: '빠른답변',
    nav: '빠른답변',
    icon: ThunderboltOutlined,
  },
  '/admin/branch': {
    pageTitle: '점포공감',
    nav: '점포공감',
    icon: ShopOutlined,
  },
  '/admin/roadshow': {
    pageTitle: '로드쇼',
    nav: '로드쇼',
    icon: StarOutlined,
  },
  '/admin/general': {
    pageTitle: '일반',
    nav: '일반',
  },
  '/admin/general/auto': {
    pageTitle: '자동화',
    nav: '자동화',
  },
  '/admin/general/rank': {
    pageTitle: '직급',
    nav: '직급',
  },
  '/admin/general/abusive': {
    pageTitle: '욕설필터',
    nav: '욕설필터',
  },
  '/admin/operation': {
    pageTitle: '운영 시간 설정',
    nav: '운영 시간 설정',
    icon: FieldTimeOutlined,
  },
  '/admin/chatbot': {
    pageTitle: '챗봇 설정',
    nav: '챗봇 설정',
    icon: RobotOutlined,
  },
  '/admin/event/time': {
    pageTitle: '타임 이벤트',
    nav: '타임 이벤트',
  },
  '/admin/event/instantly': {
    pageTitle: '즉시 이벤트',
    nav: '즉시 이벤트',
  },
  dashboard: { pageTitle: '', nav: '대시보드' },
  tickets: { pageTitle: '', nav: '티켓' },
  management: { pageTitle: '', nav: '관리' },
  setting: { pageTitle: '', nav: '설정' },
  general: { pageTitle: '', nav: '일반설정', icon: SettingOutlined },
  event: { pageTitle: '', nav: '이벤트 설정', icon: GiftOutlined },
  '/agent': {
    pageTitle: '대시보드',
    nav: '대시보드',
    icon: DashboardOutlined,
  },
  '/agent/ticket': {
    pageTitle: '나의 티켓',
    nav: '나의 티켓',
    icon: ProfileOutlined,
  },
  '/agent/answer': {
    pageTitle: '빠른답변',
    nav: '빠른답변',
    icon: ThunderboltOutlined,
  },
  '/agent/branch': {
    pageTitle: '점포공감',
    nav: '점포공감',
    icon: ShopOutlined,
  },
  '/agent/roadshow': {
    pageTitle: '로드쇼',
    nav: '로드쇼',
    icon: StarOutlined,
  },
};

export const agentRouter = [
  {
    type: 'group',
    label: '대시보드',
  },
  {
    path: '/agent',
    label: '대시보드',
    page: '대시보드',
    icon: DashboardOutlined,
    children: [
      {
        path: '/agent/dkdkdk',
        label: 'ddddd',
        page: 'dddd',
      },
    ],
  },
  {
    type: 'group',
    label: '티켓',
  },
  {
    path: '/agent/ticket',
    label: '나의 티켓',
    page: '나의 티켓',
    icon: ProfileOutlined,
  },
  {
    type: 'group',
    label: '관리',
  },
  {
    path: '/agent/answer',
    label: '빠른답변',
    page: '빠른답변',
    icon: ThunderboltOutlined,
  },
  {
    path: '/agent/branch',
    label: '점포공감',
    page: '점포공감',
    icon: ShopOutlined,
  },
  {
    path: '/agent/roadshow',
    label: '로드쇼',
    page: '로드쇼',
    icon: StarOutlined,
  },
];

export const router = [
  {
    type: 'group',
  },

  {
    role: 'admin',
    path: '/admin',
    title: '실시간',
    page: '대시보드 - 실시간',
    icon: DashboardOutlined,
    children: [{ path: '/monitor' }],
  },
  {
    type: 'group',
  },
  {
    type: 'sub',
    path: '/agent',
    title: '대시보드',
    page: '대시보드',
    icon: DashboardOutlined,
    children: [
      {
        path: '/ticket',
        title: '나의 티켓',
        page: '나의 티켓',
        icon: ProfileOutlined,
      },
    ],
  },
];
