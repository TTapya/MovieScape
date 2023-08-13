import React, { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=f8d5984e";

const App = () => {

    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()

        setMovies(data.Search) 
    }

    useEffect(() => {
        searchMovies('Avengers')
        setInput('Avengers')
    }, [])

    return (
      <div className="app">
        <h1>MovieScape</h1>
        <div className="search">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => {
              searchMovies(input);
            }}
          />
        </div>
        <div className="container">
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard 
                    key={movie.imdbID} 
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                    poster={movie.Poster}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found.</h2>
            </div>
          )}
        </div>
      </div>
    );
}

export default App