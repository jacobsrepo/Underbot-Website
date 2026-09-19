import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/#about', label: 'About' },
    { to: '/#specs', label: 'Specs' },
    { to: '/#power', label: 'Power' },
    { to: '/#resources', label: 'Resources' },
    { to: '/#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.slice(2);
      if (location.pathname !== '/') {
        window.location.href = to;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container-wide">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-mark">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="6" y="10" width="6" height="8" rx="1" fill="currentColor" opacity="0.6"/>
              <rect x="16" y="10" width="6" height="8" rx="1" fill="currentColor" opacity="0.6"/>
              <circle cx="9" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="19" cy="6" r="1.5" fill="currentColor"/>
              <line x1="9" y1="22" x2="9" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="19" y1="22" x2="19" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="navbar__logo-text">Underbot</span>
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.to}
              href={link.to}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/dashboard"
            className={`navbar__link navbar__link--dashboard ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <BarChart3 size={16} />
            Dashboard
          </Link>
        </div>

        <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
