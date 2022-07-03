import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '../constants/appRoutes';
import { HomePage, PingerPage } from '../pages';

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={APP_ROUTES.MAIN} />} />
      <Route path={APP_ROUTES.MAIN} element={<HomePage />} />
      <Route path={APP_ROUTES.PINGER} element={<PingerPage />} />
    </Routes>
  );
}
