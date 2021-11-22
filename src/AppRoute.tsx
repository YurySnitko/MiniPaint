import { observer } from 'mobx-react-lite';
import React from 'react'
import { Navigate, Route, Routes } from 'react-router';
import { useStore } from '.';
import { LoginPage } from './components/Login/LoginPage';
import { SignupPage } from './components/Login/SignupPage';
import { ImagesFeed } from './components/Main/ImagesFeed';
import { NewImage } from './components/NewImage/NewImage';

export const AppRoute: React.FC = observer(() => {
    const { authStore } = useStore();

    return authStore.isAuth
        ? (<Routes>
            <Route path='/newimage' element={<NewImage />} />
            <Route path='/images' element={<ImagesFeed />} />
            <Route path='*' element={<Navigate to='/images' />} />
        </Routes>)
        : (<Routes>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>)
})

