import React, { useState } from 'react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Prof. Ahmad Shah",
    role: "Founder & Managing Director",
    badge: "12+ Yrs",
    image: "./assets/images/img_p15_0.jpeg",
    theme: "theme-teal",
    bgGradient: "linear-gradient(180deg, #182830 0%, #14232b 45%, #0c161c 100%)",
    glowColor: "rgba(20, 184, 166, 0.15)",
    desc: "Pioneering modern English language pedagogy and professional skills training in Peshawar with over 12+ years of experience.",
    tags: ["Leadership", "Pedagogy", "Strategy"],
    phone: "923320565525",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "ahmad.shah@ehub.edu.pk"
    }
  },
  {
    id: 2,
    name: "Dr. Zarmina Khan",
    role: "Lead IELTS & PTE Master Trainer",
    badge: "Band 8.5",
    image: "./assets/images/img_p15_1.jpeg",
    theme: "theme-olive",
    bgGradient: "linear-gradient(180deg, #2b3322 0%, #222a1b 45%, #141a0f 100%)",
    glowColor: "rgba(132, 204, 22, 0.15)",
    desc: "Certified British Council master trainer producing 8.5 & 8.0 band achievers through tailored strategy and coaching.",
    tags: ["Top Rated", "IELTS Lead", "PTE Master"],
    phone: "923320565525",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "zarmina.khan@ehub.edu.pk"
    }
  },
  {
    id: 3,
    name: "Sir Hamza Yousaf",
    role: "Head of TEFL / TESOL & Academics",
    badge: "iTTi USA",
    image: "./assets/images/img_p15_3.jpeg",
    theme: "theme-plum",
    bgGradient: "linear-gradient(180deg, #38202f 0%, #2c1825 45%, #1a0c16 100%)",
    glowColor: "rgba(217, 70, 239, 0.15)",
    desc: "International trainer specializing in 220 credit hours iTTi-USA certification for global teacher empowerment.",
    tags: ["TEFL / TESOL", "iTTi Partner", "Pedagogy"],
    phone: "923320565525",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "hamza.yousaf@ehub.edu.pk"
    }
  },
  {
    id: 4,
    name: "Ms. Ayesha Rehman",
    role: "Head of Youth & Corporate Dev",
    badge: "Keynote",
    image: "./assets/images/img_p15_4.jpeg",
    theme: "theme-navy",
    bgGradient: "linear-gradient(180deg, #1d2538 0%, #161d2d 45%, #0d121d 100%)",
    glowColor: "rgba(59, 130, 246, 0.15)",
    desc: "Expert in public speaking, confidence building, presentation mastery, and executive corporate soft skills training.",
    tags: ["Public Speaking", "Confidence", "Youth Dev"],
    phone: "923320565525",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "ayesha.rehman@ehub.edu.pk"
    }
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenReserve = (member) => {
    setSelectedMember(member);
    setIsSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setIsSubmitted(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
    }, 2200);
  };

  return (
    <section className="reveal-team-section" id="team">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Our Faculty & Mentors</span>
          <h2 className="section-title">
            Meet Our <span className="text-accent">Expert Team</span>
          </h2>
          <p className="section-desc center-desc">
            Learn from internationally certified trainers and seasoned educators dedicated to your language mastery and professional growth.
          </p>
        </div>

        {/* Reveal Style Cards Grid (4 in 1 Horizontal Row) */}
        <div className="reveal-team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className={`reveal-card ${member.theme}`}
              style={{
                background: member.bgGradient,
                '--card-glow': member.glowColor
              }}
            >
              {/* Top Image Container with Seamless Fade */}
              <div className="reveal-img-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="reveal-card-photo" 
                />
                <div className="reveal-img-gradient-overlay" />
                
                {/* Subtle Top Floating Social Links */}
                <div className="reveal-floating-socials">
                  <a href={member.socials.linkedin} aria-label="LinkedIn" title="LinkedIn">
                    <i className="ph ph-linkedin-logo"></i>
                  </a>
                  <a href={`mailto:${member.socials.email}`} aria-label="Email" title="Email">
                    <i className="ph ph-envelope-simple"></i>
                  </a>
                </div>
              </div>

              {/* Card Content Body */}
                <div className="reveal-card-body">
                  {/* Title & Badge Row */}
                  <div className="reveal-card-title-row">
                    <h3 className="reveal-card-name">{member.name}</h3>
                    <span className="reveal-card-price-badge">{member.badge}</span>
                  </div>

                  {/* Subtitle / Role */}
                  <div className="reveal-card-role-text">{member.role}</div>

                  {/* Description */}
                  <p className="reveal-card-desc-text">
                    {member.desc}
                  </p>

                  {/* Tags / Badges Row */}
                  <div className="reveal-card-tags-list">
                    {member.tags.map((tag, i) => (
                      <span key={i} className="reveal-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Bottom Action Pill Button */}
                  <button 
                    type="button"
                    className="reveal-reserve-btn"
                    onClick={() => handleOpenReserve(member)}
                  >
                    Reserve
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Reservation / Booking Modal */}
      {selectedMember && (
        <div className="reveal-modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="reveal-modal-box" 
            onClick={(e) => e.stopPropagation()}
            style={{ background: selectedMember.bgGradient }}
          >
            <button 
              className="reveal-modal-close" 
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <i className="ph ph-x"></i>
            </button>

            {!isSubmitted ? (
              <>
                <div className="reveal-modal-header">
                  <div className="reveal-modal-avatar">
                    <img src={selectedMember.image} alt={selectedMember.name} />
                  </div>
                  <div>
                    <span className="reveal-modal-badge">{selectedMember.badge}</span>
                    <h3 className="reveal-modal-title">{selectedMember.name}</h3>
                    <p className="reveal-modal-role">{selectedMember.role}</p>
                  </div>
                </div>

                <form className="reveal-modal-form" onSubmit={handleBookingSubmit}>
                  <p className="reveal-modal-prompt">
                    Book an exclusive 1-on-1 counseling or assessment session with <strong>{selectedMember.name}</strong>.
                  </p>

                  <div className="reveal-form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Daniyal Khan" 
                      className="reveal-form-input" 
                    />
                  </div>

                  <div className="reveal-form-group">
                    <label>WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 0332 1234567" 
                      className="reveal-form-input" 
                    />
                  </div>

                  <div className="reveal-form-group">
                    <label>Preferred Program</label>
                    <select className="reveal-form-input" required defaultValue="ielts">
                      <option value="ielts">IELTS / PTE Academic</option>
                      <option value="spoken">English Fluency & Pedagogy</option>
                      <option value="tefl">TEFL / TESOL Certification</option>
                      <option value="soft-skills">Public Speaking & Soft Skills</option>
                    </select>
                  </div>

                  <div className="reveal-modal-actions">
                    <button type="submit" className="reveal-modal-submit-btn">
                      Confirm Reservation
                    </button>
                    <a 
                      href={`https://wa.me/${selectedMember.phone}?text=Hello!%20I%20would%20like%20to%20reserve%20a%20session%20with%20${encodeURIComponent(selectedMember.name)}.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reveal-modal-wa-btn"
                    >
                      <i className="ph ph-whatsapp-logo"></i> Instant WhatsApp
                    </a>
                  </div>
                </form>
              </>
            ) : (
              <div className="reveal-modal-success">
                <div className="reveal-success-icon">
                  <i className="ph ph-check-circle"></i>
                </div>
                <h3>Reservation Confirmed!</h3>
                <p>
                  We have received your session request with <strong>{selectedMember.name}</strong>. Our team will contact you shortly to finalize timings.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
