// src/pages/LandingPage.js
import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection'; // Default import
import SlideShow from '../components/LandingPage/FeatureCard'; // Default import
import BenefitsSection from '../components/LandingPage/BenefitsSection'; // Default import
import AboutUs from './AboutUs';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />


      <SlideShow />

      <BenefitsSection />

      <AboutUs />
    </div>
  );
};

export default LandingPage;