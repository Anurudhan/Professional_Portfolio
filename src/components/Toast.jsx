// ToastContainer.js
import React from 'react';
import { useToast } from './ToastProvider';
import '../CSS/toast.css';

const Toast = ({ toast, onRemove }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'i';
    }
  };

  return (
    <div 
      className={`toast toast-${toast.type}`}
      onClick={() => onRemove(toast.id)}
    >
      <div className="toast-content">
        <div className="toast-icon">
          {getIcon(toast.type)}
        </div>
        <div className="toast-message">
          {toast.message}
        </div>
        <button 
          className="toast-close"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(toast.id);
          }}
          aria-label="Close toast"
        >
          ×
        </button>
      </div>
      <div className="toast-progress">
        <div 
          className="toast-progress-bar"
          style={{
            animationDuration: `${toast.duration}ms`
          }}
        />
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast 
          key={toast.id} 
          toast={toast} 
          onRemove={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;