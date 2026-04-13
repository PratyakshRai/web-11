import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import NotFound from './pages/NotFound';

function App() {
  const { theme } = useContext(ThemeContext);

  // We assign the theme class to the body or a wrapper div to apply the CSS variables.
  // Using an effect or modifying document.body directly is common, but here we can just use a wrapper.
  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
