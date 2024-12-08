import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/TMDBService';  // Adjust the path if necessary
import './Movies.css';  // Optional for styling

const Movies = () => {
  const [movies, setMovies] = useState([]);  // State to store movie data
  const [searchQuery, setSearchQuery] = useState('');  // State to store search input
  const [loading, setLoading] = useState(false);  // State for loading status
  const [error, setError] = useState('');  // State for errors

  // Load movies and searchQuery from localStorage when the component mounts
  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    const savedMovies = localStorage.getItem('moviesData');

    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);  // Load saved search query
    }

    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));  // Load saved movies
    }
  }, []);

  // Fetch movies whenever the searchQuery changes
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError('');
      const data = await fetchMovies(searchQuery);
      if (data && data.length > 0) {
        setMovies(data);
        localStorage.setItem('moviesData', JSON.stringify(data));  // Save movies to localStorage
      } else {
        setMovies([]);
        setError('No movies found.');
      }
      setLoading(false);
    };

    // Only trigger fetch if the searchQuery is not empty or undefined
    if (searchQuery.trim()) {
      getMovies();
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);  // Update searchQuery when user types
    localStorage.setItem('searchQuery', query);  // Save search query to localStorage
  };

  // Function to add an item to the cart
  const addToCart = (movie) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isMovieInCart = cart.some(item => item.id === movie.id);
    if (!isMovieInCart) {
      cart.push(movie);  // Add movie to cart
      localStorage.setItem('cartItems', JSON.stringify(cart));  // Update LocalStorage
      alert(`${movie.title} added to cart!`);
    } else {
      alert("This movie is already in your cart!");
    }
  };

  // Base URL for images (TMDB image URL)
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";  // Size of the image (w500) for a good balance between quality and speed

  return (
    <div>
      <h1>Popular Movies</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={handleSearch}  // Handle search input changes
      />

      {/* Loading state */}
      {loading && <p>Loading movies...</p>}

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Movie list */}
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'default-image.jpg'}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>

              {/* Add to Cart button */}
              <button onClick={() => addToCart(movie)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
