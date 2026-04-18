import FavouriteButton from "./FavouriteButton.jsx";
import "./GameCard.css";

const genreColours = {
  Action: "#c0392b",
  RPG: "#8e44ad",
  Indie: "#27ae60",
  Strategy: "#2980b9",
  Adventure: "#d35400",
  Sandbox: "#16a085",
};

export default function GameCard({
  game,
  isFavourited,
  onClick,
  onFavouriteToggle,
}) {
  const colour = genreColours[game.genre] ?? "#555";

  return (
    <div className="game-card" onClick={onClick}>
      <div className="game-card__cover" style={{ "--genre-color": colour }}>
        {game.cover ? (
          <img src={game.cover} alt={game.title} className="game-card__cover-img" />
        ) : (
          game.title[0]
        )}
      </div>

      <div className="game-card__info">
        <div className="game-card__header">
          <h3 className="game-card__title">{game.title}</h3>
          <FavouriteButton
            isFavourited={isFavourited}
            onToggle={onFavouriteToggle}
          />
        </div>

        <div className="game-card__footer">
          <span
            className="game-card__genre-badge"
            style={{ "--genre-color": colour }}
          >
            {game.genre}
          </span>
          <span className="game-card__rating">{game.rating} / 10</span>
        </div>
      </div>
    </div>
  );
}
