import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import StreamList from './pages/StreamList';  
import Movies from './pages/Movies';  // Import Movies component
import Cart from './pages/Cart';             
import About from './pages/About'; 
import './App.css'; // Ensure you import the CSS for active link styles

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")} // About first
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")} // StreamList
          >
            StreamList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active-link" : "")} // Movies
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active-link" : "")} // Cart
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} /> {/* Route for Movies page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
