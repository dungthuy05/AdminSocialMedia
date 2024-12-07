import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.scss';
import AdminPage from './adminPage/AdminPage.js';
import NewFeed from './adminPage/NewFeed.js';
import AcceptFriendPage from './friendHomePage/AcceptFriendPage'

import Navigation from './nav/Navigation.js';

function App() {
  return (
    <div className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        gap: '20px'
      }}
    >
      <BrowserRouter>
      <div style={{
        width: '220px', // Chiều rộng cố định của Navigation
        minWidth: '220px',
        height: '100%', // Đảm bảo chiều cao đầy đủ
        display: 'flex',
      }}>
        <Navigation />
      </div>
        <div style={{
        flexGrow: 1, // Nội dung chính chiếm phần còn lại
        overflow: 'auto', // Cuộn nếu nội dung dài hơn
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Routes>
        <Route path="/" element={<AdminPage />} />
                <Route path="/post" element={<NewFeed />} />
                <Route path="/pendinguser" element={<AcceptFriendPage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;