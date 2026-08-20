import React from 'react';

const About = () => {
  const aboutFeatures = [
    {
      icon: "ph-duotone ph-sparkle",
      title: "Practical Learning",
      tag: "Skill-Focused",
      desc: "Activity-driven methodology focused on real-world speaking, confidence building, and accent refinement."
    },
    {
      icon: "ph-duotone ph-user-focus",
      title: "Student-Centered",
      tag: "Personalized",
      desc: "Tailored attention designed specifically for students, job seekers, and corporate professionals."
    },
    {
      icon: "ph-duotone ph-globe-hemisphere-west",
      title: "Global Standards",
      tag: "Certified Partner",
      desc: "Official British Council IELTS partner & exclusive iTTi-USA affiliated TEFL/TESOL certification center."
    },
    {
      icon: "ph-duotone ph-trophy",
      title: "Proven Track Record",
      tag: "5,000+ Alumni",
      desc: "Empowered over 5,000+ graduates with top university admissions, high IELTS bands (8.0+), and career success."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">
            About <span className="text-accent">E-Hub Institute</span>
          </h2>
          <p className="section-desc center-desc">
            Established in 2019, E-Hub is Peshawar’s premier English Language & Professional Training Institute. We are dedicated to providing practical, student-centered education that empowers individuals to achieve their full potential on the global stage.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="about-pill-cards-grid">
          {aboutFeatures.map((item, idx) => (
            <div className="about-pill-card" key={idx}>
              <div className="pill-card-icon-wrapper">
                <div className="pill-card-icon">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="pill-card-text">
                <div className="pill-card-header">
                  <h3>{item.title}</h3>
                  <span className="pill-feature-tag">{item.tag}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
