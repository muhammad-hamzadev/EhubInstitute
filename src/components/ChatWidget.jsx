import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  RotateCcw, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import './ChatWidget.css';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "Assalam-o-Alaikum! Welcome to E-Hub Institute Peshawar — 'Success awaits you!' I am Ehub AI Verse, your personal AI assistant. How can I help you today with our IELTS, English proficiency, TEFL/TESOL, or admissions?",
  time: 'Just now'
};

const QUICK_PROMPTS = [
  '📚 Courses Offered',
  '⏱️ Quick IELTS (40 Days)',
  '⏰ Timings & Batches',
  '📍 Address & Location',
  '📞 Contact Number',
  '🎓 TEFL/TESOL (iTTi-USA)'
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorBanner, setErrorBanner] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to newest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const getTimeString = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSend = async (customText = null) => {
    const textToSend = typeof customText === 'string' ? customText : input;
    const trimmed = textToSend.trim();
    
    if (!trimmed || trimmed.length > 500 || loading) return;

    setErrorBanner(null);
    const userMsg = {
      role: 'user',
      content: trimmed,
      time: getTimeString()
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          history: nextHistory.slice(-6).map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await res.json();
      const botReply = data.reply || (data.error ? null : 'Maazrat, jawab dastyab nahi hai.');
      
      if (botReply) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: botReply,
            time: getTimeString(),
            source: data.source
          }
        ]);
      } else {
        throw new Error(data.error || 'Server request failed');
      }

    } catch (err) {
      console.error('Chat error:', err);
      setErrorBanner('Network issue or server unavailable. Please try again.');
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Maazrat, abhi jawab nahi de saka. Please dobara koshish karen ya 03320565525 par direct rabta karen.',
          time: getTimeString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorBanner(null);
    setInput('');
  };

  return (
    <div className="chat-widget-wrapper">
      {/* Closed State: Floating Bubble */}
      {!isOpen && (
        <button 
          className="chat-bubble-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open E-Hub AI Assistant Chat"
          id="chat-bubble-launcher"
        >
          <div className="chat-bubble-pulse" />
          <MessageSquare size={26} />
          <div className="chat-bubble-badge" />
          <div className="chat-bubble-tooltip">Ask E-Hub AI Assistant 👋</div>
        </button>
      )}

      {/* Open State: Chat Window */}
      {isOpen && (
        <div className="chat-window" id="chat-window-modal">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar">EH</div>
              <div className="chat-header-titles">
                <span className="chat-header-title">E-Hub Institute Assistant</span>
                <span className="chat-header-status">
                  <span className="status-dot"></span> Online • Peshawar
                </span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="chat-icon-btn" 
                onClick={handleResetChat}
                title="Clear Conversation"
                aria-label="Clear chat"
              >
                <RotateCcw size={15} />
              </button>
              <button 
                className="chat-icon-btn" 
                onClick={() => setIsOpen(false)}
                title="Close Window"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="chat-suggestions">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                className="suggestion-pill"
                onClick={() => handleSend(prompt)}
                disabled={loading}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message List */}
          <div className="chat-messages" id="chat-messages-container">
            {errorBanner && (
              <div className="chat-error-banner">
                <AlertCircle size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: -2 }} />
                {errorBanner}
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-row ${msg.role}`}>
                <div className="chat-message-bubble">
                  {msg.content.split('\n').map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
                <span className="chat-message-time">{msg.time}</span>
              </div>
            ))}

            {loading && (
              <div className="chat-typing-row">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <span className="typing-text">Generating response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input & Footer */}
          <div className="chat-input-area">
            <div className="chat-input-box">
              <input
                ref={inputRef}
                type="text"
                className="chat-input-field"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything..."
                maxLength={500}
                disabled={loading}
                id="chat-user-input"
              />
              <button
                className="chat-send-btn"
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                id="chat-send-button"
              >
                <Send size={16} />
              </button>
            </div>

            <div className="chat-input-footer">
              <a 
                href="https://www.solvia.codes/" 
                target="_blank" 
                rel="noreferrer" 
                className="chat-footer-branding"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Sparkles size={11} color="#d99a4c" /> Developed by Solvia Codes
              </a>
              <span>{input.length}/500</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
