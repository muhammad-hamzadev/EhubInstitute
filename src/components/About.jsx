import React from 'react';

// Custom SVG Icons matching the screenshot 1:1
const PracticalLearningIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 3 Golden Sparkles above book */}
    <path d="M12.5 3L13.3 5.2L15.5 6L13.3 6.8L12.5 9L11.7 6.8L9.5 6L11.7 5.2L12.5 3Z" fill="#D4AF37" />
    <path d="M7 7.5L7.5 9L9 9.5L7.5 10L7 11.5L6.5 10L5 9.5L6.5 9L7 7.5Z" fill="#D4AF37" />
    <path d="M18.5 5.5L19 7L20.5 7.5L19 8L18.5 9.5L18 8L16.5 7.5L18 7L18.5 5.5Z" fill="#D4AF37" />
    {/* Open Book */}
    <path d="M4 14.5C4 14.5 7.5 13 13 14.5V26.5C7.5 25 4 26.5 4 26.5V14.5Z" stroke="#721C24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 14.5C28 14.5 24.5 13 19 14.5V26.5C24.5 25 28 26.5 28 26.5V14.5Z" stroke="#721C24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 14.2V26.5" stroke="#721C24" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const StudentCenteredIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="11" r="5" stroke="#721C24" strokeWidth="2.2"/>
    <path d="M7 26C7 20.5 11 18.5 16 18.5C21 18.5 25 20.5 25 26" stroke="#721C24" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M23.5 5L24 6.5L25.5 7L24 7.5L23.5 9L23 7.5L21.5 7L23 6.5L23.5 5Z" fill="#D4AF37" />
  </svg>
);

const GlobalStandardsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" stroke="#721C24" strokeWidth="2.2"/>
    <path d="M5 16H27" stroke="#721C24" strokeWidth="2"/>
    <path d="M16 5C19 8.5 20.5 12 20.5 16C20.5 20 19 23.5 16 27C13 23.5 11.5 20 11.5 16C11.5 12 13 8.5 16 5Z" stroke="#721C24" strokeWidth="2"/>
    <path d="M22.5 4L23 5.5L24.5 6L23 6.5L22.5 8L22 6.5L20.5 6L22 5.5L22.5 4Z" fill="#D4AF37" />
  </svg>
);

const ProvenTrackRecordIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 7H23V14C23 17.866 19.866 21 16 21C12.134 21 9 17.866 9 14V7Z" stroke="#721C24" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M16 21V26M11 26H21" stroke="#721C24" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M9 10H5V13C5 14.5 6 16 9 16" stroke="#721C24" strokeWidth="2"/>
    <path d="M23 10H27V13C27 14.5 26 16 23 16" stroke="#721C24" strokeWidth="2"/>
    <path d="M16 3L16.6 4.8L18.5 5.5L16.6 6.2L16 8L15.4 6.2L13.5 5.5L15.4 4.8L16 3Z" fill="#D4AF37" />
  </svg>
);

const About = () => {
  const aboutFeatures = [
    {
      customIcon: <PracticalLearningIcon />,
      title: "Practical Learning",
      tag: "Skill-Focused",
      desc: "Activity-based and real-world practical methodology designed to enhance hands-on speaking, confidence building, and accent refinement."
    },
    {
      customIcon: <StudentCenteredIcon />,
      title: "Student-Centered",
      tag: "Personalized",
      desc: "Tailored attention designed specifically for students, job seekers, and corporate professionals."
    },
    {
      customIcon: <GlobalStandardsIcon />,
      title: "Global Standards",
      tag: "Certified Partner",
      desc: "Official British Council IELTS partner & exclusive iTTi-USA affiliated TEFL/TESOL certification center."
    },
    {
      customIcon: <ProvenTrackRecordIcon />,
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
                  {item.customIcon}
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
