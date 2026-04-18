import { useState } from 'react';
import { games } from './data/games.js';
import FilterBar from './components/FilterBar.jsx';
import CardGrid from './components/CardGrid.jsx';
import DetailPanel from './components/DetailPanel.jsx';
import './App.css';

export default function App() {
  const [activeGenre, setActiveGenre] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);
  const [favourites, setFavourites] = useState(new Set());

  const filtered =
    activeGenre === 'All' ? games : games.filter((g) => g.genre === activeGenre);

  function toggleFavourite(id) {
    setFavourites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }

  return (
    <div className="app">
      <h1>Game Library</h1>

      <FilterBar activeGenre={activeGenre} onFilterChange={setActiveGenre} />

      <CardGrid
        games={filtered}
        favourites={favourites}
        onCardClick={setSelectedGame}
        onFavouriteToggle={toggleFavourite}
      />

      <DetailPanel game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
