import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Dots Grid Pattern */}
      <div className="hero-dots-grid"></div>

      <div className="container hero-container">
        {/* Left Column */}
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Careers <br />
            Through <span className="text-accent">English</span> <br />
            <span className="text-accent">Excellence.</span>
          </h1>

          <p className="hero-subtitle">
            Peshawar's premier institute for IELTS mastery, TEFL/TESOL teacher certification, and professional excellence.
          </p>

          <div className="hero-actions">
            <a href="#programs" className="btn btn-primary btn-lg">
              Explore Programs <i className="ph ph-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Contact Us <i className="ph ph-arrow-right"></i>
            </a>
          </div>

          {/* Bottom Left Floating Stats Card */}
          <div className="hero-floating-stats">
            <div className="stat-col">
              <div className="stat-icon"><i className="ph-fill ph-calendar-blank"></i></div>
              <div className="stat-text">
                <strong>Established</strong>
                <span>2019</span>
              </div>
            </div>

            <div className="stat-col-divider"></div>

            <div className="stat-col">
              <div className="stat-icon"><i className="ph-fill ph-map-pin"></i></div>
              <div className="stat-text">
                <strong>Peshawar</strong>
                <span>Pakistan</span>
              </div>
            </div>

            <div className="stat-col-divider"></div>

            <div className="stat-col">
              <div className="stat-icon"><i className="ph-fill ph-users-three"></i></div>
              <div className="stat-text">
                <strong>1000+</strong>
                <span>Students</span>
              </div>
            </div>

            <div className="stat-col-divider"></div>

            <div className="stat-col">
              <div className="stat-icon"><i className="ph-fill ph-desktop"></i></div>
              <div className="stat-text">
                <strong>Online &</strong>
                <span>Onsite Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Curved Arc Image Frame */}
        <div className="hero-arc-wrapper">
          <div className="hero-arc-outer">
            <div className="hero-arc-image-container">
              <img src="/assets/images/img_p21_0.png" alt="E-Hub Institute Students Peshawar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
