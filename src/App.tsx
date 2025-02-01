import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { Mentors } from './pages/Mentors';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Resources } from './pages/Resources';

function App() {
  return (
    <Router basename="/elevatree">
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            {/* Other routes will be added as we build them */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Change the export syntax
export default App;