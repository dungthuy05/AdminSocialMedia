import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import DashboardIcon from '../assets/images/dashboard.svg';
import PendingPostIcon from '../assets/images/post.svg';
import PendingUserIcon from '../assets/images/pending-user.svg';

const Items = [
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    link: '/',
  },
  {
    name: 'Pending Posts',
    icon: PendingPostIcon,
    link: '/pending-post',
  },
  {
    name: 'Pending Users',
    icon: PendingUserIcon,
    link: '/pending-user',
  },
];

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sideBarRef = useRef(null);
  const hamburgerRef = useRef(null); // Thêm ref cho nút hamburger

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) // Kiểm tra nút hamburger
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Nút Hamburger Menu */}
      <button
        ref={hamburgerRef}
        className="fixed bottom-4 left-4 z-50 p-2 bg-gray-100 shadow-lg rounded-md block lg:hidden"
        onClick={(event) => {
          event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Sidebar */}
      <aside
        ref={sideBarRef}
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 z-40`}
      >
        {/* Menu Items */}
        <nav className="absolute top-[35%] transform -translate-y-1/2 w-full">
          {Items.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 mx-4 my-4 rounded-lg transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 shadow-md scale-105'
                    : 'hover:bg-[hsl(220,14,95)] hover:scale-105'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-gray-100 text-white'
                        : 'group-hover:bg-gray-200 group-hover:shadow-md'
                    }`}
                  >
                    <img src={item.icon} alt={`${item.name} Icon`} className="h-6 w-6" />
                  </div>
                  <span className="ml-2 text-[17px] font-semibold">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
