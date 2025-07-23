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

  // Data kantor cabang
  const officeLocations = [
    {
      id: 1,
      name: "Jakarta Office",
      address: "Ruko Tiara Buncit Blok D12, Jl. Kemang Utara IX, Pancoran, Jakarta Selatan 12760",
      phone: "+62 21 2271 7665",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126914.14085573106!2d106.7432838524836!3d-6.2549166825052795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1750233911648!5m2!1sid!2sid",
      googleMapsLink: "https://maps.google.com/?q=Ruko+Tiara+Buncit+Blok+D12+Jl+Kemang+Utara+IX+Pancoran+Jakarta+Selatan"
    },
    {
      id: 2,
      name: "Surabaya Office",
      address: "Jl. HR Muhammad No. 123, Gubeng, Surabaya, Jawa Timur 60281",
      phone: "+62 31 5678 9012",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4!2d112.7520883!3d-7.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid",
      googleMapsLink: "https://maps.google.com/?q=Jl+HR+Muhammad+No+123+Gubeng+Surabaya+Jawa+Timur"
    },
    {
      id: 3,
      name: "Medan Office", 
      address: "Jl. Gatot Subroto No. 456, Medan Baru, Medan, Sumatera Utara 20154",
      phone: "+62 61 3456 7890",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1!2d98.6666667!3d3.5833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1600000000001!5m2!1sid!2sid",
      googleMapsLink: "https://maps.google.com/?q=Jl+Gatot+Subroto+No+456+Medan+Baru+Medan+Sumatera+Utara"
    },
    {
      id: 4,
      name: "Bali Office",
      address: "Jl. Sunset Road No. 789, Seminyak, Badung, Bali 80361",
      phone: "+62 361 234 5678",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.1604!3d-8.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1600000000002!5m2!1sid!2sid",
      googleMapsLink: "https://maps.google.com/?q=Jl+Sunset+Road+No+789+Seminyak+Badung+Bali"
    }
  ];

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

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleAddressClick = (googleMapsLink) => {
    window.open(googleMapsLink, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section dengan layout untuk 4 kantor */}
      <div className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          {/* Baris pertama: 2 kartu office locations */}
          <div className="contact-cards-row-one">
            {officeLocations.slice(0, 2).map((office, index) => (
              <div key={office.id} className="contact-office-card contact-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="contact-card-icon-wrapper">
                  <MapPin className="contact-card-icon" />
                </div>
                <h3 className="contact-card-title">{office.name}</h3>
                <p 
                  className="contact-card-text contact-address-link" 
                  onClick={() => handleAddressClick(office.googleMapsLink)}
                  title="Click to open in Google Maps"
                >
                  {office.address}
                </p>
                <p 
                  className="contact-card-text contact-phone-link contact-mb-0"
                  onClick={() => handlePhoneClick(office.phone)}
                  title="Click to call"
                >
                  📞 {office.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Baris kedua: 2 kartu office locations lainnya */}
          <div className="contact-cards-row-two">
            {officeLocations.slice(2, 4).map((office, index) => (
              <div key={office.id} className="contact-office-card contact-slide-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                <div className="contact-card-icon-wrapper">
                  <MapPin className="contact-card-icon" />
                </div>
                <h3 className="contact-card-title">{office.name}</h3>
                <p 
                  className="contact-card-text contact-address-link" 
                  onClick={() => handleAddressClick(office.googleMapsLink)}
                  title="Click to open in Google Maps"
                >
                  {office.address}
                </p>
                <p 
                  className="contact-card-text contact-phone-link contact-mb-0"
                  onClick={() => handlePhoneClick(office.phone)}
                  title="Click to call"
                >
                  📞 {office.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Baris ketiga: Email dan Support Center */}
          <div className="contact-cards-row-three">
            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="contact-card-icon-wrapper">
                <Mail className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Email Address</h3>
              <p 
                className="contact-card-text contact-email-link"
                onClick={() => window.open('mailto:hi@indobizcorner.com')}
                title="Click to send email"
              >
                📧 hi@indobizcorner.com
              </p>
            </div>

            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="contact-card-icon-wrapper">
                <MessageCircle className="contact-card-icon" />
              </div>
              <h3 className="contact-card-title">Support Center</h3>
              <p className="contact-card-text">24/7 Customer Support</p>
              <p className="contact-card-text contact-mb-0">Live Chat Available</p>
            </div>
          </div>

          {/* Baris keempat: Interactive Map */}
          <div className="contact-map-section">
            <div className="contact-map-card contact-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="contact-map-container">
                <iframe
                  className="contact-map-image"
                  src={officeLocations[0].mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="contact-map-location-badge">
                  <span>🏢 Main Office - Jakarta</span>
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
    </div>
  );
};

export default ContactPage;