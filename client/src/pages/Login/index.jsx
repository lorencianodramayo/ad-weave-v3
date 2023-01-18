import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import {
  Col,
  Row,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  ConfigProvider,
  theme
} from 'antd';

import LoginNotification from '../../components/LoginNotification';
import Loader from '../../components/Loader';

import {
  loginContainer,
  leftPanel,
  rightPanel,
  imagePanel,
  h1Props,
  h2Props,
} from './style';

import Logo from '../../assets/logo/smartly.svg';

const { defaultAlgorithm } = theme;

function Login() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    document.title = 'Login | Ad-Weave';
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
    setStatus(true);
  };

  const onClear = () => {
    setStatus(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
      }}
    >
      <Row style={loginContainer}>
        <Col xs={24} md={15} lg={11} xl={9} style={leftPanel}>
          <div style={imagePanel}>
            <img src={Logo} alt="smartly" />
          </div>
          <div>
            <Typography.Title level={1} style={h1Props}>
              Welcome Back!
            </Typography.Title>
            <Typography.Title level={4} style={h2Props}>
              Sign in to your account to continue.
            </Typography.Title>

            <Form
              name="basic"
              initialValues={{
                remember: true,
                username: '',
                password: '',
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Username"
                  allowClear
                  onChange={onClear}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Password"
                  onChange={onClear}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>

          {status && <LoginNotification />}

          {status && <Loader />}
        </Col>
        <Col xs={0} md={9} lg={13} xl={15} style={rightPanel} />
      </Row>
    </ConfigProvider>
  );
}

export default Login;
