// HeroSection.jsx

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Well&Good </h1>
            <p>Life insurance that rewards healthy living</p>
            <div className="cta-buttons">
              <button className="btn" onClick={() => navigate('/login')}>Get Started</button>
              <button className="btn" onClick={handleScroll}>Learn More</button>
            </div>
          </div>
        </div>
      </section>


      <section ref={nextSectionRef} className="info-section">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default HeroSection;