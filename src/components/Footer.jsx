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
            <br />
            Crafted with passion and late-night coding sessions ☕
          </div>
          <div className="built-with">
            Built with React, CSS3, and lots of creativity
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;