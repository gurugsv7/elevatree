import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { Mentors } from './pages/Mentors';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Resources } from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            {/* Other routes will be added as we build them */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;