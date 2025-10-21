import React from "react";
import "../CSS/skill.css";

const Skills = () => {
  // Generate more code snippets for a denser, fuller rain effect
  const codeSnippets = Array.from({ length: 150 }).map((_, index) => {
    const left = Math.random() * 100; // Random horizontal position
    const delay = Math.random() * 10; // Random delay up to 10s for continuous flow
    const duration = 6 + Math.random() * 8; // Vary duration between 6-14s for varied speeds
    const fontSize = 6 + Math.random() * 8; // Vary font size 6-14px for depth and density
    const drift = (Math.random() - 0.5) * 100; // Random horizontal drift -50 to 50px
    const opacity = 0.4 + Math.random() * 0.4; // Vary opacity 0.4-0.8 for layering
    const contentOptions = [
      "const x = 42;",
      "function init() {}",
      "if (true) {",
      "console.log('cyber');",
      "return null;",
      "import React from 'react';",
      "export default;",
      "async function fetch()",
      "// TODO: optimize",
      "class Component {}",
      "0101010101",
      "1010101010",
      "let variable = 'neon';",
      "while (true) {",
      "try { catch (e) }",
      "Promise.resolve();",
      "[1, 2, 3].map()",
      "{ key: 'value' }",
      "<div className='glitch'>",
      "body::after {}",
      "var hack = true;",
      "for (let i=0; i<10; i++)",
      "process.env.NODE_ENV",
      "React.useState()",
      "fetch('/api')",
      "console.error('err')",
      "module.exports =",
      "import { useEffect } from 'react';",
      "const API_KEY = 'secret';",
      "debugger;",
      "// Hello World",
      "Math.random()",
      "setTimeout(() => {}, 1000)",
      "JSON.parse('{}')",
      "new Date()",
      "window.location.href",
      "document.querySelector('.class')",
      "addEventListener('click', () => {})",
      "console.warn('warning')",
      "throw new Error()",
      "async/await",
      "Promise.all([])",
      "Array.from()",
      "Object.keys({})",
      "String.prototype",
      "Number.MAX_VALUE",
      "Boolean(false)",
      "Symbol('sym')",
      "BigInt(1n)",
      "Map()",
      "Set()",
      "WeakMap()",
      "WeakSet()",
      "Proxy()",
      "Reflect.get()",
      "Intl.NumberFormat()",
      "WebAssembly",
      "worker.postMessage()",
      "navigator.userAgent",
      "localStorage.setItem()",
      "sessionStorage.getItem()",
      "IndexedDB",
      "ServiceWorker",
      "PushManager",
      "Notification",
      "Geolocation",
      "CanvasRenderingContext2D",
      "WebGLRenderingContext",
      "AudioContext",
      "MediaStream",
      "WebRTC",
      "WebSocket()",
      "EventSource()",
      "fetch()",
      "XMLHttpRequest()",
      "FormData()",
      "URLSearchParams()",
      "Blob()",
      "FileReader()",
      "Crypto.subtle",
      "Performance.now()",
      "requestAnimationFrame()",
      "IntersectionObserver",
      "MutationObserver",
      "ResizeObserver",
      "CustomElementRegistry",
      "ShadowRoot",
      "template.content",
      "slot.assignedNodes()",
      "CSS.supports()",
      "mediaQuery.addListener()",
      "history.pushState()",
      "location.hash",
      "screen.orientation",
      "devicePixelRatio",
      "matchMedia()",
      "print()",
      "alert()",
      "confirm()",
      "prompt()",
      "open()",
      "close()",
      "postMessage()",
      "blur()",
      "focus()",
      "scrollTo()",
      "scrollBy()",
      "getSelection()",
      "find()",
      "getComputedStyle()",
      "atob()",
      "btoa()"
    ];
    const content = contentOptions[Math.floor(Math.random() * contentOptions.length)]; // Random content

    return (
      <span
        key={index}
        className="code-snippet"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          fontSize: `${fontSize}px`,
          '--drift': `${drift}px`,
          opacity: opacity,
          color: index % 3 === 0 ? 'var(--neon-pink)' : index % 2 === 0 ? 'var(--accent-secondary)' : 'var(--accent-primary)'
        }}
      >
        {content}
      </span>
    );
  });

  return (
    <section id="skills" className="animate-on-scroll">
      <div className="code-rain">
        {codeSnippets}
      </div>
      <h2 className="section-title fade-in">Skills &amp; Technologies</h2>
      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-category fade-in">
          <h3>
            <i className="fas fa-laptop-code"></i> Frontend
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fab fa-html5" style={{ color: "#e34c26" }}></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt" style={{ color: "#1572b6" }}></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js-square" style={{ color: "#f7df1e" }}></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-react" style={{ color: "#61dafb" }}></i>
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-wind" style={{ color: "#06b6d4" }}></i>
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap" style={{ color: "#7952b3" }}></i>
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-angular" style={{ color: "#dd0031" }}></i>
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category fade-in">
          <h3>
            <i className="fas fa-server"></i> Backend
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fab fa-node-js" style={{ color: "#68a063" }}></i>
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-code" style={{ color: "#000000" }}></i>
              <span>Express.js</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database" style={{ color: "#4db33d" }}></i>
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database" style={{ color: "#e34c26" }}></i>
              <span>NoSQL</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-key" style={{ color: "#d63aff" }}></i>
              <span>JWT</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-exchange-alt" style={{ color: "#00b4d8" }}></i>
              <span>WebSockets</span>
            </div>
          </div>
        </div>

        {/* Architectures */}
        <div className="skill-category fade-in">
          <h3>
            <i className="fas fa-project-diagram"></i> Architectures
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fas fa-layer-group"></i>
              <span>Clean Architecture</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-archive"></i>
              <span>Repository Pattern</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-sitemap"></i>
              <span>MVC</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-cubes"></i>
              <span>Microservices</span>
            </div>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="skill-category fade-in">
          <h3>
            <i className="fas fa-cloud"></i> DevOps &amp; Cloud
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fab fa-docker" style={{ color: "#2496ed" }}></i>
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-network-wired" style={{ color: "#326ce5" }}></i>
              <span>Kubernetes</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-aws" style={{ color: "#ff9900" }}></i>
              <span>AWS</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-microsoft" style={{ color: "#00a4ef" }}></i>
              <span>Azure</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-google" style={{ color: "#4285f4" }}></i>
              <span>GCP</span>
            </div>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="skill-category fade-in">
          <h3>
            <i className="fas fa-tools"></i> Tools &amp; Others
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fab fa-git-alt" style={{ color: "#f05032" }}></i>
              <span>Git</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-fire" style={{ color: "#ff6b35" }}></i>
              <span>Firebase</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-code-branch"></i>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;