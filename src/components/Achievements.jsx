import React, { useState } from 'react';

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

// Duplicate items for seamless continuous infinite marquee loop
const infiniteItems = [...achievementItems, ...achievementItems];

const Achievements = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  return (
    <>
      <section className="achievements-section" id="achievements">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">🏆 Recognition & Excellence</span>
            <h2 className="section-title">Our Milestones & <span className="text-accent">Achievements</span></h2>
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
                  <span className="spotlight-role">{item.role}</span>
                  <span className="spotlight-tag">{item.tag}</span>
                  <p className="spotlight-desc">{item.desc}</p>

                  {/* Bottom Metadata Bar */}
                  <div className="spotlight-meta-bar">
                    <span className="meta-left">{item.metaLeft}</span>
                    <span className="meta-right-pill">{item.metaRight}</span>
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

export default Achievements;
