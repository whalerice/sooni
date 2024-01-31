'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '@/styles/login.scss';
import { Button, Card, Form, Input, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  // const { pending } = useFormStatus();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);
  return (
    <Layout className="login-area">
      <Card title="Admin" className="login-card">
        <Form form={form} name="login" onFinish={dispatch}>
          <Form.Item
            name="userId"
            rules={[{ required: true, message: 'Please input your user id!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="ID" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}
          <Form.Item shouldUpdate>
            {() => (
              <Button
                size="large"
                block
                type="primary"
                htmlType="submit"
                disabled={
                  !clientReady ||
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                로그인
              </Button>
            )}
          </Form.Item>
        </Form>
        {errorMessage}
      </Card>
    </Layout>
  );
}
