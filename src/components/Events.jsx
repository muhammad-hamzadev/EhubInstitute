import React, { useState, useEffect, useRef, useCallback } from 'react';

const journalPages = [
  {
    id: 'page-1',
    chapter: 'Chapter I • Outdoor Excursions',
    title: 'Trips & Tours',
    mainImg: '/EhubInstitute/assets/event_images/event_trip_and_rour.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_586e433e_2285_4495_a380_0a161511eedc.svg',
    bubble: 'To refresh our students, we believe in outdoor activities',
    cursiveNote: 'Trips & Tours — Outdoor recreation, team bonding, and refreshing excursions beyond the classroom.',
    tag: '🏕️ Trips & Tours'
  },
  {
    id: 'page-2',
    chapter: 'Chapter II • Evening Discussions',
    title: 'Ilam Gossip',
    mainImg: '/EhubInstitute/assets/event_images/event_gospis_night.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_8069d95b_5827_43ec_b24b_990789803f94.svg',
    bubble: 'An eve of learning, joy and fun',
    cursiveNote: 'Ilam Gossip — An unforgettable evening of student discussions, interactive learning, and shared joy.',
    tag: '🌙 Ilam Gossip'
  },
  {
    id: 'page-3',
    chapter: 'Chapter III • National Festivities',
    title: '14 August Celebration',
    mainImg: '/EhubInstitute/assets/event_images/event_14_auguest.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_5abc7d6d_0bbe_4d40_8c8c_03981bc27faf.svg',
    bubble: 'Celebrating independence, unity, and national pride with green & white spirit!',
    cursiveNote: '14 August Celebration — Independence Day festivities with speeches, national songs, and student performances.',
    tag: '🇵🇰 14 August'
  },
  {
    id: 'page-4',
    chapter: 'Chapter IV • Nature Expeditions',
    title: 'Exploring Landscape',
    mainImg: '/EhubInstitute/assets/event_images/event_12fa6006_e59f_4e1a_ab9b_ec41b5aab9ab.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_794ef032_0e36_4619_bdbb_4b37c3e782f7.svg',
    bubble: 'Exploring landscapes & breathtaking natural beauty with our E-Hub family!',
    cursiveNote: 'Exploring Landscape — Discovering scenic mountain vistas and heritage sites during educational field trips.',
    tag: '🏔️ Exploring Landscape'
  },
  {
    id: 'page-5',
    chapter: 'Chapter V • Professional Training',
    title: 'British Council Workshop',
    mainImg: '/EhubInstitute/assets/event_images/event_0b06c4f9_aa0f_4ef3_8f9f_223f1c4fe95b.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_5dd6474e_cf96_42e9_8882_fe4f3dbf6c3e.svg',
    bubble: 'Professional development programme & certified teacher training masterclass',
    cursiveNote: 'British Council Workshop — Empowering educators with world-class pedagogy and exam preparation strategy.',
    tag: '🎓 British Council'
  },
  {
    id: 'page-6',
    chapter: 'Chapter VI • Student Leadership',
    title: 'Youth Leadership Forum',
    mainImg: '/EhubInstitute/assets/event_images/event_8f91c4a1_1e92_4d29_b083_c451ce336fcd.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_7f3d9243_1ec7_4f4d_9402_6b8d31719e08.svg',
    bubble: 'Fostering confidence, public speaking, and executive poise!',
    cursiveNote: 'Leadership Seminar — Inspiring students to unlock their full potential and lead with vision.',
    tag: '⭐ Leadership Forum'
  },
  {
    id: 'page-7',
    chapter: 'Chapter VII • Classroom Activities',
    title: 'Interactive Group Discussions',
    mainImg: '/EhubInstitute/assets/event_images/event_166f2719_697e_470d_b011_a6b9427282d6.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_b61b6e55_13b0_459d_8a36_ef5144535a78.svg',
    bubble: 'Interactive group discussions, debate sessions, and practical learning!',
    cursiveNote: 'Classroom Sessions — Engaging group activities fostering public speaking, debate skills, and active participation.',
    tag: '🗣️ Group Activity'
  },
  {
    id: 'page-8',
    chapter: 'Chapter VIII • Campus Life',
    title: 'Student Community & Life',
    mainImg: '/EhubInstitute/assets/event_images/event_968a8e0b_709a_4fb2_b5bf_48c7486057c8.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_802ec832_4870_49f4_8915_8999c6816819.svg',
    bubble: 'Building lifelong friendships and professional networks at E-Hub.',
    cursiveNote: 'Campus Community — Creating a supportive, vibrant environment of passionate learners in Peshawar.',
    tag: '🌟 Campus Life'
  },
  {
    id: 'page-9',
    chapter: 'Chapter IX • Annual Honor Ceremony',
    title: 'Prize Distribution & Awards',
    mainImg: '/EhubInstitute/assets/event_images/event_12943e68_b2ea_437d_8128_bfc29b10e289.svg',
    polaroid1: '/EhubInstitute/assets/event_images/event_d1bc3539_74fe_42e2_a50e_2bbf96d4cdf9.svg',
    bubble: 'Honoring excellence, hard work, and outstanding academic achievements!',
    cursiveNote: 'Prize Distribution — Annual ceremony recognizing top performers, contest winners, and distinction holders.',
    tag: '🏆 Prize Distribution'
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
