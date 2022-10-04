import { UploadOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import './LeftSider.less';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { delStorage } from '../../utils/utils';
import { storeAuth } from '../../actions/User';
import STORAGE from '../../constants/storage';
import ROUTES from '../../constants/routes';
const { Sider } = Layout;

const LeftSider = ({
    name,
}) => {
  const dispatch = useDispatch();
  const items = [
    {
      key: '1',
      label: 'Product',
      icon: React.createElement(UploadOutlined),
      onClick: () => window.location = ROUTES.PRODUCTS
    },
    {
      key: '2',
      label: 'Logout',
      icon: React.createElement(LogoutOutlined),
      onClick: () => {
        dispatch(storeAuth(null));
        delStorage(STORAGE.AUTH);
        window.location = ROUTES.LOGIN
      }
    }
  ];

  return (
      <Sider
        className='left-sider'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <h3>{name}</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
  )
};

export default LeftSider;