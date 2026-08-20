import React, { useState, useEffect, useRef, useCallback } from 'react';

const journalPages = [
  {
    id: 'page-1',
    chapter: 'Chapter I • March 2024',
    title: 'Public Speaking Championship',
    mainImg: '/assets/images/img_p18_4.png',
    polaroid1: '/assets/images/img_p18_3.png',
    polaroid2: '/assets/images/img_p18_0.png',
    bubble: 'Unbelievable energy and articulate eloquence on stage today!',
    cursiveNote: 'March 15 — Our students conquered stage fright and delivered powerful speeches. Gold medalist performance!',
    tag: '☀️ Gold Champion'
  },
  {
    id: 'page-2',
    chapter: 'Chapter II • April 2024',
    title: 'IELTS Band 8.5 Masterclass',
    mainImg: '/assets/images/img_p18_1.png',
    polaroid1: '/assets/images/img_p16_1.png',
    polaroid2: '/assets/images/img_p19_0.png',
    bubble: 'Cracking Task 2 essay structures & 1-on-1 interview mocks!',
    cursiveNote: 'April 08 — Intensive workshop with certified British Council trainers. Over 80 students practiced mock exam modules.',
    tag: '🎓 British Council'
  },
  {
    id: 'page-3',
    chapter: 'Chapter III • May 2024',
    title: 'Student Presentation Day',
    mainImg: '/assets/images/img_p20_5.png',
    polaroid1: '/assets/images/img_p20_3.png',
    polaroid2: '/assets/images/img_p20_2.png',
    bubble: 'Confidence, body language mastery & accent articulation!',
    cursiveNote: 'May 22 — Every student delivered a 10-minute keynote presentation with flawless poise and vocabulary.',
    tag: '⭐ 100% Distinction'
  },
  {
    id: 'page-4',
    chapter: 'Chapter IV • June 2024',
    title: 'iTTi TEFL Teacher Training',
    mainImg: '/assets/images/img_p20_4.png',
    polaroid1: '/assets/images/img_p20_1.png',
    polaroid2: '/assets/images/img_p18_1.png',
    bubble: 'Graduating international educators with 220 credit hours!',
    cursiveNote: 'June 18 — 220 hours of rigorous pedagogy training completed. Our new cohort is certified to teach worldwide.',
    tag: '🌍 Global Accredited'
  },
  {
    id: 'page-5',
    chapter: 'Chapter V • July 2024',
    title: 'Executive Leadership Forum',
    mainImg: '/assets/images/img_p20_2.png',
    polaroid1: '/assets/images/img_p20_0.png',
    polaroid2: '/assets/images/img_p20_5.png',
    bubble: 'High-stakes corporate communication & executive poise!',
    cursiveNote: 'July 14 — Special corporate workshop focused on executive interview mastery, negotiations, and public speaking.',
    tag: '💼 Executive Forum'
  },
  {
    id: 'page-6',
    chapter: 'Chapter VI • August 2024',
    title: 'Alumni Leadership Summit',
    mainImg: '/assets/images/img_p22_0.jpeg',
    polaroid1: '/assets/images/img_p22_1.jpeg',
    polaroid2: '/assets/images/img_p18_2.png',
    bubble: 'From Oxford to Australia, E-Hubians are shaping the world!',
    cursiveNote: 'August 30 — Celebrating 5,000+ alumni success stories. Join E-Hub today and write your own story of success!',
    tag: '🏆 5000+ Alumni'
  },
  {
    id: 'page-7',
    chapter: 'Wall of Fame • IELTS',
    title: 'Muhammad Ali',
    mainImg: '/assets/images/img_p18_5.png',
    polaroid1: '/assets/images/img_p19_0.png',
    polaroid2: '/assets/images/img_p10_0.jpeg',
    bubble: 'Secured 8.5 Band in first attempt!',
    cursiveNote: 'Peshawar • Oxford Admit. Through E-Hub master classes and intensive speaking practice.',
    tag: '⭐ 8.5 Band'
  },
  {
    id: 'page-8',
    chapter: 'Wall of Fame • PTE',
    title: 'Fatima Zahra',
    mainImg: '/assets/images/img_p19_1.png',
    polaroid1: '/assets/images/img_p19_2.png',
    polaroid2: '/assets/images/img_p21_0.png',
    bubble: 'Transformed English speaking fluency!',
    cursiveNote: 'Peshawar • Australia Visa. Achieved top scores within 6 weeks at E-Hub.',
    tag: '⭐ 88/90'
  },
  {
    id: 'page-9',
    chapter: 'Recognition • British Council',
    title: 'British Council Award',
    mainImg: '/assets/images/img_p16_0.png',
    polaroid1: '/assets/images/img_p16_2.png',
    polaroid2: '/assets/images/img_p18_0.png',
    bubble: 'Excellence Partner for IELTS training!',
    cursiveNote: 'Recognized by the British Council for outstanding pedagogy and student success rates.',
    tag: '🏆 Excellence'
  },
  {
    id: 'page-10',
    chapter: 'Recognition • iTTi-USA',
    title: 'iTTi-USA Accreditation',
    mainImg: '/assets/images/img_p17_0.jpeg',
    polaroid1: '/assets/images/img_p19_15.png',
    polaroid2: '/assets/images/img_p21_0.png',
    bubble: 'Global TEFL Partner in Pakistan!',
    cursiveNote: 'Official partner for delivering internationally recognized TEFL/TESOL certifications.',
    tag: '🎓 Accredited'
  }
];

