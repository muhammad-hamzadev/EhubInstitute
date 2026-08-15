import React, { useState } from 'react';

const journalPages = [
  {
    id: 'page-1',
    chapter: 'Chapter I • March 2024',
    title: 'Public Speaking Championship',
    mainImg: './assets/images/img_p18_4.png',
    polaroid1: './assets/images/img_p18_2.png',
    polaroid2: './assets/images/img_p18_0.png',
    bubble: 'Unbelievable energy and articulate eloquence on stage today!',
    cursiveNote: 'March 15 — Our students conquered stage fright and delivered powerful speeches. Gold medalist performance!',
    tag: '☀️ Gold Champion'
  },
  {
    id: 'page-2',
    chapter: 'Chapter II • April 2024',
    title: 'IELTS Band 8.5 Masterclass',
    mainImg: './assets/images/img_p18_1.png',
    polaroid1: './assets/images/img_p10_0.jpeg',
    polaroid2: './assets/images/img_p19_0.png',
    bubble: 'Cracking Task 2 essay structures & 1-on-1 interview mocks!',
    cursiveNote: 'April 08 — Intensive workshop with certified British Council trainers. Over 80 students practiced mock exam modules.',
    tag: '🎓 British Council'
  },
  {
    id: 'page-3',
    chapter: 'Chapter III • May 2024',
    title: 'Student Presentation Day',
    mainImg: './assets/images/img_p20_5.png',
    polaroid1: './assets/images/img_p21_0.png',
    polaroid2: './assets/images/img_p20_2.png',
    bubble: 'Confidence, body language mastery & accent articulation!',
    cursiveNote: 'May 22 — Every student delivered a 10-minute keynote presentation with flawless poise and vocabulary.',
    tag: '⭐ 100% Distinction'
  },
  {
    id: 'page-4',
    chapter: 'Chapter IV • June 2024',
    title: 'iTTi TEFL Teacher Training',
    mainImg: './assets/images/img_p20_4.png',
    polaroid1: './assets/images/img_p18_4.png',
    polaroid2: './assets/images/img_p18_1.png',
    bubble: 'Graduating international educators with 220 credit hours!',
    cursiveNote: 'June 18 — 220 hours of rigorous pedagogy training completed. Our new cohort is certified to teach worldwide.',
    tag: '🌍 Global Accredited'
  },
  {
    id: 'page-5',
    chapter: 'Chapter V • July 2024',
    title: 'Executive Leadership Forum',
    mainImg: './assets/images/img_p20_2.png',
    polaroid1: './assets/images/img_p20_0.png',
    polaroid2: './assets/images/img_p20_5.png',
    bubble: 'High-stakes corporate communication & executive poise!',
    cursiveNote: 'July 14 — Special corporate workshop focused on executive interview mastery, negotiations, and public speaking.',
    tag: '💼 Executive Forum'
  },
  {
    id: 'page-6',
    chapter: 'Chapter VI • August 2024',
    title: 'Alumni Leadership Summit',
    mainImg: './assets/images/img_p22_0.jpeg',
    polaroid1: './assets/images/img_p10_0.jpeg',
    polaroid2: './assets/images/img_p18_2.png',
    bubble: 'From Oxford to Australia, E-Hubians are shaping the world!',
    cursiveNote: 'August 30 — Celebrating 5,000+ alumni success stories. Join E-Hub today and write your own story of success!',
    tag: '🏆 5000+ Alumni'
  }
];

const Events = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null); // 'next' or 'prev'
  const [isFlipping, setIsFlipping] = useState(false);
  const totalPages = journalPages.length;

  const currentData = journalPages[pageIndex];
  const nextData = journalPages[(pageIndex + 1) % totalPages];

  const handleNext = () => {
    if (isFlipping) return;
    setFlipDirection('next');
    setIsFlipping(true);
    setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 650);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setFlipDirection('prev');
    setIsFlipping(true);
    setTimeout(() => {
      setPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
      setIsFlipping(false);
      setFlipDirection(null);
    }, 650);
  };

  return (
    <section className="single-book-section maroon-bg" id="events">
      <div className="container">
        <div className="section-header text-center light-header">
          <span className="section-tag-gold">📸 Events Photo Book</span>
          <h2 className="diary-title yellow-heading">Events <span className="yellow-highlight">Photo Album</span></h2>
          <p className="section-desc center-desc yellow-subtext">
            Memory {pageIndex + 1} of {totalPages} • Click or drag corners to flip!
          </p>
        </div>

        {/* ONE SINGLE 3D OPEN JOURNAL BINDER */}
        <div className="single-book-container">
          {/* Controls Header Bar */}
          <div className="single-book-controls">
            <button className="book-arrow-btn" onClick={handlePrev} aria-label="Previous Page">
              <i className="ph-bold ph-caret-left"></i> Previous Page
            </button>
            <span className="single-book-page-num yellow-subtext">
              📖 Open 2-Page Spread • Memory {pageIndex + 1}
            </span>
            <button className="book-arrow-btn" onClick={handleNext} aria-label="Next Page">
              Next Page <i className="ph-bold ph-caret-right"></i>
            </button>
          </div>

          {/* Master 3D Journal Leather Binder */}
          <div className="master-journal-binder">
            {/* Multi-Layer Stacked Paper Edges */}
            <div className="stacked-pages-edge left-edge"></div>
            <div className="stacked-pages-edge right-edge"></div>

            {/* Inner Paper Pages Stage */}
            <div className="journal-inner-paper-stage">
              {/* Left Page Spread */}
              <div className="journal-page-col page-left-spread" onClick={handlePrev} title="Click to flip back">
                <div className="main-photo-frame">
                  <img src={currentData.mainImg} alt={currentData.title} className="slide-photo" />
                  <span className="photo-badge">{currentData.tag}</span>
                </div>
                <div className="speech-bubble-box">
                  "{currentData.bubble}"
                </div>
              </div>

              {/* Center Ring Binder Spine */}
              <div className="journal-ring-spine">
                <div className="spine-ring"></div>
                <div className="spine-ring"></div>
                <div className="spine-ring"></div>
                <div className="spine-ring"></div>
                <div className="spine-ring"></div>
              </div>

              {/* Right Page Spread */}
              <div className="journal-page-col page-right-spread" onClick={handleNext} title="Click to flip forward">
                <div className="polaroid-wrapper p-tilted-1">
                  <img src={currentData.polaroid1} alt="Polaroid Memory 1" />
                </div>
                <div className="polaroid-wrapper p-tilted-2">
                  <img src={currentData.polaroid2} alt="Polaroid Memory 2" />
                </div>

                <div className="journal-text-content">
                  <span className="chapter-label">{currentData.chapter}</span>
                  <h3 className="slide-heading">{currentData.title}</h3>
                  <p className="cursive-handwriting">
                    "{currentData.cursiveNote}"
                  </p>
                </div>
                <div className="flip-hint-corner">Click corner to flip ➔</div>
              </div>

              {/* 3D Page Flipping Leaf Overlay */}
              {isFlipping && (
                <div className={`flipping-page-leaf ${flipDirection === 'next' ? 'flip-anim-next' : 'flip-anim-prev'}`}>
                  <div className="leaf-face leaf-front">
                    <div className="journal-text-content">
                      <span className="chapter-label">{currentData.chapter}</span>
                      <h3 className="slide-heading">{currentData.title}</h3>
                    </div>
                  </div>
                  <div className="leaf-face leaf-back">
                    <div className="main-photo-frame">
                      <img src={nextData.mainImg} alt={nextData.title} className="slide-photo" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
