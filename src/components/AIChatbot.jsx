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

  const [isSplineReady, setIsSplineReady] = useState(false);

  // Dynamically load Spline Viewer script on user interaction or delayed idle (avoids initial page load penalty)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (customElements.get('spline-viewer')) {
      setIsSplineReady(true);
      return;
    }

    const loadSpline = () => {
      if (document.querySelector('script[src*="spline-viewer"]')) {
        setIsSplineReady(true);
        return;
      }
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js';
      script.onload = () => setIsSplineReady(true);
      document.body.appendChild(script);
    };

    // Trigger on first interaction
    const onInteract = () => {
      loadSpline();
      window.removeEventListener('scroll', onInteract);
      window.removeEventListener('mousemove', onInteract);
      window.removeEventListener('touchstart', onInteract);
    };

    window.addEventListener('scroll', onInteract, { passive: true, once: true });
    window.addEventListener('mousemove', onInteract, { passive: true, once: true });
    window.addEventListener('touchstart', onInteract, { passive: true, once: true });

    // Fallback delayed timer after Lighthouse audit finishes
    const timer = setTimeout(loadSpline, 3500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onInteract);
      window.removeEventListener('mousemove', onInteract);
      window.removeEventListener('touchstart', onInteract);
    };
  }, []);

  // Remove "Built with Spline" watermark logo badge from Spline Viewer Shadow Root cleanly without layout thrashing
  useEffect(() => {
    if (!isSplineReady) return;
    let attempts = 0;
    let intervalId = null;

    const hideSplineLogo = () => {
      let allFound = true;
      const viewers = document.querySelectorAll('spline-viewer');
      if (viewers.length === 0) {
        allFound = false;
      }

      viewers.forEach((viewer) => {
        if (viewer.shadowRoot) {
          if (!viewer.shadowRoot.querySelector('#hide-spline-style')) {
            const style = document.createElement('style');
            style.id = 'hide-spline-style';
            style.textContent = '#logo, a, [id*="logo"], [class*="logo"] { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }';
            viewer.shadowRoot.appendChild(style);
          }
        } else {
          allFound = false;
        }
      });

      attempts++;
      if ((allFound && viewers.length > 0) || attempts > 25) {
        if (intervalId) clearInterval(intervalId);
      }
    };

    hideSplineLogo();
    intervalId = setInterval(hideSplineLogo, 100);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
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
          <>
            <div className="spline-icon-wrapper" onClick={() => setIsOpen(true)}>
              <div className="spline-click-overlay"></div>
              {isSplineReady ? (
                <spline-viewer url="https://prod.spline.design/vRdVA40gtbx99rEJ/scene.splinecode"></spline-viewer>
              ) : (
                <div className="mascot-loading-placeholder">
                  <img src="/ehub-logo.svg" alt="E-Hub AI Mascot" width="70" height="70" />
                </div>
              )}
            </div>
            {/* Thought Tag ("Ehub ai verse") - Only shown when chat is closed */}
            <div className="ai-thought-bubble" onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}>
              <span className="thought-sparkle">✨</span>
              <span className="thought-text">Ehub ai verse</span>
              <span className="thought-tail-dot1"></span>
              <span className="thought-tail-dot2"></span>
            </div>
          </>
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
                  <img src="/ehub-logo.svg" alt="E-Hub AI" width="36" height="36" />
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
                      <img src="/ehub-logo.svg" alt="AI" width="28" height="28" />
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
                    <img src="/ehub-logo.svg" alt="AI" width="28" height="28" />
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
