import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';

const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Skills = lazy(() => import('./Components/Skills'));

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Create observer to watch for class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app ${isDark ? 'app-dark' : 'app-light'}`}>

      <Navbar />
      <main className="main">
        <Hero />
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Skills...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense>
        {/* Add more sections here */}
      </main>
    </div>
  );
}

export default App;
