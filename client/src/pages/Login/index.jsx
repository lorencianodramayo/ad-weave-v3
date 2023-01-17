import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import { Col, Row, Typography, Button, Checkbox, Form, Input } from 'antd';

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
    <Row style={loginContainer}>
      <Col xs={24} md={12} lg={9} style={leftPanel}>
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
      <Col xs={0} md={12} lg={15} style={rightPanel} />
    </Row>
  );
}

export default Login;