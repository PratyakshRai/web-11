import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Atom } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Atom size={28} />
        React Advance
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        <NavLink to="/user/1" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Profile</NavLink>
      </div>
      <div>
        <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
