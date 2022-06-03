import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/loader/Loader';

const Home = React.lazy(() => import('../pages/home/Home'));
const Hero = React.lazy(() => import('../pages/hero/Hero'));
const NotFound = React.lazy(() => import('../pages/notFound/NotFound'));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:heroName/:heroId" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
