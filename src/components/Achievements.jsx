import React, { useState, useEffect } from 'react';

const achievementItems = [
  {
    id: 'ach-1',
    name: 'British Council Award',
    role: 'Excellence Partner',
    tag: 'IELTS Band 8.5',
    banner: '/EhubInstitute/assets/images/img_p16_0.png',
    desc: 'Official IELTS preparation & venue partner delivering top-tier Band 8.5 exam strategies.',
    metaLeft: '2023 - 2024',
    metaRight: '🏆 Excellence',
    fullDesc: 'Recognized as a top-performing IELTS preparation venue and trusted institutional partner in Peshawar. E-Hub has trained over 2,500+ successful IELTS Band 7.5+ candidates with 1-on-1 interview practice.'
  },
  {
    id: 'ach-2',
    name: 'iTTi-USA Accreditation',
    role: 'Global TEFL Partner',
    tag: 'Teacher Training',
    banner: '/EhubInstitute/assets/images/img_p17_0.jpeg',
    desc: 'Exclusive international TEFL teacher training partner delivering accredited global credentials.',
    metaLeft: '220 Hours',
    metaRight: '🎓 Accredited',
    fullDesc: 'Exclusive TEFL/TESOL international teacher training partnership delivering global credentials recognized across 80+ countries for educators teaching English worldwide.'
  },
  {
    id: 'ach-3',
    name: 'Graduation Summit',
    role: 'Annual Milestone',
    tag: 'Leadership Gala',
    banner: '/EhubInstitute/assets/images/img_p22_0.jpeg',
    desc: 'Celebrating outstanding student achievers, debate champions, and public speaking contest winners.',
    metaLeft: '5000+ Alumni',
    metaRight: '⭐ Milestone',
    fullDesc: 'Honoring outstanding students, language champions, and public speaking contest winners at our annual national leadership summit celebrating over 5,000+ alumni achievers.'
  },
  {
    id: 'ach-4',
    name: 'Youth Oratory Cup',
    role: 'National Winner',
    tag: 'Public Speaking',
    banner: '/EhubInstitute/assets/images/img_p18_0.png',
    desc: 'First place gold medalist in regional Inter-University Oratory & Accent Refinement Championship.',
    metaLeft: 'Gold Medal',
    metaRight: '🎙️ Champion',
    fullDesc: 'E-Hub students won 1st place gold medal in the regional Inter-University Public Speaking, Debate & Accent Articulation Championship.'
  },
  {
    id: 'ach-5',
    name: 'Executive Forum',
    role: 'Corporate Mastery',
    tag: 'Business English',
    banner: '/EhubInstitute/assets/images/img_p20_0.png',
    desc: 'High-impact corporate communication training for doctors, engineers, and business leaders.',
    metaLeft: 'Executive',
    metaRight: '💼 Corporate',
    fullDesc: 'Empowering corporate executives, medical professionals, and engineers with high-stakes presentation mastery, negotiation tactics, and business English poise.'
  },
  {
    id: 'ach-6',
    name: 'CEF Quality Standard',
    role: 'Pedagogy Benchmark',
    tag: 'Global Standard',
    banner: '/EhubInstitute/assets/images/img_p21_0.png',
    desc: 'Certified for maintaining world-class communicative language teaching (CLT) methodologies.',
    metaLeft: 'CEF Level C2',
    metaRight: '🌍 Distinction',
    fullDesc: 'Certified for maintaining world-class communicative language teaching (CLT) methodologies and international CEF standards across all diploma tracks.'
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default center card (Index 2)
  const [isHovered, setIsHovered] = useState(false);

  const total = achievementItems.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Auto-play infinite rotation loop (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  return (
    <section className="wof-section achievements-section" id="achievements">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">🏆 Recognition & Excellence</span>
          <h2 className="section-title">Our Milestones & <span className="text-accent">Achievements</span></h2>
          <p className="section-desc center-desc">
            Celebrating our top global accreditations and landmark accomplishments.
          </p>
        </div>
      </div>

      {/* 3D Cover Flow Carousel Stage */}
      <div 
        className="coverflow-stage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Prev Arrow Button */}
        <button className="coverflow-nav nav-prev" onClick={handlePrev} aria-label="Previous Achievement">
          <i className="ph-bold ph-caret-left"></i>
        </button>

        <div className="coverflow-container">
          {achievementItems.map((item, index) => {
            let offset = index - activeIndex;

            // Circular modular wrap-around (infinite 360 rotation)
            if (offset > Math.floor(total / 2)) {
              offset -= total;
            } else if (offset < -Math.floor(total / 2)) {
              offset += total;
            }

            let cardClass = 'coverflow-card';
            if (offset === 0) cardClass += ' is-center';
            else if (offset === -1) cardClass += ' is-prev-1';
            else if (offset === 1) cardClass += ' is-next-1';
            else if (offset === -2) cardClass += ' is-prev-2';
            else if (offset === 2) cardClass += ' is-next-2';
            else if (offset < -2) cardClass += ' is-prev-2';
            else if (offset > 2) cardClass += ' is-next-2';

            return (
              <div
                key={item.id}
                className={cardClass}
                onClick={() => setActiveIndex(index)}
              >
                {/* Image Header */}
                <div className="wof-img-wrapper">
                  <img src={item.banner} alt={item.name} style={{ objectFit: 'cover' }} />
                  <span className="wof-badge-top">{item.tag}</span>
                </div>

                {/* Card Content */}
                <div className="wof-card-body">
                  <h3 className="wof-name">{item.name}</h3>
                  <span className="wof-location">
                    <i className="ph-fill ph-certificate"></i> {item.role}
                  </span>
                  <p className="wof-desc">{item.desc}</p>

                  {/* 3 Metric Pills Row */}
                  <div className="wof-metrics">
                    <div className="wof-metric-col">
                      <span className="metric-label">Details</span>
                      <strong className="metric-val">{item.metaLeft}</strong>
                    </div>
                    <div className="wof-metric-col">
                      <span className="metric-label">Status</span>
                      <strong className="metric-val">Verified</strong>
                    </div>
                    <div className="wof-metric-col">
                      <span className="metric-label">Award</span>
                      <strong className="metric-val text-gold">{item.metaRight}</strong>
                    </div>
                  </div>

                  {/* Floating Action Icon Button */}
                  <div className="wof-floating-btn">
                    <i className="ph-fill ph-trophy"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Arrow Button */}
        <button className="coverflow-nav nav-next" onClick={handleNext} aria-label="Next Achievement">
          <i className="ph-bold ph-caret-right"></i>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="coverflow-dots text-center">
        {achievementItems.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            className={`coverflow-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
