import React, { useState } from 'react';

const achievementItems = [
  {
    id: 'wof-1',
    name: 'M. Jabir Khan Afridi',
    tag: 'IELTS Overall 7.5 Band',
    banner: '/assets/user_images/wof_afridi_7_5.svg',
    role: 'AEO Candidate',
    metaLeft: 'Peshawar • AEO Certified',
    metaRight: '7.5 Band',
    fullDesc: 'Secured an impressive 7.5 Overall Band with 8.5 in Listening module under the expert guidance of Ma\'am Maroof at E-Hub Institute.'
  },
  {
    id: 'wof-2',
    name: 'Abdal',
    tag: 'IELTS Overall 7.0 Band',
    banner: '/assets/user_images/wof_abdal_7_0.svg',
    role: 'British Council Candidate',
    metaLeft: 'Peshawar • British Council',
    metaRight: '7.0 Band',
    fullDesc: 'Achieved 7.0 Overall Band (7.5 Reading, 6.5 Speaking & Writing) with personalized coaching and writing masterclasses by Ma\'am Maroof.'
  },
  {
    id: 'wof-3',
    name: 'Imad Hassan',
    tag: 'IELTS Speaking 7.0 Band',
    banner: '/assets/user_images/wof_imad_6_5.svg',
    role: 'British Council Candidate',
    metaLeft: 'Peshawar • British Council',
    metaRight: 'Speaking 7.0',
    fullDesc: 'Scored 7.0 Band in Speaking and 6.5 Overall Band through daily fluency sessions and confidence building at E-Hub Institute.'
  },
  {
    id: 'wof-4',
    name: 'Ms. Shiza Zaman',
    tag: 'IELTS Overall 8.0 Band',
    banner: '/assets/user_images/wof_shiza_8_0.svg',
    role: 'Top Band Achiever',
    metaLeft: 'Peshawar • British Council',
    metaRight: '8.0 Band',
    fullDesc: 'Outstanding performance securing 8.0 Overall Band (8.5 Listening, 8.5 Reading, 8.0 Speaking) with Ma\'am Maroof.'
  },
  {
    id: 'wof-5',
    name: 'Najam Ul Saddan',
    tag: 'IELTS Overall 7.5 Band',
    banner: '/assets/user_images/wof_najam_7_5.svg',
    role: 'AEO Candidate',
    metaLeft: 'Peshawar • AEO Certified',
    metaRight: '7.5 Band',
    fullDesc: 'Achieved 7.5 Overall Band (8.5 Listening, 7.5 Reading, 7.5 Speaking, 7.0 Writing) with Ma\'am Maroof at E-Hub Institute.'
  },
  {
    id: 'wof-6',
    name: 'Mr. Nabeel Anwar',
    tag: 'IELTS Overall 7.0 Band',
    banner: '/assets/user_images/wof_nabeel_7_0.svg',
    role: 'IELTS Academic',
    metaLeft: 'Peshawar • British Council',
    metaRight: '7.0 Band',
    fullDesc: 'Achieved 7.0 Overall Band with 7.5 in Reading and 7.0 in Speaking under the guidance of CEO Maroof Mehmood at E-Hub Institute.'
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
                  <img src={item.banner} alt={item.name} className="single-banner-img" loading="lazy" decoding="async" />
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
