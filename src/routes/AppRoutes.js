import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import Heroe from 'pages/heroe/Heroe';
import NotFound from 'pages/notFound/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:heroeName/:heroeId" element={<Heroe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
