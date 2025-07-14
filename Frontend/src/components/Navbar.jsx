
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from './profile.jpg';
import api from '../api';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    api.post('/api/auth/loginStatus', {}, { withCredentials: true })
      .then(res => {
        if (res.data.isLoggedIn) {
          setUser(res.data.user);
        }
      })
      .catch(err => console.error("Status check error:", err));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await api.post('/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      setIsDropdownOpen(false);
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const styles = {
    navbar: {
      backgroundColor: '#222629',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '100%',
      padding: '0 2rem',
    },


    logo: {
      fontSize: '2.5rem',
      fontWeight: 400,
      textDecoration: 'none',
      fontFamily: "'EB Garamond', serif",
    },
    navLinks: {
      display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: 'static',
      width: 'auto',
      backgroundColor: 'transparent',
      padding: 0,
      gap: '1.5rem',
      alignItems: 'center',
      marginLeft: 'auto',
    },

    navLink: {
      color: '#FFA500',
      backgroundColor: 'transparent',
      border: 'none',
      textDecoration: 'none',
      fontWeight: 500,
      padding: '0.5rem 1.5rem',
      borderRadius: '6px',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
    },
    navLinkHover: {
      backgroundColor: '#fff',
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
    profileContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      border: '2px solid #FFA500',
    },
    dropdown: {
      position: 'absolute',
      top: '50px',
      right: 0, // aligns to right of profile
      backgroundColor: '#333',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      minWidth: '120px',
      zIndex: 999,
    },

    dropdownLink: {
      color: '#FFA500',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '1rem',
      textTransform: 'uppercase',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      padding: '0.3rem 0',
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
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <span style={{ color: '#FFA500' }}>Well</span>
          <span style={{ color: '#fff' }}>&</span>
          <span style={{ color: '#FFA500' }}>Good</span>
        </Link>

        {/* Navigation Links */}
        <div style={styles.navLinks}>
          <Link
            to="/dashboard"
            style={styles.navLink}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            style={styles.navLink}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>

          {!user ? (
            <Link
              to="/login"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Logout
            </button>



          )}
        </div>

        {/* Hamburger Icon */}
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
