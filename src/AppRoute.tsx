import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { useStore } from 'index';
import { ImagesFeed } from './components/ImagesFeed/ImagesFeed';
import { NewImage } from './components/NewImage/NewImage';
import { Signup } from 'components/Auth/Signup/Signup';
import { Login } from 'components/Auth/Login/Login';

export const AppRoute: React.FC = observer(() => {
  const { authStore } = useStore();

  return authStore.isAuth ? (
    <Routes>
      <Route path="/newimage" element={<NewImage />} />
      <Route path="/images" element={<ImagesFeed />} />
      <Route path="*" element={<Navigate to="/images" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
});
