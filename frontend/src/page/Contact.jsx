import React, { useState, useEffect, useRef } from 'react';
import { apiService } from '../services/api'; // sesuaikan path jika berbeda

import { Phone, MapPin, MessageCircle, Mail, Send, X, Minimize2, User, Clock } from 'lucide-react';
import '../styles/Contact.css'
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      text: "Hello! Welcome to our support chat. How can I help you today?", 
      sender: "support", 
      timestamp: new Date(),
      avatar: "👨‍💼"
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.message) {
      try {
        await apiService.submitContactMessage(formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('Submit error:', err);
        alert('Something went wrong. Please try again later.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };
  

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const getAutoResponse = (userMessage) => {
    const responses = [
      "Thank you for your message! Let me help you with that.",
      "I understand your concern. Our team will assist you shortly.",
      "That's a great question! Let me check that for you.",
      "I appreciate you reaching out. How else can I help?",
      "Thank you for contacting us. Is there anything specific you'd like to know?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleChatSubmit = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
        avatar: "👤"
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Simulate typing indicator
      simulateTyping();
      
      // Simulate support response
      setTimeout(() => {
        const supportMessage = {
          id: chatMessages.length + 2,
          text: getAutoResponse(newMessage),
          sender: "support",
          timestamp: new Date(),
          avatar: "👨‍💼"
        };
        setChatMessages(prev => [...prev, supportMessage]);
      }, 2500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section dengan layout persis seperti gambar */}
      <div className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          {/* Baris pertama: 3 kartu horizontal */}
          <div className="contact-cards-row-one">
            <div className="contact-info-card contact-slide-up">
              <div className="contact-card-icon-wrapper">
                <Phone className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Call</h3>
              <p className="contact-card-text">+62 21 2271 7665</p>
              <p className="contact-card-text contact-mb-0">+62 812-9250-1293</p>
            </div>

            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="contact-card-icon-wrapper">
                <MapPin className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Our Office Locations</h3>
              <p className="contact-card-text contact-mb-0">Ruko Tiara Buncit Blok D12
Jl. Kemang Utara IX, Pancoran
Jakarta Selatan 12760
</p>
            </div>

            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="contact-card-icon-wrapper">
                <MessageCircle className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Support Center</h3>
              <p className="contact-card-text">hi@indobizcorner.com</p>
              {/* <p className="contact-card-text contact-mb-0">(308) 555-0121</p> */}
            </div>
          </div>

          {/* Baris kedua: Email dan Map side by side */}
          <div className="contact-cards-row-two">
            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="contact-card-icon-wrapper">
                <Mail className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Email Address</h3>
              <p className="contact-card-text">hi@indobizcorner.com</p>
              {/* <p className="contact-card-text contact-mb-0">georgia.young@example.com</p> */}
            </div>

            <div className="contact-map-card contact-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="contact-map-container">
              <iframe
  className="contact-map-image"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126914.14085573106!2d106.7432838524836!3d-6.2549166825052795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1750233911648!5m2!1sid!2sid"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


                <div className="contact-map-location-badge">
                <span>🏢 Ruko Tiara Buncit</span>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section - Layout sesuai gambar */}
      <div className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <div className="contact-form-text">
              <h2 className="contact-form-title">Get Started on Your Visa Journey</h2>
              <p className="contact-form-description">
              Have questions or need help about visa? Send us your details, and our team will handle the rest.
              </p>
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="contact-form-textarea"
                  ></textarea>
                </div>
                <div className="contact-form-submit-wrapper">
                  <button onClick={handleSubmit} className="contact-form-submit-btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="contact-chat-toggle contact-scale-in"
        >
          <MessageCircle size={24} />
          <div className="contact-chat-notification">3</div>
        </button>
      )}

      {chatOpen && (
        <div className={`contact-chat-container contact-fade-in ${chatMinimized ? 'contact-chat-minimized' : ''}`}>
          <div className="contact-chat-header">
            <div className="contact-chat-header-info">
              <div className="contact-chat-avatar">👨‍💼</div>
              <div className="contact-chat-header-text">
                <div className="contact-chat-agent-name">Support Agent</div>
                <div className="contact-chat-status">
                  <div className={`contact-chat-status-dot ${onlineStatus ? 'contact-chat-online' : 'contact-chat-offline'}`}></div>
                  <span className="contact-chat-status-text">
                    {onlineStatus ? 'Online • Typically replies in minutes' : 'Offline • We\'ll get back to you'}
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-chat-header-controls">
              <button
                onClick={() => setChatMinimized(!chatMinimized)}
                className="contact-chat-control-btn"
                title="Minimize"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => {
                  setChatOpen(false);
                  setChatMinimized(false);
                }}
                className="contact-chat-control-btn"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!chatMinimized && (
            <>
              <div className="contact-chat-messages">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`contact-chat-message contact-chat-message-${message.sender}`}>
                    <div className="contact-chat-message-avatar">{message.avatar}</div>
                    <div className="contact-chat-message-content">
                      <div className="contact-chat-message-bubble">
                        {message.text}
                      </div>
                      <div className="contact-chat-message-time">
                        <Clock size={12} style={{ marginRight: '4px' }} />
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="contact-chat-message contact-chat-message-support">
                    <div className="contact-chat-message-avatar">👨‍💼</div>
                    <div className="contact-chat-message-content">
                      <div className="contact-chat-typing-indicator">
                        <div className="contact-chat-typing-dot"></div>
                        <div className="contact-chat-typing-dot"></div>
                        <div className="contact-chat-typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="contact-chat-input-area">
                <div className="contact-chat-input-wrapper">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    className="contact-chat-input"
                    rows="1"
                    style={{ 
                      height: 'auto',
                      minHeight: '40px',
                      maxHeight: '100px'
                    }}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                  />
                  <button
                    onClick={handleChatSubmit}
                    disabled={!newMessage.trim()}
                    className="contact-chat-send-btn"
                    title="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="contact-chat-footer">
                  <span className="contact-chat-footer-text">
                    Press Enter to send • Shift + Enter for new line
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )} */}
    </div>
  );
};

export default ContactPage;