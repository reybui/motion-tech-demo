import GameCard from './GameCard.jsx';
import './CardGrid.css';

export default function CardGrid({ games, favourites, onCardClick, onFavouriteToggle }) {
  if (games.length === 0) {
    return <p className="card-grid__empty">No games match this filter.</p>;
  }

  return (
    <div className="card-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isFavourited={favourites.has(game.id)}
          onClick={() => onCardClick(game)}
          onFavouriteToggle={() => onFavouriteToggle(game.id)}
        />
      ))}
    </div>
  );
}
