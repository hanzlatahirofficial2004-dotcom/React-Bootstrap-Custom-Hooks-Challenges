import React from 'react';

// Reusable Custom Button Sub-Component
function CustomButton({ label, color = 'primary', onClick }) {
  const isBootstrapVariant = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'].includes(color);

  return (
    <button
      onClick={onClick}
      className={`btn ${isBootstrapVariant ? `btn-${color}` : ''} me-2 mb-2 font-monospace`}
      style={!isBootstrapVariant ? { backgroundColor: color, color: '#fff' } : {}}
    >
      {label}
    </button>
  );
}

export default function Challenge1() {
  return (
    <div className="card shadow-sm mb-4 border-primary">
      <div className="card-header bg-primary text-white fw-bold">
        Challenge 1: Reusable Button Component
      </div>
      <div className="card-body">
        <p className="text-muted">Click any button to trigger its specific <code>onClick</code> handler:</p>
        
        <CustomButton 
          label="Primary Action" 
          color="primary" 
          onClick={() => alert('Primary Button Clicked!')} 
        />
        <CustomButton 
          label="Success Alert" 
          color="success" 
          onClick={() => alert('Success Button Clicked!')} 
        />
        <CustomButton 
          label="Danger Zone" 
          color="danger" 
          onClick={() => alert('Danger Button Clicked!')} 
        />
        <CustomButton 
          label="Custom Purple" 
          color="#8b5cf6" 
          onClick={() => alert('Custom Purple Color Clicked!')} 
        />
      </div>
    </div>
  );
}