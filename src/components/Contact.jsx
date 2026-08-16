import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'English for Beginners',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `Hello E-Hub Institute!%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AInterested Program: ${encodeURIComponent(formData.program)}%0AMessage: ${encodeURIComponent(formData.message || 'I would like to get counseling and admission details.')}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/923320565525?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Visit Our Campus or <span className="text-accent">Send an Inquiry</span>
          </h2>
          <p className="section-desc center-desc">
            Ready to master English, crack IELTS, or get certified? Connect with our expert advisors today for free academic counseling.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Campus Info Cards */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h3>E-Hub Institute Peshawar</h3>
              <p>Official Training Center & British Council Partner</p>
            </div>

            <div className="contact-cards-stack">
              {/* Address */}
              <div className="contact-quick-card">
                <div className="contact-card-icon">
                  <i className="ph-fill ph-map-pin"></i>
                </div>
                <div className="contact-card-content">
                  <strong>Campus Address</strong>
                  <span>Tehkal Bala BRT Stop, University Road, Peshawar, KP, Pakistan</span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="contact-quick-card">
                <div className="contact-card-icon">
                  <i className="ph-fill ph-phone-call"></i>
                </div>
                <div className="contact-card-content">
                  <strong>Direct Helpline / WhatsApp</strong>
                  <span>0332 0565525</span>
                </div>
              </div>

              {/* Timings */}
              <div className="contact-quick-card">
                <div className="contact-card-icon">
                  <i className="ph-fill ph-clock"></i>
                </div>
                <div className="contact-card-content">
                  <strong>Institute Timings</strong>
                  <span>Monday – Saturday: 3:00 PM to 7:30 PM</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-quick-card">
                <div className="contact-card-icon">
                  <i className="ph-fill ph-envelope-simple"></i>
                </div>
                <div className="contact-card-content">
                  <strong>Email Inquiries</strong>
                  <span>info@ehubinstitute.edu.pk</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Admission & Inquiry Form */}
          <div className="contact-form-panel">
            <div className="form-panel-header">
              <h3>Free Academic Counseling</h3>
              <p>Fill out this form and our academic team will contact you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="form-success-box">
                <i className="ph-fill ph-check-circle"></i>
                <h4>Inquiry Sent Successfully!</h4>
                <p>Thank you, <strong>{formData.name}</strong>. We have opened WhatsApp with your details. Our representative will assist you shortly.</p>
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-inquiry-form" onSubmit={handleSubmit}>
                <div className="form-input-row">
                  <div className="form-input-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <div className="input-with-icon">
                      <i className="ph ph-user"></i>
                      <input 
                        type="text" 
                        id="contact-name"
                        name="name" 
                        placeholder="e.g. Ahmad Khan" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="custom-form-control"
                      />
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="contact-phone">WhatsApp / Phone *</label>
                    <div className="input-with-icon">
                      <i className="ph ph-phone"></i>
                      <input 
                        type="tel" 
                        id="contact-phone"
                        name="phone" 
                        placeholder="03XX XXXXXXX" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="custom-form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-program">Select Program / Course *</label>
                  <div className="input-with-icon">
                    <i className="ph ph-graduation-cap"></i>
                    <select 
                      id="contact-program"
                      name="program" 
                      required 
                      value={formData.program}
                      onChange={handleChange}
                      className="custom-form-control"
                    >
                      <option value="English for Beginners (Book 1)">English for Beginners (Basic Course)</option>
                      <option value="English for Intermediate (Book 2)">English for Intermediate (Level 2)</option>
                      <option value="English for Communication Skill (Book 3)">English for Communication Skills</option>
                      <option value="IELTS for 45 Days Complete Prep">IELTS 8+ Band Preparation (45 Days)</option>
                      <option value="TEFL / TESOL Teacher Certification (iTTi-USA)">TEFL / TESOL Certification (iTTi-USA)</option>
                      <option value="Corporate Soft Skills & Public Speaking">Soft Skills & Public Speaking</option>
                      <option value="Kids & Teens English Program">Kids & Teens English Mastery</option>
                    </select>
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-message">Additional Notes / Preferred Timing (Optional)</label>
                  <div className="input-with-icon align-textarea">
                    <i className="ph ph-chat-centered-text"></i>
                    <textarea 
                      id="contact-message"
                      name="message" 
                      rows="3"
                      placeholder="Tell us about your learning goals or question..."
                      value={formData.message}
                      onChange={handleChange}
                      className="custom-form-control"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-submit-inquiry">
                  <span>Submit Inquiry & Connect</span>
                  <i className="ph ph-arrow-right"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
