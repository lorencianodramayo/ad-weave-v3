import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import SuspenseLoader from '../utils/SuspenseLoader';

import 'antd/dist/reset.css';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
