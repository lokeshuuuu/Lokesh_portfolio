import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-6 h-6" style={{ color: '#facc15' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" style={{ color: '#1f2937' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
               <Link
                  to="skills"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
          </ul>

          {/* Resume Button */}
          <a href="#" className="resume-button">
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
                <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Resume
                </a>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
