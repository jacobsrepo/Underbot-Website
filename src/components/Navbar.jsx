import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, BarChart2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo flex-center">
          <Bot size={28} className="logo-icon text-gradient" />
          <span className="logo-text text-gradient">Underbot</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={`nav-link flex-center ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              <BarChart2 size={18} className="nav-icon" />
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
