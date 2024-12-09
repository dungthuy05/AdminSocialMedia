import './App.scss';
import Header from '../components/header.jsx';
import SideBar from '../components/side-bar.jsx';

export default function Layout({ children }) {
  return (
    <main className="min-w-screen min-h-screen m-0 p-0 box-border">
      <Header />
      <SideBar />
      <div className="opacity-0 pointer-events-none w-full h-[60px]"></div>
      <section className="flex justify-center items-center">
        <div className="lg:block lg:opacity-0 pointer-events-none lg:w-64 hidden"></div>
        <div className="">{children}</div>
      </section>
    </main>
  );
}
