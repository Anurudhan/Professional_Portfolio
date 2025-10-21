// ConfirmationModal.js
import React from 'react';
import '../CSS/modal.css';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action", 
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "info" // info, warning, error, success
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Enter') {
      onConfirm();
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'warning':
        return '⚠';
      case 'error':
        return '✗';
      case 'success':
        return '✓';
      case 'download':
        return '⬇';
      default:
        return 'i';
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className={`modal-container modal-${type}`}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-icon">
            {getIcon(type)}
          </div>
          <h2 className="modal-title">{title}</h2>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p className="modal-message">{message}</p>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button 
            className="modal-btn btn-cancel" 
            onClick={onClose}
            autoFocus
          >
            {cancelText}
          </button>
          <button 
            className={`modal-btn btn-confirm btn-${type}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>

        {/* Scanning line effect */}
        <div className="modal-scan-line"></div>
      </div>
    </div>
  );
};

export default ConfirmationModal;