import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Challenge2() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="card shadow-sm mb-4 border-success">
      <div className="card-header bg-success text-white fw-bold">
        Challenge 2: Custom useToggle() Hook
      </div>
      <div className="card-body">
        <button className="btn btn-outline-success mb-3" onClick={toggleVisibility}>
          {isVisible ? '🙈 Hide Content' : '👁️ Show Content'}
        </button>

        {isVisible && (
          <div className="alert alert-success mt-2">
            🎉 <strong>Boom!</strong> This content is toggling smoothly using your custom <code>useToggle()</code> hook!
          </div>
        )}
      </div>
    </div>
  );
}