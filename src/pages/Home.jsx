import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Battery, Sun, Cpu, Database, DollarSign, GitBranch, Mail, ArrowRight, Layers } from 'lucide-react';
import './Home.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const materialY = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);
  const materialOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Meet <span className="text-gradient">Underbot</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            The Ultimate 400mm Mobile Manipulation Robot.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary">Explore Features <ArrowRight size={18} className="ml-2" /></button>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image-container animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/images/hero.png" alt="Underbot Hero" className="hero-image" />
        </motion.div>
      </section>

      <div className="container sections-wrapper">
        
        {/* About Section */}
        <section className="glass-panel section-card">
          <h2>About the Project</h2>
          <p className="section-text">
            Underbot was born out of a desire to create a compact, highly capable autonomous lab rover. 
            Built by a dedicated team of roboticists and engineers, it serves as an open-platform for AI research and physical manipulation.
          </p>
          <div className="team-grid">
            <div className="team-member glow-border">
              <div className="avatar bg-gradient-1"></div>
              <h4>Alex</h4>
              <p>Hardware Lead</p>
            </div>
            <div className="team-member glow-border">
              <div className="avatar bg-gradient-2"></div>
              <h4>Jordan</h4>
              <p>AI & Software</p>
            </div>
            <div className="team-member glow-border">
              <div className="avatar bg-gradient-3"></div>
              <h4>Sam</h4>
              <p>Power Systems</p>
            </div>
          </div>
        </section>

        {/* Specs Grid */}
        <div className="specs-grid">
          {/* AI and ML */}
          <section className="glass-panel hover-card">
            <Cpu className="section-icon text-gradient" size={40} />
            <h3>AI & ML</h3>
            <ul className="spec-list">
              <li>TensorRT Pipelines</li>
              <li>YOLOv8 Object Detection</li>
              <li>Reinforcement Learning Pathing</li>
            </ul>
          </section>

          {/* Data */}
          <section className="glass-panel hover-card">
            <Database className="section-icon text-gradient-alt" size={40} />
            <h3>Data Architecture</h3>
            <ul className="spec-list">
              <li>TimescaleDB for Telemetry</li>
              <li>Redis Message Broker</li>
              <li>GraphQL API Endpoint</li>
            </ul>
          </section>
        </div>

        {/* Power Section */}
        <section className="glass-panel section-card power-section">
          <h2>Power Systems</h2>
          <div className="power-split">
            <div className="power-box">
              <Battery className="power-icon" size={32} color="var(--accent-cyan)" />
              <h4>Battery Pack</h4>
              <p><strong>Type:</strong> 2S LiPo</p>
              <p><strong>Voltage:</strong> 7.4V (8.4V max)</p>
              <p><strong>Capacity:</strong> 4000mAh</p>
              <p><strong>Discharge:</strong> 30C</p>
            </div>
            <div className="power-box">
              <Sun className="power-icon" size={32} color="#FFD700" />
              <h4>Solar Array</h4>
              <p><strong>Type:</strong> Monocrystalline</p>
              <p><strong>Panels:</strong> 1x Top Mount</p>
              <p><strong>Output:</strong> 5V / 1A (5 Watts)</p>
            </div>
          </div>
        </section>

        {/* Materials Scroll Animation */}
        <section className="materials-section">
          <h2><Layers className="inline-icon" /> Core Materials</h2>
          <div className="materials-viewport">
            <motion.div 
              className="materials-layer glass-panel"
              style={{ y: materialY, opacity: materialOpacity }}
            >
              <h3>Aluminum Extrusion Frame</h3>
              <p>2020 profile for extreme rigidity and modularity.</p>
            </motion.div>
            <motion.div 
              className="materials-layer glass-panel"
              style={{ y: useTransform(scrollYProgress, [0.6, 0.9], [150, -50]), opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]) }}
            >
              <h3>Carbon Fiber Panels</h3>
              <p>Lightweight shell providing EMI shielding and aesthetic appeal.</p>
            </motion.div>
            <motion.div 
              className="materials-layer glass-panel"
              style={{ y: useTransform(scrollYProgress, [0.7, 1], [200, 0]), opacity: useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 1]) }}
            >
              <h3>3D Printed PETG Mounts</h3>
              <p>Custom brackets for sensors, PCA9685, and Raspberry Pi.</p>
            </motion.div>
          </div>
        </section>

        {/* Finances & Resources */}
        <div className="specs-grid">
          <section className="glass-panel hover-card">
            <DollarSign className="section-icon text-gradient" size={40} />
            <h3>Project Finance</h3>
            <p className="finance-stat">$1,240 <span className="stat-label">Total Spent</span></p>
            <p>Open ledger coming soon.</p>
          </section>

          <section className="glass-panel hover-card">
            <GitBranch className="section-icon text-gradient-alt" size={40} />
            <h3>Resources</h3>
            <a href="#" className="resource-link">ROS2 Workspace (GitHub)</a>
            <a href="#" className="resource-link">3D Models (STL)</a>
            <a href="#" className="resource-link">Circuit Schematics</a>
          </section>
        </div>

        {/* Contact */}
        <section className="glass-panel section-card contact-section">
          <h2>Get in Touch</h2>
          <p>Interested in collaborating or have questions about the build?</p>
          <button className="btn-primary mt-4"><Mail size={18} style={{marginRight: '8px'}} /> Contact Team</button>
        </section>
      </div>
    </div>
  );
};

export default Home;
