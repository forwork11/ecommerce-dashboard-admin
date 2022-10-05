import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { getAuth } from '../../utils/utils';

const RequireAuth = ({
    element,
    isLogin,
}) => {
    const location = useLocation();
    const auth = getAuth();

    if (isLogin) {
        if (auth?.token) {
            return <Navigate to={ROUTES.HOME} />;
        }
    } else if (!auth?.token) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }

    return element;
};

export default RequireAuth;