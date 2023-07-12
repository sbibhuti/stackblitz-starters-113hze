import { Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import React from 'react';

const Routes_URL = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: LoginScreen,
    },
    {
      path: '/dashboard',
      exact: false,
      component: LoginScreen,
    },
  ];

  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={() => <route.component />}
        />
      ))}
    </Routes>
  );
};

export default Routes_URL;
