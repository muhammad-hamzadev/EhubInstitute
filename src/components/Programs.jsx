import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const programsData = [
    {
      icon: "ph-chat-teardrop-text",
      title: "English Language Program",
      subtitle: "Comprehensive spoken, written, and neutral accent training for all proficiency levels.",
      points: [
        "Intensive Spoken English practice with accent neutralization.",
        "Practical Grammar, vocabulary expansion, and real-world conversation clubs.",
        "Professional Email Writing, reporting, and formal presentation skills.",
        "Daily confidence-building activities and interactive public speaking sessions.",
        "Flexible timings for students, job seekers, and working professionals."
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
      title: "Professional & Soft Skills Development",
      subtitle: "Elevate your career with vital soft skills, leadership, and interview confidence.",
      points: [
        "Public Speaking, stage presence, and voice modulation training.",
        "Resume building, LinkedIn profile optimization, and job interview preparation.",
        "Critical thinking, problem-solving, and emotional intelligence in business.",
        "Corporate etiquette, negotiation strategies, and leadership development."
      ],
      actionText: "Enroll in Soft Skills"
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
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our Premium <span className="text-accent">Courses & Programs</span></h2>
          <p className="section-desc center-desc">Click on any vertical course card below to expand and reveal detailed course points.</p>
        </div>
        
        <div className="accordion-list">
          {programsData.map((program, index) => (
            <motion.div 
              className={`accordion-card ${openCard === index ? 'active' : ''}`} 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
