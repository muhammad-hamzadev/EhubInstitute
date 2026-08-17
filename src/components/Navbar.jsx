import React from 'react';
import EHubOfficialLogoSVG from './EHubOfficialLogoSVG';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        {/* Official E-Hub Vector SVG Logo */}
        <a href="#hero" className="logo-svg-anchor" onClick={closeMobileMenu}>
          <EHubOfficialLogoSVG height={44} className="official-ehub-logo-svg" />
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#leader" onClick={closeMobileMenu}>Meet the Team</a></li>
          <li><a href="#programs" onClick={closeMobileMenu}>What We Offer</a></li>
          <li><a href="#books" onClick={closeMobileMenu}>Books</a></li>
          <li><a href="#wall-of-fame" onClick={closeMobileMenu}>Wall of Fame</a></li>
          <li><a href="#events" onClick={closeMobileMenu}>Events</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary nav-btn" onClick={closeMobileMenu}>Contact Us</a>
        <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={toggleMobileMenu}>
          <i className="ph ph-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
