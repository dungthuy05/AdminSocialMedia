import './App.scss';
import Header from '../components/header.jsx';
import Navigation from './nav/Navigation.js';

export default function Layout({ children }) {
  return (
    <main className="App flex justify-center gap-5">
      <Header />
      <div
        style={{
          width: '220px', // Chiều rộng cố định của Navigation
          minWidth: '220px',
          height: '100%', // Đảm bảo chiều cao đầy đủ
          display: 'flex',
        }}
      >
        <Navigation />
      </div>
      <div
        style={{
          flexGrow: 1, // Nội dung chính chiếm phần còn lại
          overflow: 'auto', // Cuộn nếu nội dung dài hơn
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </main>
  );
}
