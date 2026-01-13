import { lazy, Suspense, useEffect, useState } from 'react';

const Home = lazy(() => import('./views/Home.tsx'));
const AboutPage = lazy(() => import('./views/AboutPage.tsx'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // md breakpoint
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} isMobile={isMobile} />;
      case 'about': return <AboutPage isMobile={isMobile} />;
      case 'process': return <ProcessPage isMobile={isMobile} />;
      case 'contact': return <ContactPage isMobile={isMobile} />;
      case 'journal': return <JournalPage isMobile={isMobile} />;
      default: return <Home onNavigate={setCurrentPage} isMobile={isMobile} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main className="flex-grow">
        <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};
