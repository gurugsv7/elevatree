import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    // Check on mount
    checkAuth();

    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const AuthButtons = () => (
    isLoggedIn ? (
      <div className="flex space-x-4 items-center">
        <Link
          to="/profile" // or your profile route
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <User className="h-5 w-5 mr-1" />
          My Profile
        </Link>
        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          Logout
          <LogOut className="ml-2 h-4 w-4" />
        </button>
      </div>
    ) : (
      <Link to="/signin">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          Sign In
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </Link>
    )
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Logo" className="h-48 w-56 -mt-4 -ml-4" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link 
                to="/mentors" 
                className="text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Find Mentors
              </Link>
              <Link 
                to="/resources" 
                className="text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </Link>
              <AuthButtons />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/mentors"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Find Mentors
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Resources
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile" // or your profile route
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