// Helper to render the Left Page Spread content
const LeftPageContent = ({ data, onPrev, isFirstPage }) => {
  if (!data) return null;
  return (
    <div className="book-page-content page-left-content">
      <div className="page-top-header">
        <span className="page-corner-badge">{data.tag}</span>
        <span className="page-number-indicator">E-HUB JOURNAL</span>
      </div>

      <div className="main-photo-frame">
        <img src={data.mainImg} alt={data.title} className="slide-photo" loading="lazy" />
        <div className="photo-shine-overlay"></div>
      </div>

      <div className="speech-bubble-box">
        <i className="ph-fill ph-quotes speech-quote-icon"></i>
        <span>"{data.bubble}"</span>
      </div>

      <div className="page-footer-nav">
        <button
          type="button"
          className="book-nav-btn prev-btn"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous page"
        >
          <i className="ph-bold ph-caret-left"></i>
          <span>{isFirstPage ? "Close Cover" : "Previous"}</span>
        </button>
      </div>
    </div>
  );
};

// Helper to render the Right Page Spread content
const RightPageContent = ({ data, onNext, isLastPage, pageNumber, totalPages }) => {
  if (!data) return null;
  return (
    <div className="book-page-content page-right-content">
      <div className="page-top-header right-align">
        <span className="chapter-label">{data.chapter}</span>
        <span className="page-number-indicator">Page {pageNumber} of {totalPages}</span>
      </div>

      {/* Clean secondary photo frame — no floating polaroids */}
      <div className="secondary-photo-frame">
        <img src={data.polaroid1} alt={data.title} className="slide-photo" loading="lazy" />
        <div className="photo-shine-overlay"></div>
      </div>

      <div className="journal-text-content">
        <h3 className="slide-heading">{data.title}</h3>
        <p className="cursive-handwriting">
          "{data.cursiveNote}"
        </p>
      </div>

      <div className="page-footer-nav right-align">
        <button
          type="button"
          className="book-nav-btn next-btn"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next page"
        >
          <span>{isLastPage ? "Close Book" : "Next Page"}</span>
          <i className={`ph-bold ${isLastPage ? 'ph-book-bookmark' : 'ph-caret-right'}`}></i>
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const [bookState, setBookState] = useState('closed-front'); // 'closed-front' | 'open' | 'closed-back'
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null); // 'next' | 'prev' | null
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const sectionRef = useRef(null);
  const totalPages = journalPages.length;

  const handleOpen = () => {
    setBookState('open');
    setPageIndex(0);
  };

  const handleCloseFront = () => {
    setBookState('closed-front');
    setPageIndex(0);
  };

  const handleCloseBack = () => {
    setBookState('closed-back');
  };

  const handleReopenFromBack = () => {
    setBookState('open');
    setPageIndex(0);
  };

  // Scroll detection to auto open book
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAutoOpened) {
          setTimeout(() => {
            setBookState('open');
            setHasAutoOpened(true);
          }, 600);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAutoOpened]);

  // Turn to Next Page with realistic 3D leaf flip
  const handleNext = useCallback(() => {
    if (isFlipping || bookState !== 'open') return;

    if (pageIndex >= totalPages - 1) {
      handleCloseBack();
      return;
    }

    setIsFlipping(true);
    setFlipDirection('next');

    setTimeout(() => {
      setPageIndex((prev) => prev + 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 700);
  }, [isFlipping, bookState, pageIndex, totalPages]);

  // Turn to Previous Page with realistic 3D leaf flip
  const handlePrev = useCallback(() => {
    if (isFlipping || bookState !== 'open') return;

    if (pageIndex === 0) {
      handleCloseFront();
      return;
    }

    setIsFlipping(true);
    setFlipDirection('prev');

    setTimeout(() => {
      setPageIndex((prev) => prev - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 700);
  }, [isFlipping, bookState, pageIndex]);

  // Keyboard Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (bookState !== 'open') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookState, handleNext, handlePrev]);

  // Active spread data
  const currentData = journalPages[pageIndex];
  const nextData = pageIndex < totalPages - 1 ? journalPages[pageIndex + 1] : null;
  const prevData = pageIndex > 0 ? journalPages[pageIndex - 1] : null;

  return (
    <section className="events-book-section maroon-bg" id="events" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Memories & Highlights</span>
          <h2 className="section-title text-light-heading">
            Life at E-Hub • <span className="text-accent">Interactive Photo Journal</span>
          </h2>
          <p className="section-desc center-desc text-light-muted">
            Flip through our journey, workshops, student distinctions, and memorable celebrations. Click the pages or use the controls below to turn pages like a real book.
          </p>
        </div>

        {/* 3D Book Stage */}
        <div className="book-stage">
          <div className={`the-3d-book state-${bookState} ${isFlipping ? 'is-flipping' : ''}`}>
            
            {/* Book Pages Container (Spread when open) */}
            <div className="book-pages-container">
              
              {/* LEFT PAGE (Static Base Spread) */}
              <div 
                className="book-page page-left" 
                onClick={handlePrev}
                title="Click to turn to previous page"
              >
                <div className="page-texture-overlay"></div>
                <LeftPageContent
                  data={flipDirection === 'prev' ? prevData : currentData}
                  onPrev={handlePrev}
                  isFirstPage={flipDirection === 'prev' ? (pageIndex - 1 === 0) : (pageIndex === 0)}
                />
              </div>

              {/* Center Spine Crease & Shadow */}
              <div className="page-spine-crease">
                <div className="spine-stitch-line"></div>
              </div>

              {/* RIGHT PAGE (Static Base Spread) */}
              <div 
                className="book-page page-right" 
                onClick={handleNext}
                title="Click to turn to next page"
              >
                <div className="page-texture-overlay"></div>
                <RightPageContent
                  data={flipDirection === 'next' ? nextData : currentData}
                  onNext={handleNext}
                  isLastPage={flipDirection === 'next' ? (pageIndex + 1 === totalPages - 1) : (pageIndex === totalPages - 1)}
                  pageNumber={flipDirection === 'next' ? pageIndex + 2 : pageIndex + 1}
                  totalPages={totalPages}
                />
              </div>

              {/* 3D TURNING LEAF (Active when flipping Next) */}
              {isFlipping && flipDirection === 'next' && (
                <div className="turning-page-leaf leaf-flipping-next">
                  {/* Front Face: Current Right Page (Turns away) */}
                  <div className="leaf-face leaf-front">
                    <div className="page-texture-overlay"></div>
                    <RightPageContent
                      data={currentData}
                      onNext={handleNext}
                      isLastPage={pageIndex === totalPages - 1}
                      pageNumber={pageIndex + 1}
                      totalPages={totalPages}
                    />
                    <div className="leaf-shadow-overlay"></div>
                  </div>

                  {/* Back Face: Incoming Left Page (Lands on Left) */}
                  <div className="leaf-face leaf-back">
                    <div className="page-texture-overlay"></div>
                    <LeftPageContent
                      data={nextData}
                      onPrev={handlePrev}
                      isFirstPage={pageIndex + 1 === 0}
                    />
                    <div className="leaf-shadow-overlay"></div>
                  </div>
                </div>
              )}

              {/* 3D TURNING LEAF (Active when flipping Prev) — Left page lifts LEFT→RIGHT like a real book */}
              {isFlipping && flipDirection === 'prev' && (
                <div className="turning-page-leaf leaf-flipping-prev">
                  {/* Front Face — LEFT side at start, lifts and turns away to the right */}
                  {/* Shows: CURRENT LEFT page content */}
                  <div className="leaf-face leaf-front prev-leaf-front">
                    <div className="page-texture-overlay"></div>
                    <LeftPageContent
                      data={currentData}
                      onPrev={handlePrev}
                      isFirstPage={pageIndex === 0}
                    />
                    <div className="leaf-shadow-overlay"></div>
                  </div>

                  {/* Back Face — lands on RIGHT side after flip */}
                  {/* Shows: PREVIOUS RIGHT page content */}
                  <div className="leaf-face leaf-back prev-leaf-back">
                    <div className="page-texture-overlay"></div>
                    <RightPageContent
                      data={prevData}
                      onNext={handleNext}
                      isLastPage={false}
                      pageNumber={pageIndex}
                      totalPages={totalPages}
                    />
                    <div className="leaf-shadow-overlay"></div>
                  </div>
                </div>
              )}

            </div>

            {/* FRONT COVER (Hardcover with Gold Debossing) */}
            <div 
              className="book-cover book-front" 
              onClick={bookState === 'closed-front' ? handleOpen : undefined}
              title={bookState === 'closed-front' ? "Click to open book" : undefined}
            >
              <div className="cover-leather-texture"></div>
              <div className="cover-inner-content">
                <div className="cover-border">
                  <div className="cover-gold-crest">
                    <i className="ph-fill ph-book-open"></i>
                  </div>
                  <h3 className="cover-eyebrow">E-Hub Institute</h3>
                  <h1 className="cover-title">Events & Life</h1>
                  <p className="cover-subtitle">Memories • Milestones • Legacy</p>
                  <div className="cover-gold-badge">
                    <span>ESTD 2019 • PESHAWAR</span>
                  </div>
                  {bookState === 'closed-front' && (
                    <button type="button" className="cover-btn" onClick={handleOpen}>
                      <i className="ph-bold ph-hand-pointing"></i> Click to Open Journal
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* BACK COVER (Hardcover Back) */}
            <div 
              className="book-cover book-back" 
              onClick={bookState === 'closed-back' ? handleReopenFromBack : undefined}
              title={bookState === 'closed-back' ? "Click to reopen book" : undefined}
            >
              <div className="cover-leather-texture"></div>
              <div className="cover-inner-content">
                <div className="cover-border">
                  <div className="cover-gold-crest">
                    <i className="ph-fill ph-sparkle"></i>
                  </div>
                  <h1 className="cover-title">The End</h1>
                  <p className="cover-subtitle">Thank You For Exploring</p>
                  <p className="cover-quote">
                    "Join E-Hub today and write your own chapter of success."
                  </p>
                  {bookState === 'closed-back' && (
                    <button type="button" className="cover-btn" onClick={handleReopenFromBack}>
                      <i className="ph-bold ph-arrow-counter-clockwise"></i> Reopen From Start
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;
