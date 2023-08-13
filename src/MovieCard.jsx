import React from "react";

const MovieCard = ({ title, type, poster, year }) => (
  <div className="movie">
    <div>
      <p>{year}</p>
    </div>
    <div>
      <img
        src={
          poster !== "N/A"
            ? poster
            : "https://via.placeholder.com/400"
        }
        alt={title}
      />
    </div>
    <div>
      <span>{type}</span>
      <h3>{title}</h3>
    </div>
  </div>
);

export default MovieCard