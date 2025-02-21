import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Career Guidance
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded">
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:bg-indigo-700 px-3 py-2 rounded">
                  Dashboard
                </Link>
                <Link to="/profile" className="hover:bg-indigo-700 px-3 py-2 rounded">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-indigo-700 px-3 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded">
                  Login
                </Link>
                <Link to="/register" className="hover:bg-indigo-700 px-3 py-2 rounded">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 