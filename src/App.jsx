import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Challenge1 from './components/Challenge1';
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import Challenge4 from './components/Challenge4';

export default function App() {
  return (
    <div className="bg-dark min-vh-100 w-100 m-0 py-5">
      <div className="container" style={{ maxWidth: '750px' }}>
        <header className="text-center mb-5 text-white">
          <h2 className="fw-bold text-warning">⚡ Week 5: Daily React Challenges</h2>
          <p className="text-secondary">All 4 challenges combined vertically in a single page view.</p>
        </header>

        <main className="d-flex flex-column">
          <Challenge1 />
          <Challenge2 />
          <Challenge3 />
          <Challenge4 />
        </main>
      </div>
    </div>
  );
}