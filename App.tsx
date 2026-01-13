
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './views/Home.tsx';
import AboutPage from './views/AboutPage.tsx';
import ProcessPage from './views/ProcessPage.tsx';
import ContactPage from './views/ContactPage.tsx';
import JournalPage from './views/JournalPage.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle back button and direct linking simulation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'process': return <ProcessPage />;
      case 'contact': return <ContactPage />;
      case 'journal': return <JournalPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#4A6741] selection:text-white overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main className="flex-grow">
        <div key={currentPage} className="page-transition">
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
