import React, { useState, useEffect, useRef } from 'react';

const journalPages = [
  {
    id: 'page-1',
    chapter: 'Chapter I • March 2024',
    title: 'Public Speaking Championship',
    mainImg: '/EhubInstitute/assets/images/img_p18_4.png',
    polaroid1: '/EhubInstitute/assets/images/img_p18_2.png',
    polaroid2: '/EhubInstitute/assets/images/img_p18_0.png',
    bubble: 'Unbelievable energy and articulate eloquence on stage today!',
    cursiveNote: 'March 15 — Our students conquered stage fright and delivered powerful speeches. Gold medalist performance!',
    tag: '☀️ Gold Champion'
  },
  {
    id: 'page-2',
    chapter: 'Chapter II • April 2024',
    title: 'IELTS Band 8.5 Masterclass',
    mainImg: '/EhubInstitute/assets/images/img_p18_1.png',
    polaroid1: '/EhubInstitute/assets/images/img_p10_0.jpeg',
    polaroid2: '/EhubInstitute/assets/images/img_p19_0.png',
    bubble: 'Cracking Task 2 essay structures & 1-on-1 interview mocks!',
    cursiveNote: 'April 08 — Intensive workshop with certified British Council trainers. Over 80 students practiced mock exam modules.',
    tag: '🎓 British Council'
  },
  {
    id: 'page-3',
    chapter: 'Chapter III • May 2024',
    title: 'Student Presentation Day',
    mainImg: '/EhubInstitute/assets/images/img_p20_5.png',
    polaroid1: '/EhubInstitute/assets/images/img_p21_0.png',
    polaroid2: '/EhubInstitute/assets/images/img_p20_2.png',
    bubble: 'Confidence, body language mastery & accent articulation!',
    cursiveNote: 'May 22 — Every student delivered a 10-minute keynote presentation with flawless poise and vocabulary.',
    tag: '⭐ 100% Distinction'
  },
  {
    id: 'page-4',
    chapter: 'Chapter IV • June 2024',
    title: 'iTTi TEFL Teacher Training',
    mainImg: '/EhubInstitute/assets/images/img_p20_4.png',
    polaroid1: '/EhubInstitute/assets/images/img_p18_4.png',
    polaroid2: '/EhubInstitute/assets/images/img_p18_1.png',
    bubble: 'Graduating international educators with 220 credit hours!',
    cursiveNote: 'June 18 — 220 hours of rigorous pedagogy training completed. Our new cohort is certified to teach worldwide.',
    tag: '🌍 Global Accredited'
  },
  {
    id: 'page-5',
    chapter: 'Chapter V • July 2024',
    title: 'Executive Leadership Forum',
    mainImg: '/EhubInstitute/assets/images/img_p20_2.png',
    polaroid1: '/EhubInstitute/assets/images/img_p20_0.png',
    polaroid2: '/EhubInstitute/assets/images/img_p20_5.png',
    bubble: 'High-stakes corporate communication & executive poise!',
    cursiveNote: 'July 14 — Special corporate workshop focused on executive interview mastery, negotiations, and public speaking.',
    tag: '💼 Executive Forum'
  },
  {
    id: 'page-6',
    chapter: 'Chapter VI • August 2024',
    title: 'Alumni Leadership Summit',
    mainImg: '/EhubInstitute/assets/images/img_p22_0.jpeg',
    polaroid1: '/EhubInstitute/assets/images/img_p10_0.jpeg',
    polaroid2: '/EhubInstitute/assets/images/img_p18_2.png',
    bubble: 'From Oxford to Australia, E-Hubians are shaping the world!',
    cursiveNote: 'August 30 — Celebrating 5,000+ alumni success stories. Join E-Hub today and write your own story of success!',
    tag: '🏆 5000+ Alumni'
  },
  {
    id: 'page-7',
    chapter: 'Wall of Fame • IELTS',
    title: 'Muhammad Ali',
    mainImg: '/EhubInstitute/assets/images/img_p18_2.png',
    polaroid1: '/EhubInstitute/assets/images/img_p18_2.png',
    polaroid2: '/EhubInstitute/assets/images/img_p10_0.jpeg',
    bubble: 'Secured 8.5 Band in first attempt!',
    cursiveNote: 'Peshawar • Oxford Admit. Through E-Hub master classes and intensive speaking practice.',
    tag: '⭐ 8.5 Band'
  },
  {
    id: 'page-8',
    chapter: 'Wall of Fame • PTE',
    title: 'Fatima Zahra',
    mainImg: '/EhubInstitute/assets/images/img_p10_0.jpeg',
    polaroid1: '/EhubInstitute/assets/images/img_p19_0.png',
    polaroid2: '/EhubInstitute/assets/images/img_p21_0.png',
    bubble: 'Transformed English speaking fluency!',
    cursiveNote: 'Peshawar • Australia Visa. Achieved top scores within 6 weeks at E-Hub.',
    tag: '⭐ 88/90'
  },
  {
    id: 'page-9',
    chapter: 'Recognition • British Council',
    title: 'British Council Award',
    mainImg: '/EhubInstitute/assets/images/img_p16_0.png',
    polaroid1: '/EhubInstitute/assets/images/img_p22_0.jpeg',
    polaroid2: '/EhubInstitute/assets/images/img_p18_0.png',
    bubble: 'Excellence Partner for IELTS training!',
    cursiveNote: 'Recognized by the British Council for outstanding pedagogy and student success rates.',
    tag: '🏆 Excellence'
  },
  {
    id: 'page-10',
    chapter: 'Recognition • iTTi-USA',
    title: 'iTTi-USA Accreditation',
    mainImg: '/EhubInstitute/assets/images/img_p17_0.jpeg',
    polaroid1: '/EhubInstitute/assets/images/img_p20_0.png',
    polaroid2: '/EhubInstitute/assets/images/img_p21_0.png',
    bubble: 'Global TEFL Partner in Pakistan!',
    cursiveNote: 'Official partner for delivering internationally recognized TEFL/TESOL certifications.',
    tag: '🎓 Accredited'
  }
];

