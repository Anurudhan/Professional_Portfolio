import React, { useState, useEffect, useRef } from 'react';
import '../CSS/projectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const modalContentRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Scroll to top of modal content on mount
  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const goToMedia = (index) => {
    setCurrentMediaIndex(index);
  };

  const currentMedia = project.media[currentMediaIndex];

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div 
        className={`modal-content ${isClosing ? 'closing' : ''}`} 
        onClick={(e) => e.stopPropagation()}
        ref={modalContentRef}
      >
        {/* Close Button */}
        <button className="modal-close" onClick={handleClose}>
          <span className="close-icon">✕</span>
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-category">{project.category}</div>
          <h2 className="modal-title">{project.title}</h2>
          {project.featured && (
            <div className="modal-featured-badge">FEATURED PROJECT</div>
          )}
        </div>

        {/* Media Gallery */}
        <div className="modal-gallery">
          <div className="gallery-main">
            {currentMedia.type === 'image' ? (
              <img 
                src={currentMedia.url} 
                alt={`${project.title} - ${currentMediaIndex + 1}`}
                className="gallery-main-media"
              />
            ) : (
              <video 
                src={currentMedia.url}
                controls
                className="gallery-main-media"
                autoPlay
                loop
              >
                Your browser does not support video playback.
              </video>
            )}

            {/* Navigation Arrows */}
            {project.media.length > 1 && (
              <>
                <button className="gallery-nav prev" onClick={prevMedia}>
                  <span>‹</span>
                </button>
                <button className="gallery-nav next" onClick={nextMedia}>
                  <span>›</span>
                </button>
              </>
            )}

            {/* Media Counter */}
            <div className="media-counter">
              {currentMediaIndex + 1} / {project.media.length}
            </div>
          </div>

          {/* Thumbnails */}
          {project.media.length > 1 && (
            <div className="gallery-thumbnails">
              {project.media.map((media, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentMediaIndex ? 'active' : ''}`}
                  onClick={() => goToMedia(index)}
                >
                  {media.type === 'image' ? (
                    <img src={media.url} alt={`Thumbnail ${index + 1}`} />
                  ) : (
                    <div className="video-thumbnail">
                      <video src={media.url} />
                      <div className="play-icon">▶</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Description */}
          <div className="modal-section">
            <h3 className="section-heading">
              <span className="heading-icon">{'>'}</span> PROJECT OVERVIEW
            </h3>
            <p className="modal-description">{project.longDescription}</p>
          </div>

          {/* Technologies */}
          <div className="modal-section">
            <h3 className="section-heading">
              <span className="heading-icon">{'>'}</span> TECH STACK
            </h3>
            <div className="modal-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            {project.liveDemo && (
              <a 
                href={project.liveDemo?project.liveDemo:"maintenance"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn demo-btn"
              >
                <span className="btn-icon">🚀</span>
                <span>LIVE DEMO</span>
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn github-btn"
              >
                <span className="btn-icon">{'<>'}</span>
                <span>VIEW CODE</span>
              </a>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="modal-decoration top-left"></div>
        <div className="modal-decoration top-right"></div>
        <div className="modal-decoration bottom-left"></div>
        <div className="modal-decoration bottom-right"></div>
      </div>
    </div>
  );
};

export default ProjectModal;