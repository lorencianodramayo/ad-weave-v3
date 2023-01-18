import {
  ApiOutlined,
  DashboardOutlined,
  ReconciliationOutlined,
  NotificationOutlined,
  SettingOutlined,
  BulbOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import {
  Typography,
  Layout,
  Menu,
  theme,
  Divider,
  Avatar,
  Button,
  Badge,
} from 'antd';
import { useState } from 'react';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />),
  getItem('Tickets', '2', <ReconciliationOutlined />),
  getItem('Knowledge Base', '3', <ReadOutlined />),
  getItem('Integration', '4', <ApiOutlined />),
  //   getItem('Knowledge Base', 'sub1', <UserOutlined />, [
  //     getItem('Tom', '3'),
  //     getItem('Bill', '4'),
  //     getItem('Alex', '5'),
  //   ]),
  //   getItem('Team', 'sub2', <TeamOutlined />, [
  //     getItem('Team 1', '6'),
  //     getItem('Team 2', '8'),
  //   ]),
  //   getItem('Files', '9', <FileOutlined />),
];
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        collapsedWidth={50}
        theme="light"
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        {collapsed ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar>C</Avatar>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar>C</Avatar>
              <div
                style={{
                  marginLeft: '6px',
                  width: '128px',
                }}
              >
                <Typography.Text style={{ fontWeight: 800 }} ellipsis={true}>
                  Lorenciano Dramayo
                </Typography.Text>
                <Typography.Text
                  type="secondary"
                  style={{
                    fontSize: '9px',
                    textTransform: 'uppercase',
                  }}
                  ellipsis={true}
                >
                  Ad-Weave
                </Typography.Text>
              </div>
            </div>
            <Divider style={{ margin: '8px 0' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                icon={
                  <Badge dot>
                    <NotificationOutlined />
                  </Badge>
                }
                type="text"
                shape="circle"
              />
              <Divider type="vertical" />

              <Button icon={<SettingOutlined />} type="text" shape="circle" />
              <Divider type="vertical" />
              <Button icon={<BulbOutlined />} type="text" shape="circle" />
            </div>
            <Divider style={{ margin: '8px 0' }} />
          </>
        )}

        <Menu defaultSelectedKeys={['1']} items={items} mode="inline" />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '16px',
          }}
        >
          <Typography.Title level={5}>
            Support Service Dashboard
          </Typography.Title>
          <Divider style={{ margin: '16px 0'}}/>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
