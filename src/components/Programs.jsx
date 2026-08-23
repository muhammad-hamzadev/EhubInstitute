import React, { useState, useEffect } from 'react';

const Programs = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#internship-program') {
        setOpenCard(3);
        setTimeout(() => {
          const el = document.getElementById('internship-program');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const programsData = [
    {
      icon: "ph-chat-teardrop-text",
      title: "English Language Program",
      subtitle: "Four-stage structured roadmap covering Basic, Intermediate, Communication, and IELTS.",
      points: [
        <><strong>Basic:</strong> Fundamental grammar, vocabulary expansion, sentence building & spoken confidence.</>,
        <><strong>Intermediate:</strong> Grammar refinement, active listening comprehension & fluency enhancement.</>,
        <><strong>Communication:</strong> Public speaking, email writing, presentation skills & accent refinement.</>,
        <><strong>IELTS:</strong> Complete module preparation (Listening, Reading, Writing, Speaking) & mock tests.</>
      ],
      actionText: "Enroll in English Course"
    },
    {
      icon: "ph-exam",
      title: "IELTS & PTE Exam Preparation",
      subtitle: "Targeted prep to achieve top band scores with official British Council partner methodology.",
      points: [
        "Complete coverage of Academic & General Training modules (Listening, Reading, Writing, Speaking).",
        "Real test simulation, timed mock tests, and personalized band evaluation.",
        "One-on-one speaking interview practice with senior certified trainers.",
        "Exclusive access to updated exam materials, tips, and high-scoring essay templates.",
        "Proven track record of student scores exceeding 7.5 and 8.0 bands."
      ],
      actionText: "Enroll in IELTS / PTE"
    },
    {
      icon: "ph-globe-hemisphere-west",
      title: "TEFL / TESOL Teacher Certification",
      subtitle: "International 220 credit hours teaching credential in exclusive partnership with iTTi-USA.",
      points: [
        "Globally recognized 220 Credit Hours TEFL/TESOL Certificate valid worldwide.",
        "Joint certification directly affiliated with iTTi-USA (International TEFL Training Institute).",
        "Practical teaching practice, lesson plan design, and classroom management techniques.",
        "Guidance for securing online teaching jobs and international teaching visas.",
        "Designed for teachers, graduates, and individuals seeking abroad teaching careers."
      ],
      actionText: "Enroll in TEFL/TESOL"
    },
    {
      icon: "ph-briefcase",
      title: "Internship Program",
      subtitle: "Hands-on practical experience, real-world corporate training, and career mentorship.",
      points: [
        "Practical experience in educational management, communication & training coordination.",
        "Direct one-on-one mentorship from senior trainers and CEO Maroof Mehmood.",
        "Real-world project execution, professional networking, and leadership grooming.",
        "Official E-Hub Internship Certificate with a verified letter of recommendation."
      ],
      actionText: "Apply for Internship"
    },
    {
      icon: "ph-smiley",
      title: "Youth & Kids Language Programs",
      subtitle: "Fun, interactive, and engaging learning modules crafted specifically for young minds.",
      points: [
        "Activity-based learning through storytelling, role-play, and educational games.",
        "Phonics, pronunciation, and early reading & creative writing mastery.",
        "Friendly, supportive environment encouraging fearless self-expression.",
        "Regular progress reports and parent-teacher feedback sessions."
      ],
      actionText: "Enroll Your Child"
    },
    {
      icon: "ph-books",
      title: "Academic Tuition & Support Classes",
      subtitle: "Dedicated subject tutoring and academic guidance across school and college levels.",
      points: [
        "Specialized subject teachers for English, Humanities, and Core subjects.",
        "Exam preparation strategies, past paper practice, and concept clarity.",
        "Small class sizes ensuring individual attention and mentor support.",
        "Continuous assessment and regular mock examinations."
      ],
      actionText: "Enroll in Tuition"
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Premium <span className="text-accent">Courses & Programs</span></h2>
          <p className="section-desc center-desc">Click on any vertical course card below to expand and reveal detailed course points.</p>
        </div>
        
        <div className="accordion-list">
          {programsData.map((program, index) => (
            <div 
              id={index === 3 ? "internship-program" : undefined}
              className={`accordion-card ${openCard === index ? 'active' : ''}`} 
              key={index}
              style={index === 3 ? { scrollMarginTop: '100px' } : undefined}
            >
              <div className="accordion-header" onClick={() => toggleCard(index)}>
                <div className="accordion-header-left">
                  <div className="card-icon"><i className={`ph ${program.icon}`}></i></div>
                  <div>
                    <h3>{program.title}</h3>
                    <p className="accordion-subtitle">{program.subtitle}</p>
                  </div>
                </div>
                <div className="accordion-toggle">
                  <span className="toggle-text">{openCard === index ? 'Hide Details' : 'View Details'}</span>
                  <i className="ph ph-caret-down toggle-icon"></i>
                </div>
              </div>
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <h4>Key Highlights & Points:</h4>
                  <ul className="course-points">
                    {program.points.map((point, i) => (
                      <li key={i}><i className="ph-fill ph-check-circle"></i> {point}</li>
                    ))}
                  </ul>
                  <div className="course-action">
                    <a href="#contact" className="btn btn-primary btn-sm">{program.actionText}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
