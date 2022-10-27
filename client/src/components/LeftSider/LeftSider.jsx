import React from 'react';
import './LeftSider.less';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const LeftSider = ({
    name,
    items
}) => {
  const content = (icon, label) => (
    <>
    {icon}
    <span>{label}</span>
    </>
  )

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
        >
          {items.map(item => (
            <Menu.Item key={item.key}>
              {item.path && <Link to={item.path}>
                {content(item.icon, item.label)}
              </Link>}
              {item.onClick && <div onClick={item.onClick}>
                {content(item.icon, item.label)}
              </div>}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
  )
};

export default LeftSider;