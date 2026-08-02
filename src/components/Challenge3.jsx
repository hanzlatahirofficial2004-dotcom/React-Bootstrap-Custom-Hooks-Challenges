import React, { useState, useEffect } from 'react';

export default function Challenge3() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchFakeData = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData([
        { id: 1, title: 'React 19 Hooks Mastery', status: 'Completed' },
        { id: 2, title: 'Custom useRef Operations', status: 'In Progress' },
        { id: 3, title: 'Bootstrap 5 Integration', status: 'Ready' }
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const cleanup = fetchFakeData();
    return cleanup;
  }, []);

  return (
    <div className="card shadow-sm mb-4 border-warning">
      <div className="card-header bg-warning text-dark fw-bold">
        Challenge 3: Fake Loading Screen (2s Spinner)
      </div>
      <div className="card-body">
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-warning mb-2" role="status" style={{ width: '2.5rem', height: '2.5rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted fw-bold mb-0">Fetching Data... Please wait 2 seconds</p>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-success mb-0 fw-bold">✅ Data Loaded Successfully!</h6>
              <button className="btn btn-sm btn-outline-secondary" onClick={fetchFakeData}>
                🔄 Reload
              </button>
            </div>
            <ul className="list-group">
              {data.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.title}
                  <span className="badge bg-warning text-dark">{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
