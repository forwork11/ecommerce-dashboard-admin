import { Layout } from 'antd';
import React from 'react';
import Foot from '../Footer/Footer';
import Head from '../Header/Header';
import LeftSider from '../LeftMenu/LeftMenu';
import './Layout.less';
const { Content } = Layout;

const AppLayout = ({
    noHeader,
    noLeftMenu,
    noFooter,
    children
}) => (
  <Layout>
    {!noLeftMenu && <LeftSider />}
    <Layout className="mh-100">
        {!noHeader && <Head />}
        <Content
            style={{
            margin: '24px 16px 0',
            }}
        >
            <div
            className="site-layout-background"
            style={{
                padding: 24,
                minHeight: 360,
            }}
            >
            {children}
            </div>
        </Content>
        {!noFooter && <Foot />}
    </Layout>
  </Layout>
);

export default AppLayout;