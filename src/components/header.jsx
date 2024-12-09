import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../libs/axios';
import { useAuth } from '../libs/authProvider';
import BellIcon from '../assets/bell.svg';
import GuestUser from '../assets/images/guest-user.png';

export default function Header() {
  const { user, logout } = useAuth();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const notificationRef = useRef(null);
  const userDropdownRef = useRef(null);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notification?page=1&limit=100');
        const sortedNotifications = response.data.notifications.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setNotifications(sortedNotifications);

        const unread = sortedNotifications.filter((n) => !n.status).length;
        setUnreadCount(unread > 9 ? '9+' : unread);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMarkAsRead = async (notificationId) => {
    try {
      // check if notification is already read
      if (notifications.find((n) => n.id === notificationId).status) {
        return;
      }

      await axios.put(`/notification/${notificationId}`);
      setNotifications((prevNotifications) =>
        prevNotifications.map((n) => (n.id === notificationId ? { ...n, status: true } : n)),
      );
      setUnreadCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-white flex justify-between items-center shadow-md z-50">
      <div className="flex justify-between items-center w-full px-6">
        <div className="flex flex-col lg:pl-10 items-center justify-center text-center">
          <label
            htmlFor="fname"
            className="flex flex-col items-center justify-center text-black text-center"
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: 'Euphoria Script, cursive',
              fontSize: 50,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '60px',
            }}
          >
            <Link to="/">Aitee</Link>
          </label>
        </div>
        <div className="relative flex items-center">
          {/* Notification Bell */}
          <div ref={notificationRef} className="relative mr-[2px]">
            <button
              className="relative text-white p-2 rounded-full hover:bg-gray-200 group"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <img
                className="h-6 w-6 group-hover:scale-110 transition-transform duration-200"
                src={BellIcon}
                alt="Notifications"
              />
              {unreadCount !== 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] text-center rounded-full h-4 w-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  {unreadCount}
                </span>
              )}
            </button>
            <div
              className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 transform transition-transform duration-200 ${
                isNotificationOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="px-4 py-3 border-b">
                <span className="text-sm font-medium text-gray-700">Notifications</span>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleMarkAsRead(notification.id)}
                      className={`px-4 py-2 text-sm ${
                        notification.status
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-blue-50 text-blue-700 font-bold'
                      } hover:bg-gray-200 transition-colors duration-200`}
                    >
                      {notification.systemNotification.message}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No notifications available.</div>
                )}
              </div>
            </div>
          </div>

          {/* User Dropdown */}
          <div ref={userDropdownRef} className="relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="bg-white text-black py-1 px-3 rounded flex items-center sm:space-x-2 hover:bg-gray-200"
            >
              <span className="max-sm:hidden text-sm font-medium flex">
                Welcome,&nbsp;<p className="text-[hsl(0,0,40)]">{user.username || 'User'}</p>!
              </span>
              <img
                src={user.avatar || GuestUser}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-transform duration-200 ${
                isUserDropdownOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="px-4 py-3">
                <span className="text-sm text-gray-700">Signed in as</span>
                <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
              </div>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
