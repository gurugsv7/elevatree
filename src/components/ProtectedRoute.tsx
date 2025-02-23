import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true 
}) => {
  const user = localStorage.getItem('user');
  const isAuthenticated = !!user;

  if (requireAuth && !isAuthenticated) {
    // Redirect to sign in if authentication is required but user is not authenticated
    return <Navigate to="/signin" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    // Redirect to home if authentication is not required but user is authenticated
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};