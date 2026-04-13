import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ marginTop: '1rem' }}>The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '1rem' }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
