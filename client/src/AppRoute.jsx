import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import ROUTES from './constants/routes';
import Home from './pages/Home';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';

const AppRoute = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PRODUCTS} />} />
        <Route path={ROUTES.PRODUCTS} element={<RequireAuth element={<Home />} />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
);

export default AppRoute;