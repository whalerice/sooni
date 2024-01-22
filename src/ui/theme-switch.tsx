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
  };

  useEffect(() => {
    setChecked(themeMode === 'dark' ? true : false);
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
