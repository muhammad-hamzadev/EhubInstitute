import React, { useState } from 'react';

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
    image: '/EhubInstitute/assets/images/img_p18_2.png'
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
    image: '/EhubInstitute/assets/images/img_p10_0.jpeg'
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
    image: '/EhubInstitute/assets/images/img_p18_0.png'
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
    image: '/EhubInstitute/assets/images/img_p19_0.png'
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
    image: '/EhubInstitute/assets/images/img_p21_0.png'
  }
];

// Duplicate items for seamless continuous infinite marquee loop
const infiniteItems = [...achieversData, ...achieversData];

const WallOfFame = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  return (
    <>
      <section className="wof-section achievements-section" id="wall-of-fame">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Wall of Fame</span>
            <h2 className="section-title">
              Our Students. <span className="text-accent">Their Success Stories.</span>
            </h2>
            <p className="section-desc center-desc">
              Hover over any card to spotlight & zoom forward
            </p>
          </div>
        </div>

        {/* Continuous Horizontal Infinite Marquee Track */}
        <div className="infinite-marquee-viewport">
          <div className="infinite-marquee-track">
            {infiniteItems.map((item, index) => (
              <div
                key={`inf-wof-${index}`}
                className="single-pic-spotlight-card"
                onClick={() => setZoomedCard(item)}
              >
                {/* Single Full Cover Image */}
                <div className="spotlight-single-banner">
                  <img src={item.image} alt={item.name} className="single-banner-img" />
                </div>

                {/* Card Main Body */}
                <div className="spotlight-body">
                  <h4 className="spotlight-name">{item.name}</h4>
                  <span className="spotlight-role">{item.achievement}</span>
                  <span className="spotlight-tag">{item.type}</span>
                  <p className="spotlight-desc">{item.desc}</p>

                  {/* Bottom Metadata Bar */}
                  <div className="spotlight-meta-bar">
                    <span className="meta-left">{item.location}</span>
                    <span className="meta-right-pill">{item.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Click Zoom Spotlight Modal View */}
      {zoomedCard && (
        <div className="achieve-zoom-modal-backdrop" onClick={() => setZoomedCard(null)}>
          <div className="achieve-zoom-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setZoomedCard(null)}>
              <i className="ph-bold ph-x"></i>
            </button>
            <div className="modal-content-grid">
              <div className="modal-img-col">
                <img src={zoomedCard.image} alt={zoomedCard.name} className="modal-large-img" />
              </div>
              <div className="modal-info-col">
                <span className="modal-badge">{zoomedCard.score}</span>
                <h3 className="modal-title">{zoomedCard.name}</h3>
                <span className="modal-sub">{zoomedCard.achievement} • {zoomedCard.location}</span>
                <p className="modal-desc">{zoomedCard.desc} Rating: {zoomedCard.rating}</p>
                <div className="modal-footer-action">
                  <a href="#contact" className="btn btn-primary" onClick={() => setZoomedCard(null)}>
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WallOfFame;
