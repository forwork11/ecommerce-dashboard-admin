import { LogoutOutlined, OrderedListOutlined } from '@ant-design/icons';
import React from 'react';
import LeftSider from '../../../components/LeftSider/LeftSider';
import ROUTES from '../../../constants/routes';
import { logout } from '../../../utils/auth';

const LeftMenu = () => {

    return (
        <LeftSider
        name={"John Doe"}
        items={[
            {
            key: '1',
            label: 'Products',
            icon: React.createElement(OrderedListOutlined),
            path: ROUTES.PRODUCTS,
            },
            {
            key: '2',
            label: 'Logout',
            icon: React.createElement(LogoutOutlined),
            onClick: () => logout()
            }
        ]} />
    )
};

export default LeftMenu;