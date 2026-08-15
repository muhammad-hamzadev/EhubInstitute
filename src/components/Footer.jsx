import React from 'react';
import EHubOfficialLogoSVG from './EHubOfficialLogoSVG';

const Footer = () => {
  return (
    <footer className="footer-v2">
      {/* Upper Footer Columns */}
      <div className="container footer-v2-container">
        {/* Column 1: Brand & Socials */}
        <div className="footer-v2-brand-col">
          <a href="#home" className="footer-logo-link">
            <EHubOfficialLogoSVG height={56} className="footer-logo-svg" />
          </a>
          <p className="footer-brand-bio">
            Peshawar’s premier English Language, IELTS Mastery, and TEFL/TESOL teacher training center. Empowering students, professionals, and educators since 2019.
          </p>

          {/* Social Media Links */}
          <div className="footer-social-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn facebook" 
              aria-label="E-Hub on Facebook"
            >
              <i className="ph-fill ph-facebook-logo"></i>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn instagram" 
              aria-label="E-Hub on Instagram"
            >
              <i className="ph-fill ph-instagram-logo"></i>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn youtube" 
              aria-label="E-Hub on YouTube"
            >
              <i className="ph-fill ph-youtube-logo"></i>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn tiktok" 
              aria-label="E-Hub on TikTok"
            >
              <i className="ph-fill ph-tiktok-logo"></i>
            </a>
            <a 
              href="https://wa.me/923320565525" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn whatsapp" 
              aria-label="Chat on WhatsApp"
            >
              <i className="ph-fill ph-whatsapp-logo"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin" 
              aria-label="E-Hub on LinkedIn"
            >
              <i className="ph-fill ph-linkedin-logo"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-v2-nav-col">
          <h4 className="footer-v2-heading">Quick Navigation</h4>
          <ul className="footer-v2-links">
            <li><a href="#about"><i className="ph ph-caret-right"></i> About E-Hub</a></li>
            <li><a href="#team"><i className="ph ph-caret-right"></i> Our Faculty & Mentors</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> What We Offer</a></li>
            <li><a href="#books"><i className="ph ph-caret-right"></i> Official Books Series</a></li>
            <li><a href="#wall-of-fame"><i className="ph ph-caret-right"></i> Wall of Fame</a></li>
            <li><a href="#events"><i className="ph ph-caret-right"></i> Events & Workshops</a></li>
            <li><a href="#contact"><i className="ph ph-caret-right"></i> Contact & Admissions</a></li>
          </ul>
        </div>

        {/* Column 3: Flagship Programs */}
        <div className="footer-v2-nav-col">
          <h4 className="footer-v2-heading">Flagship Programs</h4>
          <ul className="footer-v2-links">
            <li><a href="#programs"><i className="ph ph-caret-right"></i> IELTS Academic & General</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> English for Beginners (Book 1)</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> English for Intermediate (Book 2)</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> Communication Skills (Book 3)</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> TEFL / TESOL (iTTi-USA)</a></li>
            <li><a href="#programs"><i className="ph ph-caret-right"></i> Soft Skills & Public Speaking</a></li>
          </ul>
        </div>

        {/* Column 4: Campus & Contact */}
        <div className="footer-v2-contact-col">
          <h4 className="footer-v2-heading">Campus & Contact</h4>
          
          <div className="footer-contact-item">
            <div className="f-icon-box"><i className="ph-fill ph-map-pin"></i></div>
            <div>
              <strong>Campus Location</strong>
              <p>Tehkal Bala BRT Stop, University Road, Peshawar, KP, Pakistan</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="f-icon-box"><i className="ph-fill ph-phone-call"></i></div>
            <div>
              <strong>Direct Helpline</strong>
              <p><a href="tel:03320565525">0332 0565525</a></p>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="f-icon-box"><i className="ph-fill ph-clock"></i></div>
            <div>
              <strong>Institute Timings</strong>
              <p>Monday – Saturday: 3:00 PM – 7:30 PM</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="f-icon-box"><i className="ph-fill ph-envelope-simple"></i></div>
            <div>
              <strong>Email Inquiries</strong>
              <p><a href="mailto:info@ehubinstitute.edu.pk">info@ehubinstitute.edu.pk</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="footer-v2-bottom">
        <div className="container footer-bottom-flex">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>E-Hub Institute Peshawar</strong>. All rights reserved.
          </p>
          <div className="developer-credit">
            <span>Developed by <strong className="credit-brand">Solvia Codes</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
