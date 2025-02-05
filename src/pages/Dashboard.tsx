import React from 'react';
import { Navigate } from 'react-router-dom';

export function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to your Dashboard</h1>
        <div className="bg-white shadow-xl rounded-lg p-8 transition-shadow duration-300 hover:shadow-2xl">
          <p className="text-gray-600">You're now signed in to your account.</p>
        </div>
      </div>
    </div>
  );
}
