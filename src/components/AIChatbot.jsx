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
    text: "Assalam-o-Alaikum! Welcome to E-Hub Institute Peshawar — 'Success awaits you!' I am Ehub AI Verse, your personal AI assistant. How can I help you today with our IELTS, English proficiency, TEFL/TESOL, or admissions?",
    time: 'Just now'
  }
];

const quickChips = [
  '📚 Courses Offered',
  '⏱️ Quick IELTS (40 Days)',
  '⏰ Timings & Batches',
  '📍 Address & Location',
  '📞 Contact Number',
  '🎓 TEFL/TESOL (iTTi-USA)'
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const getTimeString = () =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Remove "Built with Spline" watermark logo badge from Spline Viewer Shadow Root
  useEffect(() => {
    const hideSplineLogo = () => {
      document.querySelectorAll('spline-viewer').forEach((viewer) => {
        if (viewer.shadowRoot) {
          const logoElements = viewer.shadowRoot.querySelectorAll('#logo, a, [id*="logo"], [class*="logo"]');
          logoElements.forEach((el) => {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
            el.style.pointerEvents = 'none';
            el.style.width = '0px';
            el.style.height = '0px';
            el.style.transform = 'scale(0)';
          });
        }
      });
    };

    hideSplineLogo();
    const interval = setInterval(hideSplineLogo, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async (textToSend) => {
    const userText = typeof textToSend === 'string' ? textToSend : inputValue;
    if (!userText.trim() || isTyping) return;

    const userMsg = {
      sender: 'user',
      text: userText,
      time: getTimeString()
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    if (typeof textToSend !== 'string') setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: nextHistory.slice(-6).map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      });

      const data = await res.json();
      const reply = data.reply || 'Maazrat, jawab abhi dastyab nahi hai.';

      setMessages(prev => [
        ...prev,
        { sender: 'ai', text: reply, time: getTimeString() }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: 'Network issue. Please dobara koshish karen ya 03320565525 par rabta karen.',
          time: getTimeString()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ai-chatbot-wrapper">
      {/* Floating 3D Spline Mascot Trigger */}
      <div
        className={`ai-mascot-circle-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle E-Hub AI Chatbot"
        role="button"
        tabIndex={0}
      >
        {isOpen ? (
          <i className="ph-bold ph-x"></i>
        ) : (
          <div className="spline-icon-wrapper" onClick={() => setIsOpen(true)}>
            <div className="spline-click-overlay"></div>
            <spline-viewer url="https://prod.spline.design/vRdVA40gtbx99rEJ/scene.splinecode"></spline-viewer>
          </div>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="ai-chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-info">
              <div className="ai-mascot-avatar">
                <CuteAIRobotIcon size={34} />
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

          {/* Quick Chips */}
          <div className="chatbot-quick-chips">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                className="chip-btn"
                onClick={() => handleSend(chip)}
                disabled={isTyping}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-row ${msg.sender}`}>
                {msg.sender === 'ai' && (
                  <div className="bubble-mascot">
                    <CuteAIRobotIcon size={24} />
                  </div>
                )}
                <div className="bubble-content">
                  <div className="bubble-text">
                    {msg.text.split('\n').map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>
                  <span className="bubble-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-bubble-row ai">
                <div className="bubble-mascot">
                  <CuteAIRobotIcon size={24} />
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

          {/* Input Footer */}
          <div className="chatbot-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask E-Hub AI..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSend()}
              disabled={isTyping}
              maxLength={500}
            />
            <button
              className="btn-send-chat"
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
            >
              <i className="ph-bold ph-paper-plane-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
