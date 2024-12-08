import './App.scss';
import Header from '../components/header.jsx';
// import Navigation from './nav/Navigation.js';
import SideBar from '../components/side-bar.jsx';

export default function Layout({ children }) {
  return (
    <main className="App relative flex justify-center gap-5">
      <Header />
      <SideBar />
      <div className="absolute top-[64px] left-[272px] w-[calc(100vw-288px)]">{children}</div>
    </main>
  );
}
