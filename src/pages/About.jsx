import React from 'react';
import './About.css';  // Optional: for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to EZTechMovie!</h1>
      <p>
        EZTechMovie is your one-stop destination to explore and manage movies like never before! Whether you're a movie buff or just looking for your next great film to watch, we've got you covered.
      </p>
      <section>
        <h2>How It Works</h2>
        <ul>
          <li><strong>StreamList:</strong> Create a list of your favorite movies, track events related to those movies, and mark them as completed.</li>
          <li><strong>Movies:</strong> Browse through a wide selection of popular movies, search by title, and add your favorites to your cart.</li>
          <li><strong>Cart:</strong> Manage movies you’ve added to your cart for easy access later.</li>
        </ul>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li><strong>Search for Movies:</strong> Find movies by name and get details like release dates, ratings, and overviews.</li>
          <li><strong>Interactive Cart:</strong> Add, remove, or view movies in your cart for later viewing.</li>
          <li><strong>Persistent Data:</strong> Your movie lists and cart are saved across sessions, so you never lose your progress!</li>
        </ul>
      </section>

      <section>
        <h2>Stay Connected</h2>
        <p>Follow us on social media for updates, movie recommendations, and more!</p>
        <ul className="social-links">
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>
    </div>
  );
};

export default About;