const Events = () => {
  const [bookState, setBookState] = useState('closed-front'); // 'closed-front', 'open', 'closed-back'
  const [pageIndex, setPageIndex] = useState(0);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const sectionRef = useRef(null);
  const totalPages = journalPages.length;

  const currentData = journalPages[pageIndex];

  const handleOpen = () => setBookState('open');
  const handleCloseFront = () => { setBookState('closed-front'); setPageIndex(0); };
  const handleCloseBack = () => setBookState('closed-back');

  // Auto-open book when user scrolls to it
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAutoOpened) {
          setTimeout(() => {
            setBookState('open');
            setHasAutoOpened(true);
          }, 800); // slight delay after scrolling into view for a better effect
        }
      },
      { threshold: 0.5 }
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

  // Auto-close on the last page after 5 seconds
  useEffect(() => {
    let timeoutId;
    if (pageIndex === totalPages - 1 && bookState === 'open') {
      timeoutId = setTimeout(() => {
        handleCloseBack();
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [pageIndex, bookState, totalPages]);

  const handleNext = () => {
    if (pageIndex === totalPages - 1) {
      handleCloseBack();
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex === 0) {
      handleCloseFront();
    } else {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <section className="events-book-section maroon-bg" id="events" ref={sectionRef}>
      <div className="container">


        <div className="book-stage">
          <div className={`the-3d-book state-${bookState}`}>
            {/* Book Pages (Left and Right Spreads) - Rendered behind covers */}
            <div className="book-pages-container">
               {/* Left Page (Photos) */}
               <div className="book-page page-left">
                  <div className="book-page-content page-fade-anim" key={`left-${pageIndex}`}>
                    <button className="book-nav-btn prev-btn" onClick={handlePrev}>
                       <i className="ph-bold ph-caret-left"></i> Previous
                    </button>
                    <div className="main-photo-frame">
                      <img src={currentData.mainImg} alt={currentData.title} className="slide-photo" />
                      <span className="photo-badge">{currentData.tag}</span>
                    </div>
                    <div className="speech-bubble-box">
                      "{currentData.bubble}"
                    </div>
                  </div>
               </div>

               {/* Center Spine Crease */}
               <div className="page-spine-crease"></div>

               {/* Right Page (Details) */}
               <div className="book-page page-right">
                  <div className="book-page-content page-fade-anim" key={`right-${pageIndex}`}>
                    <div className="polaroids-container">
                      <div className="polaroid-wrapper p-tilted-1">
                        <img src={currentData.polaroid1} alt="Polaroid 1" />
                      </div>
                      <div className="polaroid-wrapper p-tilted-2">
                        <img src={currentData.polaroid2} alt="Polaroid 2" />
                      </div>
                    </div>
                    <div className="journal-text-content">
                      <span className="chapter-label">{currentData.chapter}</span>
                      <h3 className="slide-heading">{currentData.title}</h3>
                      <p className="cursive-handwriting">
                        "{currentData.cursiveNote}"
                      </p>
                    </div>
                    <button className="book-nav-btn next-btn" onClick={handleNext}>
                       {pageIndex === totalPages - 1 ? "Close Book" : "Next Page"} <i className="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
               </div>
            </div>

            {/* Front Cover */}
            <div className="book-cover book-front" onClick={bookState === 'closed-front' ? handleOpen : undefined}>
              <div className="cover-inner-content">
                <div className="cover-border">
                  <h1 className="cover-title">Event Photos</h1>
                  <p className="cover-subtitle">E-Hub Institute</p>
                </div>
              </div>
            </div>

            {/* Back Cover */}
            <div className="book-cover book-back" onClick={bookState === 'closed-back' ? () => {setBookState('open'); setPageIndex(totalPages-1);} : undefined}>
              <div className="cover-inner-content">
                <div className="cover-border">
                  <h1 className="cover-title">The End</h1>
                  <p className="cover-subtitle">Thank you for exploring!</p>
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
