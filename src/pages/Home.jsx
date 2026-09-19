import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Battery, Sun, Cpu, Database, DollarSign, GitBranch,
  Mail, ArrowRight, Layers, ChevronRight, Zap, Eye,
  Wifi, Box, Cog, Download, ExternalLink, Send,
  BrainCircuit, Server, HardDrive
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const specs = [
  { label: 'Footprint', value: '200×200', unit: 'mm' },
  { label: 'Height', value: '<400', unit: 'mm' },
  { label: 'Arms', value: '2×3', unit: 'DOF' },
  { label: 'Payload', value: '1', unit: 'kg' },
  { label: 'Drive', value: '4WD', unit: 'Mecanum' },
  { label: 'Camera', value: '2-Axis', unit: 'Pan/Tilt' },
];

const architecture = [
  { icon: <BrainCircuit size={24} />, title: 'Raspberry Pi 5', desc: 'ROS 2, AI, Vision, Behavior', color: 'var(--clr-success)' },
  { icon: <Cpu size={24} />, title: 'ESP32-S3', desc: 'Low-level control, Safety, Sensors', color: 'var(--clr-warning)' },
  { icon: <Cog size={24} />, title: 'PCA9685', desc: '16-Channel Servo Driver via I2C', color: 'var(--clr-accent)' },
  { icon: <Eye size={24} />, title: 'Camera Module 3', desc: 'Wide FOV via CSI interface', color: 'var(--clr-danger)' },
  { icon: <Wifi size={24} />, title: 'BNO086 IMU', desc: '9-DOF orientation via I2C (QWIIC)', color: 'var(--clr-accent-2)' },
  { icon: <Zap size={24} />, title: 'AI HAT+', desc: 'Optional PCIe AI Accelerator', color: '#a78bfa' },
];

