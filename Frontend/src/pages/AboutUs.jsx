import React from 'react';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './AboutStyles.css';



const AboutUs = () => {
  const techStack = [
    'React', 'Node.js', 'Google Fit API',
    'TensorFlow.js', 'Firebase', 'Recharts',
    'Python', 'MongoDB', 'Express'
  ];

  const teamMembers = [
    {
      name: "",
      role: "",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "",
      role: "",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "",
      role: "",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "",
      role: "Fullstack Developer",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "",
      role: "Fullstack Developer",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "",
      role: "Fullstack Developer",
      avatar: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <div className="title-divider"></div>
        <p className="tagline">Ensure Well</p>
      </div>

      {/* Content Row */}
      <div className="content-wrapper">
        {/* Left Column */}
        <div className="content-column">
          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-card">
              <h2>The Motivation</h2>
              <h3>
                We turn health efforts into financial rewards.
              </h3>
              <p>
                By integrating wearables and AI, we dynamically adjust premiums to reward healthy choices — because insurance should incentivize wellness, not just cover illness.
              </p>
              <p>

              </p>
              <h3 style={{ marginTop: '1.5rem' }}>Our Mission</h3>
              <ul className="arrow-list">
                <li> Use wearable data + AI to create fairer premiums</li>
                <li> Reward prevention, not just treatment</li>
                <li> Make coverage adaptive, transparent, and empowering</li>
              </ul>

            </div>

            <div className="mission-card">
              <h2>The Usage</h2>
              <p>
                1. Log in or sign up for WellnGood. <br />
                2. User can view your daily stats in Dashboard. <br />
                3. Your rewarded premium will be visible. <br />
                4. Your policy will be applied with the dynamic premium.
              </p>
            </div>
          </section>


          {/* Tech Stack 
          <section className="tech-section">
            /*
            <h2>Tech Stack</h2>
            <div className="tech-grid">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={i}>{tech}</div>
              ))}
            </div>
            
          </section>
          */}
        </div>


        {/* Right Column - Team Section */}
        <div className="team-column">
          <section className="team-section">
            <h2>Meet the Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <img src={member.avatar} alt={member.name} className="avatar" />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="social-links">
                      <a href="#"><FaLinkedin /></a>
                      <a href="#"><FaInstagram /></a>
                      <a href="#"><FaGithub /></a>
                      <a href="#"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
