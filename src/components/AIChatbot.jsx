import React, { useState, useRef, useEffect } from 'react';

// 1:1 Match of User's Cute AI Robot Head Mascot in Royal Maroon (#660033) & Gold (#D4AF37)
const CuteAIRobotIcon = ({ size = 32, maroonColor = '#660033', goldColor = '#D4AF37' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="maroonRobotGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#850043" />
        <stop offset="100%" stopColor="#520029" />
      </linearGradient>
      <linearGradient id="goldStarGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5D77F" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>

    {/* Sparkle Stars */}
    <path d="M80 18 C80 23, 82 25, 87 25 C82 25, 80 27, 80 32 C80 27, 78 25, 73 25 C78 25, 80 23, 80 18 Z" fill="url(#goldStarGrad)" />
    <path d="M71 10 C71 13, 72 14, 75 14 C72 14, 71 15, 71 18 C71 15, 70 14, 67 14 C70 14, 71 13, 71 10 Z" fill="url(#goldStarGrad)" />

    {/* Antenna */}
    <rect x="47.5" y="16" width="5" height="15" rx="2.5" fill="url(#maroonRobotGrad)" />
    <circle cx="50" cy="14" r="6" fill="url(#goldStarGrad)" stroke="#520029" strokeWidth="1.5" />

    {/* Side Ears */}
    <circle cx="21" cy="55" r="9" fill="url(#maroonRobotGrad)" />
    <circle cx="79" cy="55" r="9" fill="url(#maroonRobotGrad)" />

    {/* Helmet */}
    <path d="M 23 55 C 23 33, 77 33, 77 55 C 77 74, 66 82, 50 82 C 34 82, 23 74, 23 55 Z" fill="url(#maroonRobotGrad)" />

    {/* White Face Cutout */}
    <path d="M 50 42 L 70 54 C 70 68, 62 74, 50 74 C 38 74, 30 68, 30 54 Z" fill="#FFFFFF" />

    {/* Eyes */}
    <ellipse cx="42" cy="59" rx="3.5" ry="4.5" fill="#520029" />
    <ellipse cx="58" cy="59" rx="3.5" ry="4.5" fill="#520029" />
    <circle cx="43" cy="57.5" r="1.2" fill="#FFFFFF" />
    <circle cx="59" cy="57.5" r="1.2" fill="#FFFFFF" />
  </svg>
);

const initialMessages = [
  {
    sender: 'ai',
    text: 'Hello! I am E-Hub AI ✨ How can I help you excel in your English journey today?',
    time: 'Just now'
  }
];

const quickChips = [
  '📚 What courses are offered?',
  '⭐ How to get IELTS Band 8.5?',
  '🎓 Tell me about iTTi TEFL',
  '📍 Where is E-Hub located?'
];

const aiKnowledgeBase = {
  courses: "E-Hub offers specialized courses in Spoken English Mastery, IELTS Band 8.5 Intensive Preparation, iTTi TEFL International Teacher Certification, Business Communication, and Public Speaking!",
  ielts: "Our IELTS Band 8.5 Masterclass focuses on real British Council exam strategies, mock writing evaluation, accent refinement, and 1-on-1 interview practice!",
  tefl: "The iTTi TEFL program provides 220 hours of internationally accredited teacher training, equipping you with global pedagogy skills for teaching English worldwide!",
  location: "E-Hub is located at Campus Building 18 & 20, Main University Road. You can also contact us directly at info@ehub.edu.pk or +92 300 1234567!",
  default: "Thank you for asking! E-Hub is Pakistan's leading institute for English language excellence, IELTS, and international TEFL certification. Would you like to schedule a free demo session?"
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const userText = textToSend || inputValue;
    if (!userText.trim()) return;

    const newMsg = {
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = aiKnowledgeBase.default;
      const lower = userText.toLowerCase();

      if (lower.includes('course') || lower.includes('program') || lower.includes('offer')) {
        reply = aiKnowledgeBase.courses;
      } else if (lower.includes('ielts') || lower.includes('band') || lower.includes('exam')) {
        reply = aiKnowledgeBase.ielts;
      } else if (lower.includes('tefl') || lower.includes('teacher') || lower.includes('itti')) {
        reply = aiKnowledgeBase.tefl;
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('contact')) {
        reply = aiKnowledgeBase.location;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="ai-chatbot-wrapper">
      {/* Compact Floating Trigger Button with "E-Hub AI" Label Pill */}
      <button
        className={`ai-mascot-circle-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle E-Hub AI Chatbot"
      >
        {isOpen ? (
          <i className="ph-bold ph-x"></i>
        ) : (
          <>
            <div className="trigger-pulse"></div>
            <CuteAIRobotIcon size={32} />
            <span className="trigger-label-pill">E-Hub AI</span>
          </>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="ai-chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-info">
              <div className="ai-mascot-avatar">
                <CuteAIRobotIcon size={28} />
                <span className="online-dot"></span>
              </div>
              <div>
                <h4 className="ai-name">E-Hub AI</h4>
                <span className="ai-status">Online • Instant Assistance</span>
              </div>
            </div>
            <button className="btn-close-chat" onClick={() => setIsOpen(false)}>
              <i className="ph-bold ph-x"></i>
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-row ${msg.sender}`}>
                {msg.sender === 'ai' && (
                  <div className="bubble-mascot">
                    <CuteAIRobotIcon size={20} />
                  </div>
                )}
                <div className="bubble-content">
                  <div className="bubble-text">{msg.text}</div>
                  <span className="bubble-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-bubble-row ai">
                <div className="bubble-mascot">
                  <CuteAIRobotIcon size={20} />
                </div>
                <div className="bubble-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Option Chips */}
          <div className="chatbot-quick-chips">
            {quickChips.map((chip, idx) => (
              <button key={idx} className="chip-btn" onClick={() => handleSend(chip)}>
                {chip}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="chatbot-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask E-Hub AI..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="btn-send-chat" onClick={() => handleSend()}>
              <i className="ph-bold ph-paper-plane-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