const materials = [
  { name: 'Aluminum Extrusion', detail: '2020 Profile Frame — Extreme rigidity & modularity', icon: <Box size={20} /> },
  { name: 'Silver Anodized Panels', detail: 'Brushed aluminum side panels for heat dissipation', icon: <Layers size={20} /> },
  { name: 'Blue Acrylic Doors', detail: 'Service access doors — Quick maintenance & charging', icon: <Cog size={20} /> },
  { name: '3D Printed Mounts', detail: 'PETG brackets for Raspberry Pi, PCA9685 & sensors', icon: <HardDrive size={20} /> },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <img src="/images/hero-bg.png" alt="" className="hero__bg-img" />
          <div className="hero__bg-overlay" />
          <div className="hero__grid-lines" />
        </div>

        <div className="hero__content container">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge">
              <span className="badge__dot" /> Open Source Robotics
            </div>
            <h1 className="hero__title">
              Compact Lab Rover
            </h1>
            <p className="hero__subtitle">
              A 400mm autonomous mobile manipulation robot with dual 3-DOF arms,
              mecanum drive, and AI-powered perception. Built for research.
            </p>
            <div className="hero__actions">
              <a href="#specs" className="btn btn-primary">
                View Specifications <ArrowRight size={16} />
              </a>
              <a href="#resources" className="btn btn-outline">
                Download Files
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            style={{ y: heroImgY, opacity: heroOpacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/hero.png" alt="Underbot Compact Lab Rover" className="hero__robot-img" />
            <div className="hero__img-glow" />
          </motion.div>
        </div>

        {/* Quick Stats Bar */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="container">
            <div className="hero__stats-grid">
              {specs.map((s, i) => (
                <div key={i} className="hero__stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.unit} — {s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">About the Project</span>
            <h2>Why Underbot?</h2>
          </AnimatedSection>
          <div className="about__grid">
            <AnimatedSection className="about__text" delay={0.1}>
              <p>
                Most research robots are either too large for a desk, too expensive for a student budget,
                or too locked-down to modify. Underbot changes that.
              </p>
              <p>
                Standing under 400mm tall with a 200×200mm footprint, it packs dual 3-DOF manipulator arms,
                omnidirectional mecanum wheels, a pan/tilt camera system, and a full ROS 2 software stack
                into something that fits on your workbench.
              </p>
              <p>
                Every part of the design — from the power distribution to the servo channel assignments —
                is documented and open source. No black boxes, no proprietary firmware.
              </p>
              <div className="about__features">
                <div className="about__feature">
                  <div className="about__feature-icon"><Box size={20} /></div>
                  <div>
                    <h4>Compact & Capable</h4>
                    <p>Desktop-sized with 1kg payload at base, 300-500g at reach.</p>
                  </div>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"><Eye size={20} /></div>
                  <div>
                    <h4>Autonomous Ready</h4>
                    <p>ToF sensing on all sides, IMU + Pan/Tilt Camera for full perception.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="about__image-wrap" delay={0.2}>
              <div className="about__image-card card">
                <div className="about__image-inner">
                  <img src="/images/hero.png" alt="Underbot Side View" />
                </div>
                <div className="about__image-caption">
                  <span className="badge badge-success">4 Floors</span>
                  <span>Modular stacked architecture</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTURE ===== */}
      <section id="specs" className="architecture">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">System Architecture</span>
            <h2>Hardware Stack</h2>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              A Raspberry Pi 5 handles high-level AI and ROS 2, while an ESP32-S3 manages
              real-time motor control and sensor polling. Connected via USB 3.0.
            </p>
          </AnimatedSection>
          <div className="arch__grid">
            {architecture.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card arch__card">
                  <div className="arch__icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Servo Channel Table */}
          <AnimatedSection delay={0.2}>
            <div className="card servo-table-card">
              <h3>Servo Channel Assignment (PCA9685)</h3>
              <div className="servo-table-wrap">
                <table className="servo-table">
                  <thead>
                    <tr>
                      <th>CH</th><th>Joint</th><th>Function</th>
                      <th>CH</th><th>Joint</th><th>Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="mono">0</td><td>Head Yaw</td><td>Left ↔ Right</td>
                      <td className="mono">8</td><td>L. Hip Pitch</td><td>Forward/Back</td>
                    </tr>
                    <tr>
                      <td className="mono">1</td><td>Head Pitch</td><td>Up ↔ Down</td>
                      <td className="mono">9</td><td>L. Knee</td><td>Bend</td>
                    </tr>
                    <tr>
                      <td className="mono">2</td><td>L. Shoulder</td><td>Forward/Back</td>
                      <td className="mono">10</td><td>L. Ankle Pitch</td><td>Up/Down</td>
                    </tr>
                    <tr>
                      <td className="mono">3</td><td>L. Elbow</td><td>Bend</td>
                      <td className="mono">11</td><td>L. Ankle Roll</td><td>Tilt</td>
                    </tr>
                    <tr>
                      <td className="mono">4</td><td>R. Shoulder</td><td>Forward/Back</td>
                      <td className="mono">12</td><td>R. Hip Pitch</td><td>Forward/Back</td>
                    </tr>
                    <tr>
                      <td className="mono">5</td><td>R. Elbow</td><td>Bend</td>
                      <td className="mono">13</td><td>R. Knee</td><td>Bend</td>
                    </tr>
                    <tr>
                      <td className="mono">6</td><td>L. Hip Yaw</td><td>Rotate</td>
                      <td className="mono">14</td><td>R. Ankle Pitch</td><td>Up/Down</td>
                    </tr>
                    <tr>
                      <td className="mono">7</td><td>R. Hip Yaw</td><td>Rotate</td>
                      <td className="mono">15</td><td>R. Ankle Roll</td><td>Tilt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== AI & ML ===== */}
      <section className="ai-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">AI & Machine Learning</span>
            <h2>Intelligent Perception</h2>
          </AnimatedSection>
          <div className="ai__grid">
            <AnimatedSection className="card ai__card" delay={0.1}>
              <div className="ai__card-header">
                <BrainCircuit size={24} className="ai__card-icon" />
                <span className="badge">Pipeline</span>
              </div>
              <h3>Vision Pipeline</h3>
              <p>Camera Module 3 feeds into the Raspberry Pi 5 via CSI. Real-time object detection using YOLOv8 with optional TensorRT acceleration via the AI HAT+.</p>
              <div className="ai__tags">
                <span>YOLOv8</span><span>TensorRT</span><span>OpenCV</span>
              </div>
            </AnimatedSection>
            <AnimatedSection className="card ai__card" delay={0.2}>
              <div className="ai__card-header">
                <Server size={24} className="ai__card-icon" />
                <span className="badge">ROS 2</span>
              </div>
              <h3>Behavior Stack</h3>
              <p>Full ROS 2 Humble workspace with nav2 integration, BehaviorTree.CPP for task planning, and custom action servers for arm manipulation sequences.</p>
              <div className="ai__tags">
                <span>ROS 2</span><span>Nav2</span><span>BT.CPP</span>
              </div>
            </AnimatedSection>
            <AnimatedSection className="card ai__card" delay={0.3}>
              <div className="ai__card-header">
                <Database size={24} className="ai__card-icon" />
                <span className="badge">Data</span>
              </div>
              <h3>Telemetry & Storage</h3>
              <p>Sensor data logged to TimescaleDB. Redis pub/sub for real-time inter-process communication. GraphQL API exposes all data to the web dashboard.</p>
              <div className="ai__tags">
                <span>TimescaleDB</span><span>Redis</span><span>GraphQL</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== POWER ===== */}
      <section id="power" className="power-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Power Systems</span>
            <h2>Energy Architecture</h2>
          </AnimatedSection>
          <div className="power__grid">
            <AnimatedSection className="card power__card" delay={0.1}>
              <div className="power__card-header">
                <Battery size={28} />
                <h3>Battery Pack</h3>
              </div>
              <div className="power__specs">
                <div className="power__spec">
                  <span className="power__spec-label">Chemistry</span>
                  <span className="power__spec-value">2S LiPo</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Voltage</span>
                  <span className="power__spec-value">7.4V <span className="mono" style={{color: 'var(--clr-text-tertiary)', fontSize: '0.8em'}}>(8.4V max)</span></span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Capacity</span>
                  <span className="power__spec-value">4000 mAh</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Discharge Rate</span>
                  <span className="power__spec-value">25C</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Protection</span>
                  <span className="power__spec-value">20A Main Fuse + E-Stop</span>
                </div>
              </div>
              <div className="power__bus-diagram">
                <div className="power__bus" style={{borderColor: 'var(--clr-danger)'}}>
                  <span>Battery → 6V BEC → Servo Power Bus</span>
                </div>
                <div className="power__bus" style={{borderColor: 'var(--clr-accent)'}}>
                  <span>Battery → 5V Regulator → System Bus</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card power__card power__card--solar" delay={0.2}>
              <div className="power__card-header">
                <Sun size={28} />
                <h3>Solar Array</h3>
              </div>
              <div className="power__specs">
                <div className="power__spec">
                  <span className="power__spec-label">Panel Type</span>
                  <span className="power__spec-value">Monocrystalline</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Output</span>
                  <span className="power__spec-value">5W (5V @ 1A)</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Mounting</span>
                  <span className="power__spec-value">Top Floor — Direct Charge</span>
                </div>
                <div className="power__spec">
                  <span className="power__spec-label">Controller</span>
                  <span className="power__spec-value">MPPT Solar Charge Controller</span>
                </div>
              </div>
              <div className="power__highlight">
                <Zap size={16} />
                <span>Solar supplements battery during outdoor operation, extending runtime by up to 40%.</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MATERIALS (Scroll Animation) ===== */}
      <section className="materials-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Build Materials</span>
            <h2>What It's Made Of</h2>
          </AnimatedSection>
          <div className="materials__list">
            {materials.map((mat, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="materials__item card">
                  <div className="materials__index mono">{String(i + 1).padStart(2, '0')}</div>
                  <div className="materials__icon">{mat.icon}</div>
                  <div className="materials__info">
                    <h3>{mat.name}</h3>
                    <p>{mat.detail}</p>
                  </div>
                  <ChevronRight size={20} className="materials__arrow" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINANCE ===== */}
      <section className="finance-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Project Finance</span>
            <h2>Budget Breakdown</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="finance__overview card">
              <div className="finance__stat-row">
                <div className="finance__stat">
                  <DollarSign size={20} className="finance__stat-icon" />
                  <div>
                    <span className="stat-value">$1,240</span>
                    <span className="stat-label">Total Spent</span>
                  </div>
                </div>
                <div className="finance__stat">
                  <div>
                    <span className="stat-value" style={{ color: 'var(--clr-success)' }}>$260</span>
                    <span className="stat-label">Remaining Budget</span>
                  </div>
                </div>
                <div className="finance__stat">
                  <div>
                    <span className="stat-value" style={{ color: 'var(--clr-accent-light)' }}>$1,500</span>
                    <span className="stat-label">Total Budget</span>
                  </div>
                </div>
              </div>
              <div className="finance__bar">
                <div className="finance__bar-fill" style={{ width: '82.7%' }} />
              </div>
              <p className="finance__note">82.7% of budget utilized. Full open ledger available on the dashboard.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section id="resources" className="resources-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Resources & Downloads</span>
            <h2>Get the Files</h2>
          </AnimatedSection>
          <div className="resources__grid">
            <AnimatedSection delay={0.1}>
              <a href="#" className="card resources__card">
                <GitBranch size={24} />
                <div>
                  <h3>ROS 2 Workspace</h3>
                  <p>Full source code, launch files, and configuration.</p>
                </div>
                <ExternalLink size={18} className="resources__ext" />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <a href="#" className="card resources__card">
                <Download size={24} />
                <div>
                  <h3>3D Models (STL / STEP)</h3>
                  <p>Printable mounts, brackets, and enclosure files.</p>
                </div>
                <ExternalLink size={18} className="resources__ext" />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#" className="card resources__card">
                <Zap size={24} />
                <div>
                  <h3>Circuit Schematics</h3>
                  <p>Complete wiring diagram and PCB layout.</p>
                </div>
                <ExternalLink size={18} className="resources__ext" />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <a href="#" className="card resources__card">
                <Box size={24} />
                <div>
                  <h3>URDF Model</h3>
                  <p>Robot description for RViz and simulation.</p>
                </div>
                <ExternalLink size={18} className="resources__ext" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-section">
        <div className="container">
          <AnimatedSection className="contact__inner card">
            <div className="contact__content">
              <span className="section-label">Get in Touch</span>
              <h2>Interested in Collaborating?</h2>
              <p>
                Whether you're a researcher, student, or maker — we'd love to hear from you.
                Reach out to discuss the project, request access to hardware designs,
                or explore partnership opportunities.
              </p>
              <div className="contact__actions">
                <a href="mailto:team@underbot.dev" className="btn btn-primary">
                  <Send size={16} /> Send a Message
                </a>
                <a href="#" className="btn btn-outline">
                  <GitBranch size={16} /> Star on GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
