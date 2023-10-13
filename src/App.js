import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setShowSidebar(false);
        setShowFooter(true);
      } else {
        setShowSidebar(true);
        setShowFooter(false);
      }
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="body">
      <Home />
      <div className="about-bg">
        <div className="container p-5">
          <AboutMe />
          <Skills />
          <Projects />
          {showSidebar && <Sidebar />}
          {showFooter && <Footer />}
          <div className='text-center'>
            <div style={{ paddingTop: '20px' }}>Developed by Aldous Maranga | 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
