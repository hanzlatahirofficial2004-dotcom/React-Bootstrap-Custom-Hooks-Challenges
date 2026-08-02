import React, { useState, useEffect, useRef } from 'react';

export default function Challenge4() {
  const [text, setText] = useState('');
  const prevTextRef = useRef('');

  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  return (
    <div className="card shadow-sm mb-4 border-info">
      <div className="card-header bg-info text-dark fw-bold">
        Challenge 4: Previous Value Tracker (useRef)
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label fw-bold">Type in the box below:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="row text-center mt-3">
          <div className="col-md-6 mb-2">
            <div className="p-3 bg-light rounded border">
              <small className="text-muted d-block font-monospace">BEFORE (Previous State)</small>
              <span className="fw-bold text-danger fs-5">
                {prevTextRef.current || <span className="text-muted fst-italic">"(empty)"</span>}
              </span>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="p-3 bg-light rounded border">
              <small className="text-muted d-block font-monospace">NOW (Current State)</small>
              <span className="fw-bold text-success fs-5">
                {text || <span className="text-muted fst-italic">"(empty)"</span>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}