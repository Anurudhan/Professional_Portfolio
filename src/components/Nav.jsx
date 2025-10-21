import React, { useState, useEffect } from "react";
import "../CSS/nav.css";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Anurudhan V
        </Link>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActiveLink('/') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActiveLink('/about') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={isActiveLink('/skills') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActiveLink('/projects') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActiveLink('/contact') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMobileMenu();
            }
          }}
          tabIndex="0"
          role="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;