// Examples of how to use the toast system in your components

import { useToast } from "./ToastProvider";

const ExampleComponent = () => {
  const { showToast } = useToast();

  // Basic toast examples
  const handleSuccess = () => {
    showToast('Operation completed successfully!', 'success', 5000);
  };

  const handleError = () => {
    showToast('Something went wrong. Please try again.', 'error', 7000);
  };

  const handleWarning = () => {
    showToast('Warning: This action cannot be undone.', 'warning', 6000);
  };

  const handleInfo = () => {
    showToast('Here is some useful information for you.', 'info', 4000);
  };

 
 
  // Copy to clipboard example
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anurudhanvaliyakath@gmail.com')
      .then(() => {
        showToast('Email copied to clipboard!', 'success', 3000);
      })
      .catch(() => {
        showToast('Failed to copy email.', 'error');
      });
  };

  // Network status example
  const handleNetworkCheck = () => {
    if (navigator.onLine) {
      showToast('You are online and connected!', 'success');
    } else {
      showToast('You appear to be offline.', 'warning');
    }
  };

  return (
    <div className="example-component">
      <h2>Toast Examples</h2>
      
      <div className="button-grid">
        <button onClick={handleSuccess} className="btn btn-success">
          Show Success Toast
        </button>
        
        <button onClick={handleError} className="btn btn-error">
          Show Error Toast
        </button>
        
        <button onClick={handleWarning} className="btn btn-warning">
          Show Warning Toast
        </button>
        
        <button onClick={handleInfo} className="btn btn-info">
          Show Info Toast
        </button>
        
        <button onClick={handleCopyEmail} className="btn btn-secondary">
          Copy Email
        </button>
        
        <button onClick={handleNetworkCheck} className="btn btn-secondary">
          Check Network
        </button>
      </div>

      {/* Multiple toasts at once */}
      <button 
        onClick={() => {
          showToast('First message', 'info', 8000);
          setTimeout(() => showToast('Second message', 'success', 6000), 500);
          setTimeout(() => showToast('Third message', 'warning', 4000), 1000);
        }}
        className="btn btn-primary"
      >
        Show Multiple Toasts
      </button>
    </div>
  );
};

export default ExampleComponent;