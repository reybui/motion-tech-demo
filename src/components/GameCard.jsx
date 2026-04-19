import FavouriteButton from "./FavouriteButton.jsx";
import "./GameCard.css";
// "scale" import is unused here — variants handle scaling via named states instead
import { motion, scale } from "motion/react";

// Maps each genre to a colour used for the cover background and badge
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

  // Variants group all animation states in one object.
  // The parent (motion.div in CardGrid) passes "hidden"/"visible" down automatically,
  // so the card inherits the staggered entrance without needing its own initial/animate.
  // whileHover and whileTap reference named states here for a subtle scale effect.
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
    exit: { opacity: 0, scale: 0.9 }, // plays when AnimatePresence removes this card
  };

  return (
    <motion.div
      className="game-card"
      onClick={onClick}
      variants={cardVariants}
      // initial={"hidden"}
      // animate={"visible"}
      whileHover={"hover"}
      whileTap={"tap"}
      exit={"exit"}
      // transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="game-card__cover" style={{ "--genre-color": colour }}>
        {game.cover ? (
          <img
            src={game.cover}
            alt={game.title}
            className="game-card__cover-img"
          />
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
    </motion.div>
  );
}
