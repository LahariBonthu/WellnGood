import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: ' #222629',

      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 700,
      textDecoration: 'none',
      fontFamily: "'Poppins', sans-serif",
    },
    navLinks: {
      display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: '70px',
      left: 0,
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? '#111' : 'transparent',
      padding: isMobile ? '1.5rem' : 0,
      gap: '1.5rem',
      alignItems: isMobile ? 'flex-start' : 'center',
      marginLeft: 'auto',
    },
    navLink: {
      color: ' #FFA500',
      backgroundColor: 'transparent',
      border: 'none',
      textDecoration: 'none',
      fontWeight: 500,
      padding: '0.5rem 1.5rem',
      borderRadius: '6px',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease',
    },
    navLinkHover: {
      backgroundColor: 'rgb(255, 255, 255)',
      color: '#000',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
    },
    hamburgerLine: {
      display: 'block',
      width: '25px',
      height: '3px',
      backgroundColor: '#fff',
      margin: '4px 0',
      transition: 'transform 0.3s, opacity 0.3s',
    },
  };

  const handleHover = (e, entering) => {
    if (entering) {
      e.currentTarget.style.backgroundColor = styles.navLinkHover.backgroundColor;
      e.currentTarget.style.color = styles.navLinkHover.color;
    } else {
      e.currentTarget.style.backgroundColor = styles.navLink.backgroundColor;
      e.currentTarget.style.color = styles.navLink.color;
    }
  };

  return (
    <nav style={styles.navbar}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <span style={{ color: '#FFA500' }}>Well</span>
          <span style={{ color: '#fff' }}>n</span>
          <span style={{ color: '#FFA500' }}>Good</span>
        </Link>

        {/* Links */}
        <div style={styles.navLinks}>
          {[
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/about', label: 'About Us' },
            { path: '/login', label: 'Login' },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
