import React from "react";
import '../CSS/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-container">     
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Anurudhan V. All rights reserved.    
          </div>
            <div className="footer-links">
            <a href="https://www.linkedin.com/in/anurudhan-v-b3b925284/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Anurudhan" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>Contact</a>
          </div>
          <div className="built-with">
            Crafting this portfolio to showcase my journey toward a bright and innovative tech future!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;