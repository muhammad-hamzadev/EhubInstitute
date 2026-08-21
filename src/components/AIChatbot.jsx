import React, { useState, useRef, useEffect } from 'react';

const initialMessages = [
  {
    sender: 'ai',
    text: "Assalam-o-Alaikum! Welcome to E-Hub Institute Peshawar — 'Success awaits you!' I am Ehub AI Verse, your personal AI assistant. How can I help you today with our IELTS, English proficiency, TEFL/TESOL, or admissions?",
    time: 'Just now'
  }
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
                <div className="spline-avatar-wrapper">
                  <spline-viewer url="https://prod.spline.design/vRdVA40gtbx99rEJ/scene.splinecode"></spline-viewer>
                </div>
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
                    <div className="spline-bubble-wrapper">
                      <spline-viewer url="https://prod.spline.design/vRdVA40gtbx99rEJ/scene.splinecode"></spline-viewer>
                    </div>
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
                  <div className="spline-bubble-wrapper">
                    <spline-viewer url="https://prod.spline.design/vRdVA40gtbx99rEJ/scene.splinecode"></spline-viewer>
                  </div>
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
