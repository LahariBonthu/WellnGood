import React, { useState } from 'react';
import './FeatureCard.css';

const slides = [
  {
    title: "What is Life Insurance?",
    content: "Life insurance provides financial protection to your family. It pays out a benefit upon the death of the insured person.",
    image: "/images/life.jpg"
  },
  {
    title: "Fixed Premium: A Limitation",
    content: "Fixed premiums do not adapt to your health improvements. Even if you become healthier, your premium stays the same.",
    image: "/images/fixed.jpg"
  },
  {
    title: "Integrating Health Tech",
    content: "We integrate wearables and AI to track your health in real-time and offer dynamic premium adjustments.",
    image: "/images/health.jpg"
  },
  {
    title: "Tech Stack Used",
    content: "Built using React, Node.js, Python, Firebase, and wearable integrations like Fitbit and Google Fit API.",
    image: "/images/tech.jpg"
  }
];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slideshow">
      <div className="slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <div className="slide-text">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].content}</p>
        </div>
      </div>

      <div className="slide-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
