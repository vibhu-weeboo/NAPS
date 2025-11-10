import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembershipPage from './pages/MembershipPage';
import ContactPage from './pages/ContactPage';
import IPSFPage from './pages/IPSFPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-gray-300 flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/ipsf" element={<IPSFPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;