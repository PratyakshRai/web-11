import React from 'react';
import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div className="card">
      <h1>User Profile</h1>
      <p>This page demonstrates dynamic routing.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--bg-color-light)', borderRadius: '8px', border: '1px solid var(--border-light)' }} className="dark:bg-[var(--bg-color-dark)]">
        <h2>Viewing Profile ID: {id}</h2>
        <p>This data could be fetched dynamically using the ID from the URL parameters.</p>
      </div>

      <div className="dynamic-link-container">
        <Link to="/user/1" className="dynamic-link">User 1</Link>
        <Link to="/user/42" className="dynamic-link">User 42</Link>
        <Link to="/user/100" className="dynamic-link">User 100</Link>
        <Link to="/user/100" className="dynamic-link">Pratyaksh GAY</Link>

      </div>
    </div>
  );
};

export default User;
