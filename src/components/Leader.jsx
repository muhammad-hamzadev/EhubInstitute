import React from 'react';

const Leader = () => {
  return (
    <section className="leader-section" id="leader">
      <div className="container">
        {/* Main Executive Card */}
        <div className="leader-showcase-card">
          {/* Top Center Tag */}
          <div className="leader-tag-wrapper">
            <span className="leader-diamond-line"></span>
            <span className="leader-tag-text">MEET THE LEADER</span>
            <span className="leader-diamond-line"></span>
          </div>

          <div className="leader-grid">
            {/* Left Column: Oval Portrait with Maroon Corner Backdrop & Gold Ring */}
            <div className="leader-media-col">
              <div className="leader-portrait-canvas">
                {/* Deep Maroon Corner Wave Backdrop */}
                <div className="maroon-corner-shape"></div>
                

                {/* Oval Arch Photo Container */}
                <div className="leader-oval-arch-frame">
                  <img 
                    src="/EhubInstitute/assets/images/maroof_ceo.png" 
                    alt="Maroof Mehmood - CEO E-Hub Institute" 
                    className="leader-portrait-img"
                  />
                </div>

                {/* Floating CEO Glass Badge */}
                <div className="leader-floating-pill-badge">
                  <div className="pill-badge-avatar">
                    <i className="ph-fill ph-user"></i>
                  </div>
                  <div className="pill-badge-text">
                    <h4 className="pill-badge-name">Maroof Mehmood</h4>
                    <span className="pill-badge-role">CEO – E-Hub & MW Foundation</span>
                    <span className="pill-badge-cert">US Certified Instructor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Meet the CEO Content */}
            <div className="leader-content-col">
              <h2 className="leader-main-title">Meet the CEO</h2>
              
              <p className="leader-intro-desc">
                Maroof Mehmood is the driving force behind E-Hub Institute. With a strong vision for quality education and skill development, he has dedicated his career to empowering students, professionals, and communities through effective communication and practical learning.
              </p>

              {/* CEO Message Box (Matching Reference 1:1) */}
              <div className="ceo-message-box">
                <div className="quote-icon-top">
                  <i className="ph-fill ph-quotes"></i>
                </div>
                
                <h4 className="ceo-message-heading">CEO MESSAGE</h4>
                
                <p className="ceo-message-body">
                  The world is constantly changing. Today’s students need to continuously upgrade their skills in order to stand out from the crowd. Therefore, English language and soft skills have become the essential skills to become a successful people.
                </p>

                <p className="ceo-message-highlight">
                  So, it’s my advice to people to join E-Hub and make themselves a brand.
                </p>

                <div className="quote-icon-bottom">
                  <i className="ph-fill ph-quotes"></i>
                </div>
              </div>

              {/* Bottom Row: Signature & Motto */}
              <div className="leader-footer-row">
                <div className="leader-signature-col">
                  <span className="leader-cursive-signature">Maroof Mehmood</span>
                  <span className="leader-sig-role">CEO – E-Hub & MW Foundation</span>
                  <span className="leader-sig-cert">US Certified Instructor</span>
                </div>

                <div className="leader-divider-vertical"></div>

                <div className="leader-motto-col">
                  <div className="motto-laurel-icon">
                    <i className="ph-fill ph-laurel-wreath"></i>
                  </div>
                  <div className="motto-text">
                    <strong>Empowering Minds,</strong>
                    <span>Building Futures.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;
