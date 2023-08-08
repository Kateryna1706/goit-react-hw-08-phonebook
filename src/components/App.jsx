import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Navigation />
      <AuthNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
