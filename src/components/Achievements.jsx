import React, { useState, useEffect } from 'react';

const achieversData = [
  {
    id: 'ach-1',
    name: 'Career & Job Fair',
    achievement: 'Expanding Students Exposure',
    type: '💼 Career Fair',
    image: '/assets/user_images/ach_job_fair.svg'
  },
  {
    id: 'ach-2',
    name: 'National Mashal Award',
    achievement: 'Best Educationist Award',
    type: '🏆 Excellence',
    image: '/assets/user_images/ach_national_mashal_award.svg'
  },
  {
    id: 'ach-3',
    name: 'Free Education for Orphans',
    achievement: 'E-Hub Funds 10 Students/Month',
    type: '💖 Community',
    image: '/assets/user_images/ach_free_education_orphans.svg'
  },
  {
    id: 'ach-4',
    name: 'Iqra National University',
    achievement: 'MoU Partnership Signed',
    type: '🤝 Academic MoU',
    image: '/assets/user_images/ach_mou_iqra_university.svg'
  },
  {
    id: 'ach-5',
    name: 'CECOS University IT & Engg',
    achievement: 'Awarded & Recognized',
    type: '🏆 Recognition',
    image: '/assets/user_images/ach_cecos_university_award.svg'
  },
  {
    id: 'ach-6',
    name: 'British Council Partner',
    achievement: 'Official Registered Member',
    type: '🇬🇧 British Council',
    image: '/assets/user_images/ach_british_council_member.svg'
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
