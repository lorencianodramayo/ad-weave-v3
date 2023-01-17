import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import SuspenseLoader from '../utils/SuspenseLoader';

import 'antd/dist/reset.css';

const Login = lazy(() => import('../pages/Login'));

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/" element={<>hello</>} />
      </Routes>
    </Suspense>
  );
}

export default App;
