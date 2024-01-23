import Link from 'next/link';
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

export const menuInfo: MenuInfoType = {
  '/': {
    pageTitle: '대시보드 - 실시간',
    nav: '실시간',
    icon: DashboardOutlined,
  },
  '/monitor': {
    pageTitle: '모니터링',
    nav: '모니터링',
    icon: FundViewOutlined,
  },
  '/report': {
    pageTitle: '리포트',
    nav: '리포트',
    icon: PieChartOutlined,
  },
  '/ticket': {
    pageTitle: '티켓 조회',
    nav: '티켓 조회',
    icon: SearchOutlined,
  },
  '/ticket/setting': {
    pageTitle: '티켓 설정',
    nav: '티켓 설정',
    icon: ProfileOutlined,
  },
  '/team': { pageTitle: '팀', nav: '팀', icon: TeamOutlined },
  '/member': {
    pageTitle: '팀원 관리',
    nav: '팀원 관리',
    icon: UserAddOutlined,
  },
  '/manager': {
    pageTitle: '관리자',
    nav: '관리자',
    icon: SolutionOutlined,
  },
  '/counselor': {
    pageTitle: '상담사',
    nav: '상담사',
    icon: UserOutlined,
  },
  '/message': {
    pageTitle: '챗봇 메세지',
    nav: '챗봇 메세지',
    icon: CommentOutlined,
  },
  '/answer': {
    pageTitle: '빠른답변',
    nav: '빠른답변',
    icon: ThunderboltOutlined,
  },
  '/branch': {
    pageTitle: '점포공감',
    nav: '점포공감',
    icon: ShopOutlined,
  },
  '/roadshow': {
    pageTitle: '로드쇼',
    nav: '로드쇼',
    icon: StarOutlined,
  },
  '/general': {
    pageTitle: '일반',
    nav: '일반',
  },
  '/general/auto': {
    pageTitle: '자동화',
    nav: '자동화',
  },
  '/general/rank': {
    pageTitle: '직급',
    nav: '직급',
  },
  '/general/abusive': {
    pageTitle: '욕설필터',
    nav: '욕설필터',
  },
  '/operation': {
    pageTitle: '운영 시간 설정',
    nav: '운영 시간 설정',
    icon: FieldTimeOutlined,
  },
  '/chatbot': {
    pageTitle: '챗봇 설정',
    nav: '챗봇 설정',
    icon: RobotOutlined,
  },
  '/event/time': {
    pageTitle: '타임 이벤트',
    nav: '타임 이벤트',
  },
  '/event/instantly': {
    pageTitle: '즉시 이벤트',
    nav: '즉시 이벤트',
  },
  dashboard: { pageTitle: '', nav: '대시보드' },
  tickets: { pageTitle: '', nav: '티켓' },
  management: { pageTitle: '', nav: '관리' },
  setting: { pageTitle: '', nav: '설정' },
  general: { pageTitle: '', nav: '일반설정', icon: SettingOutlined },
  event: { pageTitle: '', nav: '이벤트 설정', icon: GiftOutlined },
};
