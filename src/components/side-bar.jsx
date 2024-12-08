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
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[hsl(217,91,55)] shadow-lg pt-[72px]">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center text-white text-center">
        <label
          htmlFor="fname"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFF',
            textAlign: 'center',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontFamily: 'Euphoria Script, cursive',
            fontSize: 50,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginTop: '30px',
            marginBottom: '30px',
          }}
        >
          <NavLink to="/">Aitee</NavLink>
        </label>
      </div>

      {/* Menu Items */}
      <nav className="mt-4">
        {Items.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center px-5 py-4 text-white transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 shadow-md scale-105'
                  : 'hover:bg-[hsl(217,91,62)] hover:scale-105'
              }`
            }
          >
            <img src={item.icon} alt={`${item.name} Icon`} className="h-6 w-6 mr-3" />
            <span className="text-lg font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
