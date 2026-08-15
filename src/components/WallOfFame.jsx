import React, { useState, useEffect } from 'react';

const achieversData = [
  {
    id: 'wof-1',
    name: 'Muhammad Ali',
    achievement: 'IELTS Academic 8.5 Band',
    location: 'Peshawar • Oxford Admit',
    desc: 'Secured 8.5 Band in first attempt through E-Hub master classes and intensive speaking practice.',
    score: '8.5 Band',
    type: 'Academic',
    rating: '5.0 ⭐',
    image: './assets/images/img_p18_2.png'
  },
  {
    id: 'wof-2',
    name: 'Fatima Zahra',
    achievement: 'PTE Academic 88 Score',
    location: 'Peshawar • Australia Visa',
    desc: 'Transformed my English speaking fluency and achieved top scores within 6 weeks at E-Hub.',
    score: '88/90',
    type: 'PTE Master',
    rating: '5.0 ⭐',
    image: './assets/images/img_p10_0.jpeg'
  },
  {
    id: 'wof-3',
    name: 'Azure Achiever',
    achievement: 'IELTS 8.5 Band Score',
    location: 'Peshawar • Global Scholar',
    desc: 'Outstanding performance in IELTS Academic with 9.0 in Speaking & Listening modules.',
    score: '8.5 Band',
    type: 'Top Achiever',
    rating: '5.0 ⭐',
    image: './assets/images/img_p18_0.png'
  },
  {
    id: 'wof-4',
    name: 'Usman Khan',
    achievement: 'iTTi TEFL Certified',
    location: 'Peshawar • ESL Educator',
    desc: 'Completed 220-hour iTTi-USA certification. Now teaching English professionally abroad.',
    score: 'Distinction',
    type: 'TEFL 220h',
    rating: '5.0 ⭐',
    image: './assets/images/img_p19_0.png'
  },
  {
    id: 'wof-5',
    name: 'Sana Ahmed',
    achievement: 'IELTS General 8.0 Band',
    location: 'Peshawar • Canada PR',
    desc: 'E-Hub faculty provided unbeatable strategies for IELTS Writing and Speaking modules.',
    score: '8.0 Band',
    type: 'General',
    rating: '5.0 ⭐',
    image: './assets/images/img_p21_0.png'
  }
];

const WallOfFame = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default center card (Index 2)
  const [isHovered, setIsHovered] = useState(false);

  const total = achieversData.length;

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
    <section className="wof-section" id="wall-of-fame">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Wall of Fame</span>
          <h2 className="section-title">
            Our Students. <span className="text-accent">Their Success Stories.</span>
          </h2>
          <p className="section-desc center-desc">
            Celebrating high IELTS band scores, PTE triumphs, and career milestones of proud E-Hubians.
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
        <button className="coverflow-nav nav-prev" onClick={handlePrev} aria-label="Previous Student">
          <i className="ph-bold ph-caret-left"></i>
        </button>

        <div className="coverflow-container">
          {achieversData.map((item, index) => {
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
                  <img src={item.image} alt={item.name} />
                  <span className="wof-badge-top">{item.type}</span>
                </div>

                {/* Card Content (Matching Screenshot Mockup 1:1) */}
                <div className="wof-card-body">
                  <h3 className="wof-name">{item.name}</h3>
                  <span className="wof-location">
                    <i className="ph-fill ph-map-pin"></i> {item.location}
                  </span>
                  <p className="wof-desc">{item.desc}</p>

                  {/* 3 Metric Pills Row */}
                  <div className="wof-metrics">
                    <div className="wof-metric-col">
                      <span className="metric-label">Score</span>
                      <strong className="metric-val">{item.score}</strong>
                    </div>
                    <div className="wof-metric-col">
                      <span className="metric-label">Status</span>
                      <strong className="metric-val">Verified</strong>
                    </div>
                    <div className="wof-metric-col">
                      <span className="metric-label">Rating</span>
                      <strong className="metric-val text-gold">{item.rating}</strong>
                    </div>
                  </div>

                  {/* Floating Action Icon Button */}
                  <div className="wof-floating-btn">
                    <i className="ph-fill ph-paper-plane-tilt"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Arrow Button */}
        <button className="coverflow-nav nav-next" onClick={handleNext} aria-label="Next Student">
          <i className="ph-bold ph-caret-right"></i>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="coverflow-dots text-center">
        {achieversData.map((_, idx) => (
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

export default WallOfFame;
