import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { Mentors } from './pages/Mentors';
import { MentorDetails } from './pages/MentorDetails';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Resources } from './pages/Resources';
import { Dashboard } from './pages/Dashboard';
import { GetStarted } from './pages/GetStarted';
import { Profile } from './pages/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';

// Layout wrapper component that conditionally renders Navigation and Footer
function LayoutWrapper() {
  const location = useLocation();
  const hideElements = ['/signin', '/profile'].includes(location.pathname);
  
  return (
    <div className="min-h-screen flex flex-col">
      {!hideElements && <Navigation />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideElements && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={
          <ProtectedRoute requireAuth={false}>
            <SignIn />
          </ProtectedRoute>
        } />

        {/* Wrap all routes that need layout */}
        <Route element={<LayoutWrapper />}>
          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/mentors" element={
            <ProtectedRoute>
              <Mentors />
            </ProtectedRoute>
          } />
          <Route path="/mentor/:id" element={
            <ProtectedRoute>
              <MentorDetails />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          } />
          <Route path="/resources" element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          } />
          <Route path="/get-started" element={
            <ProtectedRoute>
              <GetStarted />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Route>

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;