import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { useAuth } from '../../utils/utils';

const RequireAuth = ({
    element,
}) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.token) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }

    return element;
};

export default RequireAuth;