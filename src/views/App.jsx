import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { useAuth } from '../libs/authProvider.js';

import Layout from './layout.jsx';
import Dashboard from './dashboard/index.jsx';
import PendingPost from './pending-post/index.jsx';
// import AdminPage from './adminPage/AdminPage.js';
// import NewFeed from './adminPage/NewFeed.js';
import AcceptFriendPage from './friendHomePage/AcceptFriendPage.js';
import LoginForm from '../components/auth/login.jsx';
import ForgotPassword from '../components/auth/forgot-password.jsx';

const ProtectedRoute = ({ children, LoginUrl }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to={LoginUrl} />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* route for dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute LoginUrl={'/login'}>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* route for post */}
        <Route
          path="/pending-post"
          element={
            <ProtectedRoute LoginUrl={'/login'}>
              <Layout>
                <PendingPost />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* route for friend */}
        <Route
          path="/pending-user"
          element={
            <Layout>
              <AcceptFriendPage />
            </Layout>
          }
        />

        {/* route for login */}
        <Route path="/login" element={<LoginForm />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
