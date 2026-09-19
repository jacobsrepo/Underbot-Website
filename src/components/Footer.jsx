import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Mail, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">Underbot</h3>
            <p className="footer__desc">
              400mm Compact Lab Rover — an open-source autonomous mobile manipulation platform for AI research.
            </p>
          </div>
          <div className="footer__col">
            <h4>Navigation</h4>
            <a href="/#about">About</a>
            <a href="/#specs">Specifications</a>
            <a href="/#power">Power Systems</a>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            <a href="#"><GitBranch size={14} /> GitHub Repository</a>
            <a href="#"><ExternalLink size={14} /> Documentation</a>
            <a href="#"><ExternalLink size={14} /> 3D Models (STL)</a>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <a href="mailto:team@underbot.dev"><Mail size={14} /> team@underbot.dev</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Underbot Project. Open source under MIT License.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
