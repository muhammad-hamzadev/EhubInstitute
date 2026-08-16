import React, { useState } from 'react';

const achievementItems = [
  {
    id: 'wof-1',
    name: 'Muhammad Ali',
    tag: 'IELTS Academic 8.5 Band',
    banner: '/EhubInstitute/assets/images/img_p18_2.png',
    role: 'Academic',
    metaLeft: 'Peshawar • Oxford Admit',
    metaRight: '8.5 Band',
    fullDesc: 'Secured 8.5 Band in first attempt through E-Hub master classes and intensive speaking practice.'
  },
  {
    id: 'wof-2',
    name: 'Fatima Zahra',
    tag: 'PTE Academic 88 Score',
    banner: '/EhubInstitute/assets/images/img_p10_0.jpeg',
    role: 'PTE Master',
    metaLeft: 'Peshawar • Australia Visa',
    metaRight: '88/90',
    fullDesc: 'Transformed my English speaking fluency and achieved top scores within 6 weeks at E-Hub.'
  },
  {
    id: 'wof-3',
    name: 'Azure Achiever',
    tag: 'IELTS 8.5 Band Score',
    banner: '/EhubInstitute/assets/images/img_p18_0.png',
    role: 'Top Achiever',
    metaLeft: 'Peshawar • Global Scholar',
    metaRight: '8.5 Band',
    fullDesc: 'Outstanding performance in IELTS Academic with 9.0 in Speaking & Listening modules.'
  },
  {
    id: 'wof-4',
    name: 'Usman Khan',
    tag: 'iTTi TEFL Certified',
    banner: '/EhubInstitute/assets/images/img_p19_0.png',
    role: 'TEFL 220h',
    metaLeft: 'Peshawar • ESL Educator',
    metaRight: 'Distinction',
    fullDesc: 'Completed 220-hour iTTi-USA certification. Now teaching English professionally abroad.'
  },
  {
    id: 'wof-5',
    name: 'Sana Ahmed',
    tag: 'IELTS General 8.0 Band',
    banner: '/EhubInstitute/assets/images/img_p21_0.png',
    role: 'General',
    metaLeft: 'Peshawar • Canada PR',
    metaRight: '8.0 Band',
    fullDesc: 'E-Hub faculty provided unbeatable strategies for IELTS Writing and Speaking modules.'
  }
];

// Duplicate items for seamless continuous infinite marquee loop
const infiniteItems = [...achievementItems, ...achievementItems];

const WallOfFame = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  return (
    <>
      <section className="wof-section" id="wall-of-fame">
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

        {/* Continuous Horizontal Infinite Marquee Track (Single Picture per Card 1:1 Match) */}
        <div className="infinite-marquee-viewport">
          <div className="infinite-marquee-track">
            {infiniteItems.map((item, index) => (
              <div
                key={`inf-ach-${index}`}
                className="single-pic-spotlight-card"
                onClick={() => setZoomedCard(item)}
              >
                {/* Single Full Cover Image */}
                <div className="spotlight-single-banner">
                  <img src={item.banner} alt={item.name} className="single-banner-img" />
                </div>

                {/* Card Main Body */}
                <div className="spotlight-body">
                  <h4 className="spotlight-name">{item.name}</h4>
                  <p className="spotlight-desc text-accent" style={{ marginTop: '10px', fontWeight: '500' }}>{item.tag}</p>
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
                <img src={zoomedCard.banner} alt={zoomedCard.name} className="modal-large-img" />
              </div>
              <div className="modal-info-col">
                <span className="modal-badge">{zoomedCard.metaRight}</span>
                <h3 className="modal-title">{zoomedCard.name}</h3>
                <span className="modal-sub">{zoomedCard.role} • {zoomedCard.metaLeft}</span>
                <p className="modal-desc">{zoomedCard.fullDesc}</p>
                <div className="modal-footer-action">
                  <a href="#contact" className="btn btn-primary" onClick={() => setZoomedCard(null)}>
                    Enquire About Courses
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
