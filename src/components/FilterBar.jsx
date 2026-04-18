import { genres } from '../data/games.js';
import './FilterBar.css';

export default function FilterBar({ activeGenre, onFilterChange }) {
  return (
    <div className="filter-bar">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onFilterChange(genre)}
          className={`filter-bar__btn${activeGenre === genre ? ' active' : ''}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
