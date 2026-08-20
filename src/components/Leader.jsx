import React from 'react';

const Leader = () => {
  return (
    <section className="leader-section" id="leader">
      <div className="container leader-container-wide">
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '0.75rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Meet the <span className="text-accent">Team</span>
          </h2>
        </div>

        <div className="leader-showcase-grid">
          {/* Main Executive Card 1: CEO */}
          <div className="leader-showcase-card">
            {/* Top Center Tag */}
            <div className="leader-tag-wrapper">
              <span className="leader-diamond-line"></span>
              <span className="leader-tag-text">CHIEF EXECUTIVE OFFICER</span>
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
                      src="/assets/user_images/maroof_ceo.png" 
                      alt="Maroof Mehmood - CEO E-Hub Institute" 
                      className="leader-portrait-img"
                      loading="lazy"
                      decoding="async"
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

                {/* CEO Message Box */}
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
              </div>
            </div>
          </div>

          {/* Main Executive Card 2: Campus Manager - Ahtesham Khan */}
          <div className="leader-showcase-card">
            {/* Top Center Tag */}
            <div className="leader-tag-wrapper">
              <span className="leader-diamond-line"></span>
              <span className="leader-tag-text">CAMPUS MANAGER</span>
              <span className="leader-diamond-line"></span>
            </div>

            <div className="leader-grid">
              {/* Left Column: Portrait */}
              <div className="leader-media-col">
                <div className="leader-portrait-canvas">
                  <div className="maroon-corner-shape"></div>

                  <div className="leader-oval-arch-frame">
                    <img 
                      src="/assets/user_images/ahtesham_khan.svg" 
                      alt="Ahtesham Khan - Campus Manager E-Hub Institute" 
                      className="leader-portrait-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="leader-floating-pill-badge">
                    <div className="pill-badge-avatar">
                      <i className="ph-fill ph-user-gear"></i>
                    </div>
                    <div className="pill-badge-text">
                      <h4 className="pill-badge-name">Ahtesham Khan</h4>
                      <span className="pill-badge-role">Campus Manager</span>
                      <span className="pill-badge-cert">BBA (Hons.)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Meet the Team Member Content */}
              <div className="leader-content-col">
                <h2 className="leader-main-title">Ahtesham Khan</h2>
                
                <p className="leader-intro-desc">
                  Ahtesham Khan is the Campus Manager at EHub Institute, where he plays a key role in managing campus operations, coordinating teams, and ensuring smooth academic and administrative activities. He holds a BBA (Hons.) and brings extensive professional experience in management, leadership, and organizational coordination.
                </p>

                <div className="ceo-message-box">
                  <div className="quote-icon-top">
                    <i className="ph-fill ph-quotes"></i>
                  </div>
                  
                  <h4 className="ceo-message-heading">CAMPUS MANAGER'S MESSAGE</h4>
                  
                  <p className="ceo-message-body">
                    Known for his strong management and leadership skills, Ahtesham has been recognized and awarded by We Care and SHED for his outstanding contribution and management capabilities.
                  </p>

                  <p className="ceo-message-highlight">
                    His dedication, professionalism, and ability to lead teams effectively make him an integral part of EHub Institute’s growth and success.
                  </p>

                  <div className="quote-icon-bottom">
                    <i className="ph-fill ph-quotes"></i>
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
