import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            About <span className="text-accent">E-Hub Institute</span>
          </h2>
          <p className="section-desc center-desc">
            Established in 2019, E-Hub is Peshawar’s premier English Language & Professional Training Institute. We are dedicated to providing practical, student-centered education that empowers individuals to achieve their full potential on the global stage.
          </p>
        </div>

        {/* 4 Small Pill Cards Grid (Matching Mockup Screenshot 1:1) */}
        <div className="about-pill-cards-grid">
          {/* Card 1 */}
          <div className="about-pill-card">
            <div className="pill-card-icon">
              <i className="ph-fill ph-target"></i>
            </div>
            <div className="pill-card-text">
              <h3>Practical Learning</h3>
              <p>Activity-driven methodology focused on real-world speaking, confidence, and accent refinement.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="about-pill-card">
            <div className="pill-card-icon">
              <i className="ph-fill ph-users"></i>
            </div>
            <div className="pill-card-text">
              <h3>Student-Centered</h3>
              <p>Personalized attention designed for students, job seekers, and corporate professionals.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="about-pill-card">
            <div className="pill-card-icon">
              <i className="ph-fill ph-globe"></i>
            </div>
            <div className="pill-card-text">
              <h3>Global Standards</h3>
              <p>Official British Council IELTS partner & exclusive iTTi-USA affiliated TEFL/TESOL certification center.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="about-pill-card">
            <div className="pill-card-icon">
              <i className="ph-fill ph-trophy"></i>
            </div>
            <div className="pill-card-text">
              <h3>Proven Track Record</h3>
              <p>Empowered over 5,000+ alumni with international university admissions, high IELTS bands (8.0+ Band), and career success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
