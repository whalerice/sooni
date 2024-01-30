import { useState } from 'react';
import { Button, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { changeTheme } from '@/lib/actions';

// type themeType = {
//   [key: string]: boolean;
// };
// const themeKey: themeType = {
//   dark: true,
//   light: false,
// };

const ThemeSwitch = ({ theme }: any) => {
  // const [checked, setChecked] = useState<boolean>(themeKey[theme]);

  const onChange = () => {
    // setChecked(bool);
    changeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={onChange}
      icon={theme === 'dark' ? <CheckOutlined /> : <CloseOutlined />}
      shape="circle"
      size="small"
    />
    // <Switch
    //   checkedChildren={<CheckOutlined />}
    //   unCheckedChildren={<CloseOutlined />}
    //   checked={checked}
    //   onChange={onChange}
    //   className="theme-switch"
    // />
  );
};

export default ThemeSwitch;
