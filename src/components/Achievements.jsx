import React, { useState, useEffect } from 'react';

const achieversData = [
  {
    id: 'ach-1',
    name: 'British Council Award',
    achievement: 'Excellence Partner',
    type: '🏆 Excellence',
    image: '/EhubInstitute/assets/images/img_p16_0.png'
  },
  {
    id: 'ach-2',
    name: 'iTTi-USA Accreditation',
    achievement: 'Global TEFL Partner',
    type: '🎓 Accredited',
    image: '/EhubInstitute/assets/images/img_p17_0.jpeg'
  },
  {
    id: 'ach-3',
    name: 'Graduation Summit',
    achievement: 'Annual Milestone',
    type: '⭐ Milestone',
    image: '/EhubInstitute/assets/images/img_p22_0.jpeg'
  },
  {
    id: 'ach-4',
    name: 'Youth Oratory Cup',
    achievement: 'National Winner',
    type: '🎙️ Champion',
    image: '/EhubInstitute/assets/images/img_p18_0.png'
  },
  {
    id: 'ach-5',
    name: 'Executive Forum',
    achievement: 'Corporate Mastery',
    type: '💼 Corporate',
    image: '/EhubInstitute/assets/images/img_p20_0.png'
  },
  {
    id: 'ach-6',
    name: 'CEF Quality Standard',
    achievement: 'Pedagogy Benchmark',
    type: '🌍 Distinction',
    image: '/EhubInstitute/assets/images/img_p21_0.png'
  }
];

const Achievements = () => {
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
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">🏆 Recognition & Excellence</span>
          <h2 className="section-title">Our Milestones & <span className="text-accent">Achievements</span></h2>
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

                {/* Card Content */}
                <div className="wof-card-body">
                  <h3 className="wof-name">{item.name}</h3>
                  <p className="wof-desc text-accent" style={{ fontWeight: '600', marginTop: '10px' }}>{item.achievement}</p>
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

export default Achievements;
