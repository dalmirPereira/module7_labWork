//--------------- Module 7 - Lab Work Ex4 ----------------------
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from "../contex/AuthenticationContex/RequireAuth";
import DashboardPage from '../pages/DashboardPage';
import Exercise1 from '../pages/Exercise1';
import Exercise2 from '../pages/Exercise2';
import Exercise3 from '../pages/Exercise3';
import LoginPage from '../pages/LoginPage';
import PageNotFound from '../pages/PageNotFound';


function AppRoutes(props) {

  return (

    <Routes>

        <Route path='/' element={<LoginPage />} />

        <Route path="/dash" element={
           <RequireAuth>
            <DashboardPage {...props} />
          </RequireAuth>
        }>
            <Route path="exercise1" element={<Exercise1 />} />
            <Route path="exercise2" element={<Exercise2 />} />
            <Route path="exercise3" element={<Exercise3 />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}

export default AppRoutes;
