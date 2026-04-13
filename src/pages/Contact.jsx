import React from 'react';

const Contact = () => {
  return (
    <div className="card">
      <h1>Contact</h1>
      <p>Reach out to us through this page.</p>
      <form className="todo-list" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <input type="email" placeholder="Your email adddress" />
        </div>
        <div className="form-group">
          <textarea 
            placeholder="Your message..." 
            rows="5"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'inherit',
              color: 'inherit',
              fontFamily: 'inherit'
            }} 
          />
        </div>
        <button className="btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
