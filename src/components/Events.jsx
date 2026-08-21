import React, { useState, useEffect, useRef, useCallback } from 'react';

const journalPages = [
  {
    id: 'page-1',
    chapter: 'Chapter I • Outdoor Excursions',
    title: 'Trips & Tours Excursion',
    mainImg: '/assets/event_images/event_trip_and_rour.svg',
    polaroid1: '/assets/event_images/event_trip&tour.svg',
    bubble: 'To refresh our students, we believe in outdoor activities & scenic trips!',
    cursiveNote: 'Trips & Tours — Outdoor recreation, team bonding, and refreshing excursions beyond the classroom.',
    tag: '🏕️ Trips & Tours'
  },
  {
    id: 'page-2',
    chapter: 'Chapter II • Evening Discussions',
    title: 'Ilam Gossip Evening (Part 1)',
    mainImg: '/assets/event_images/event_gospis_night.svg',
    polaroid1: '/assets/event_images/event_illma-gossip.svg',
    bubble: 'An eve of learning, gossip, joy, and interactive student discussion!',
    cursiveNote: 'Ilam Gossip — An unforgettable evening of student discussions, interactive learning, and shared joy.',
    tag: '🌙 Ilam Gossip'
  },
  {
    id: 'page-3',
    chapter: 'Chapter III • Evening Discussions',
    title: 'Ilam Gossip Session (Part 2)',
    mainImg: '/assets/event_images/event_illma-gossip2.svg',
    polaroid1: '/assets/event_images/event_illma-gossip3.svg',
    bubble: 'Engaging student conversations, fun activities, and intellectual exchanges!',
    cursiveNote: 'Ilam Gossip Night — Fostering student confidence, active communication, and lasting campus memories.',
    tag: '🌙 Ilam Gossip Night'
  },
  {
    id: 'page-4',
    chapter: 'Chapter IV • National Independence',
    title: '14 August Celebration (Part 1)',
    mainImg: '/assets/event_images/event_14_auguest.svg',
    polaroid1: '/assets/event_images/event_14-august.svg',
    bubble: 'Celebrating independence, unity, and national pride with green & white spirit!',
    cursiveNote: '14 August Celebration — Independence Day festivities with flag hoisting, national songs, and speeches.',
    tag: '🇵🇰 14 August Independence'
  },
  {
    id: 'page-5',
    chapter: 'Chapter V • National Independence',
    title: '14 August Cultural Gala (Part 2)',
    mainImg: '/assets/event_images/event_14-august1.svg',
    polaroid1: '/assets/event_images/event_14-august4.svg',
    bubble: 'Vibrant student performances, patriotic speeches, and national celebrations!',
    cursiveNote: '14 August Festival — Student performances expressing love, unity, and heritage for Pakistan.',
    tag: '🇵🇰 14 August Gala'
  },
  {
    id: 'page-6',
    chapter: 'Chapter VI • Winter Evenings',
    title: 'Bonfire & Music Night',
    mainImg: '/assets/event_images/event_bonfire.svg',
    polaroid1: '/assets/event_images/event_bonfire1.svg',
    bubble: 'Gathering around the warm bonfire for music, warmth, and unforgettable campus memories!',
    cursiveNote: 'Bonfire Night — Cozy winter evening celebrating student friendships, acoustic music, and warmth.',
    tag: '🔥 Bonfire Event'
  },
  {
    id: 'page-7',
    chapter: 'Chapter VII • Professional Training',
    title: 'British Council Masterclass',
    mainImg: '/assets/event_images/event_british-council-workshop.svg',
    polaroid1: '/assets/event_images/event_workshop.svg',
    bubble: 'Professional development programme & certified teacher training masterclass.',
    cursiveNote: 'British Council Workshop — Empowering educators with world-class pedagogy and exam preparation strategy.',
    tag: '🎓 British Council'
  },
  {
    id: 'page-8',
    chapter: 'Chapter VIII • Interactive Workshops',
    title: 'Student Skills & Debate Workshop',
    mainImg: '/assets/event_images/event_workshop2.svg',
    polaroid1: '/assets/event_images/event_certificated -cermony.svg',
    bubble: 'Fostering confidence, public speaking, and interactive debate skills!',
    cursiveNote: 'Interactive Workshop — Inspiring students to unlock public speaking poise, debate skills, and active participation.',
    tag: '⭐ Skills Workshop'
  },
  {
    id: 'page-9',
    chapter: 'Chapter IX • Annual Honor Ceremony',
    title: 'Prize Distribution & Graduation',
    mainImg: '/assets/event_images/event_award.svg',
    polaroid1: '/assets/event_images/event_certificated-cermony.svg',
    bubble: 'Honoring excellence, hard work, and outstanding academic achievements at E-Hub!',
    cursiveNote: 'Prize Distribution — Annual ceremony recognizing top performers, contest winners, and distinction holders.',
    tag: '🏆 Annual Awards & Graduation'
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
