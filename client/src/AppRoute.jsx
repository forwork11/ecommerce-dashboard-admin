import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import ROUTES from './constants/routes';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

const AppRoute = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PRODUCTS} />} />
        <Route path={ROUTES.PRODUCTS} element={<RequireAuth element={<Product />} />} />
        <Route path={ROUTES.LOGIN} element={<RequireAuth element={<Login />} isLogin={true} />} />
    </Routes>
);

export default AppRoute;