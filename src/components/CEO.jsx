import React from 'react';

const CEO = () => {
  return (
    <section className="ceo-section" id="ceo">
      <div className="container ceo-container">
        {/* CEO Image Wrapper */}
        <div className="ceo-image-wrapper">
          <div className="ceo-image-inner">
            <picture>
              <source srcSet="/assets/user_images/maroof_ceo.webp" type="image/webp" />
              <img
                src="/assets/user_images/maroof_ceo.png"
                alt="CEO Maroof"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="ceo-image-overlay">
              <h3>CEO Maroof</h3>
              <p>Founder & Chief Executive Officer</p>
            </div>
          </div>
        </div>

        {/* CEO Content Wrapper */}
        <div className="ceo-content">
          <span className="section-tag">Who Is Behind E-Hub?</span>
          <h2 className="section-title">
            Driven by Passion, <span className="text-accent">Guided by Vision.</span>
          </h2>

          <div className="ceo-quote-card">
            <i className="ph ph-quotes"></i>
            <p>
              "Our mission is to bridge the gap between education and global opportunity through practical mastery, confidence, and modern skill building."
            </p>
          </div>

          <p className="section-desc mb-4">
            At the heart of E-Hub Institute is <strong>CEO Maroof</strong>, a visionary leader dedicated to setting new benchmarks in English language fluency and professional training. Under his leadership, E-Hub has evolved into a premier institute empowering students, professionals, and educators.
          </p>

          {/* Highlights Grid */}
          <div className="ceo-highlights">
            <div className="ceo-stat-card">
              <div className="ceo-stat-icon"><i className="ph ph-briefcase"></i></div>
              <div>
                <div className="ceo-stat-num">10+ Years</div>
                <div className="ceo-stat-label">Leadership & Vision</div>
              </div>
            </div>

            <div className="ceo-stat-card">
              <div className="ceo-stat-icon"><i className="ph ph-users-three"></i></div>
              <div>
                <div className="ceo-stat-num">5,000+</div>
                <div className="ceo-stat-label">Students Empowered</div>
              </div>
            </div>

            <div className="ceo-stat-card">
              <div className="ceo-stat-icon"><i className="ph ph-target"></i></div>
              <div>
                <div className="ceo-stat-num">100%</div>
                <div className="ceo-stat-label">Practical Pedagogy</div>
              </div>
            </div>

            <div className="ceo-stat-card">
              <div className="ceo-stat-icon"><i className="ph ph-globe-hemisphere-west"></i></div>
              <div>
                <div className="ceo-stat-num">Global</div>
                <div className="ceo-stat-label">Education Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
