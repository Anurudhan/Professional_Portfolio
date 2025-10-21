import React, { useState, useEffect } from 'react';
import { Wrench, AlertTriangle, Zap, Code, Terminal, Wifi } from 'lucide-react';
import '../CSS/maintenance.css';

const Maintenance = ({ projectName = "Project", estimatedTime = "Soon" }) => {
  const [dots, setDots] = useState('');
  const [glitchText, setGlitchText] = useState(projectName);
  const [scanProgress, setScanProgress] = useState(0);

  // Animated dots for loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect for project name
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const shouldGlitch = Math.random() > 0.85;
      
      if (shouldGlitch) {
        const glitched = projectName.split('').map(char => 
          Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(projectName), 100);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, [projectName]);

  // Scanning progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setScanProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  const statusItems = [
    { icon: <Code size={20} />, text: 'Refactoring Core Systems', status: 'active' },
    { icon: <Terminal size={20} />, text: 'Optimizing Performance', status: 'active' },
    { icon: <Zap size={20} />, text: 'Implementing New Features', status: 'pending' },
    { icon: <Wifi size={20} />, text: 'Testing Deployment', status: 'pending' }
  ];

  return (
    <div className="maintenance-container">
      {/* Animated Background Grid */}
      <div className="cyber-grid"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="maintenance-content">
        {/* Warning Icon with Pulse */}
        <div className="icon-wrapper">
          <div className="icon-glow"></div>
          <AlertTriangle className="warning-icon" size={80} />
          <Wrench className="wrench-icon" size={40} />
        </div>

        {/* Status Header */}
        <div className="status-header">
          <span className="status-badge">
            <span className="status-dot"></span>
            SYSTEM OFFLINE
          </span>
        </div>

        {/* Project Title with Glitch */}
        <h1 className="maintenance-title">
          <span className="bracket">{'<'}</span>
          <span className="project-name">{glitchText}</span>
          <span className="bracket">{'>'}</span>
        </h1>

        {/* Subtitle */}
        <p className="maintenance-subtitle">
          UNDER MAINTENANCE{dots}
        </p>

        {/* Terminal-style Message Box */}
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="terminal-btn red"></span>
            <span className="terminal-btn yellow"></span>
            <span className="terminal-btn green"></span>
            <span className="terminal-title">maintenance.log</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> System diagnostics initiated...
            </p>
            <p className="terminal-line">
              <span className="prompt">$</span> Deploying system upgrades...
            </p>
            <p className="terminal-line success">
              <span className="prompt">$</span> New features incoming ⚡
            </p>
            <p className="terminal-line">
              <span className="prompt">$</span> Expected completion: <span className="highlight">{estimatedTime}</span>
            </p>
            <p className="terminal-line cursor">
              <span className="prompt">$</span> <span className="typing-cursor">_</span>
            </p>
          </div>
        </div>

        {/* System Status Grid */}
        <div className="status-grid">
          {statusItems.map((item, index) => (
            <div key={index} className={`status-item ${item.status}`}>
              <div className="status-icon">{item.icon}</div>
              <span className="status-text">{item.text}</span>
              <div className="status-indicator">
                {item.status === 'active' ? (
                  <span className="pulse-dot"></span>
                ) : (
                  <span className="pending-dot"></span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Scanner */}
        <div className="scanner-container">
          <div className="scanner-label">
            <span>SYSTEM SCAN</span>
            <span className="scanner-percent">{scanProgress}%</span>
          </div>
          <div className="scanner-bar">
            <div 
              className="scanner-progress" 
              style={{ width: `${scanProgress}%` }}
            >
              <div className="scanner-glow"></div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="footer-message">
          <p>We're working hard to bring you an enhanced experience.</p>
          <p className="footer-note">Thank you for your patience, developer!</p>
        </div>

        {/* Hexagonal Decorations */}
        <div className="hex-decoration hex-1"></div>
        <div className="hex-decoration hex-2"></div>
        <div className="hex-decoration hex-3"></div>
      </div>
    </div>
  );
};

export default Maintenance;