import React, { useState } from 'react';
import '../CSS/contact.css';
import { useToast } from './ToastProvider';
import ConfirmationModal from './ConfirmationModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { showToast } = useToast();
  const email = import.meta.env.VITE_EMAIL

  const handleEmailClick = () => {
    showToast('Opening email client...', 'info', 3000);
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTimeout(() => {
          showToast('Email copied to clipboard!', 'success', 4000);
        }, 500);
      })
      .catch(() => {
        showToast('Could not copy email to clipboard', 'warning', 3000);
      });

    window.location.href =
      `mailto:${email}?subject=Contact%20Us&body=Hello,%20please%20fill%20in%20your%20message%20here.`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push('Name is required');
    } else if (formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.message.trim()) {
      errors.push('Message is required');
    } else if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();
    if (errors.length > 0) {
      showToast(errors[0], 'error', 5000);
      setIsSubmitting(false);
      return;
    }

    const scriptURL = import.meta.env.VITE_SCRIPT_URL;
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
        }),
      });
      const result = await response.json();

      if (result.result === 'success') {
        console.log(result)
        showToast('Message sent successfully!', 'success', 5000);
        setFormData({ name: '', email: '', message: '', date: '' });
      } else {
        console.log(result)
        showToast('Something went wrong. Try again!', 'error', 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      showToast('⚠️ Something went wrong!', 'error', 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform) => {
    showToast(`Opening ${platform} profile...`, 'info', 2000);
  };

  const handleLocationClick = () => {
    showToast('Opening location in Google Maps...', 'info', 2000);
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowDownloadModal(true);
  };

  const handleConfirmDownload = () => {
    setShowDownloadModal(false);
    showToast('Starting download... Please wait', 'info', 3000);

    const link = document.createElement('a');
    link.href = '/public/Anurudhan.pdf';
    link.download = 'Anurudhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      showToast('Resume downloaded successfully!', 'success', 5000);
    }, 1000);
  };

  const handleCancelDownload = () => {
    setShowDownloadModal(false);
    showToast('Download cancelled', 'info', 2000);
  };

  return (
    <div className="cyberpunk-contact">
      <div className="contact-container">
        {/* Hero Section */}
        <div className="contact-hero">
          <h1 className="section-title">Get In Touch</h1>
          <p className="pitch-text">Ready to Build the Future Together</p>
          <div className="pitch-description">
            <p>
              I'm always excited to collaborate with teams that value
              creativity, problem-solving, and pushing boundaries. My journey
              has given me a wide range of technical expertise, and while I
              can't list it all here, my work speaks for itself.
            </p>
            <p>
              If my projects resonate with you,{' '}
              <strong style={{ color: '#ff0080' }}>
                let's connect and explore what we can build together
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="contact-item" style={{ cursor: 'pointer' }} onClick={handleEmailClick}>
              <i className="fas fa-envelope"></i>
              anurudhanvaliyakath@gmail.com
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/anurudhan-v-b3b925284/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn')}
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a
                href="https://github.com/Anurudhan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('GitHub')}
              >
                GitHub Profile
              </a>
            </div>
            <div className="contact-item">
              <i className="cib-leetcode"></i>
              <a
                href="https://leetcode.com/u/Anurudhan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LeetCode')}
              >
                LeetCode Profile
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <a
                href="https://www.google.com/maps/place//@11.3123183,75.7488011,17.25z?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLocationClick}
              >
                Calicut, Kerala, India
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="form-title">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's discuss your project or opportunity..."
                  required
                />
              </div>
              <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Resume Section */}
        <div className="resume-section">
          <h2 className="resume-title">Resume</h2>
          <p className="resume-description">
            Download my complete resume to explore my technical skills, project experience, education, and achievements.
            Get insights into my journey as a full-stack developer and see how I can add value to your team.
          </p>
          <button onClick={handleDownloadClick} className="cta-button">
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showDownloadModal}
        onClose={handleCancelDownload}
        onConfirm={handleConfirmDownload}
        type="download"
        title="Download Resume"
        message="Are you sure you want to download Anurudhan's resume? This will start a PDF download to your device."
        confirmText="Download"
        cancelText="Cancel"
      />
    </div>
  );
};

export default Contact;