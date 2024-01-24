import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { CookieValueTypes, getCookie } from 'cookies-next';
import { themeModeAction } from '@/lib/actions';

const ThemeSwitch = () => {
  const themeMode: CookieValueTypes = getCookie('theme-mode');
  const [checked, setChecked] = useState<boolean>();

  const onChange = async (bool: boolean) => {
    setChecked(bool);
    await themeModeAction(themeMode === 'dark' ? 'light' : 'dark');
    // if (themeMode === 'dark') {
    //   document.body.classList.remove('dark');
    //   document.body.classList.add('light');
    // } else {
    //   document.body.classList.remove('light');
    //   document.body.classList.add('dark');
    // }
  };

  useEffect(() => {
    setChecked(themeMode === 'dark' ? true : false);
    // document.body.classList.remove('dark');
    // document.body.classList.remove('light');
    // document.body.classList.add(themeMode === 'dark' ? 'dark' : 'light');
  }, [themeMode]);

  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      checked={checked}
      onChange={onChange}
      className="theme-switch"
    />
  );
};

export default ThemeSwitch;
