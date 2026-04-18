import GameCard from "./GameCard.jsx";
import "./CardGrid.css";
import { motion, AnimatePresence } from "motion/react";

export default function CardGrid({
  games,
  favourites,
  onCardClick,
  onFavouriteToggle,
}) {
  if (games.length === 0) {
    return <p className="card-grid__empty">No games match this filter.</p>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="card-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {games.map((game) => (
          <motion.div
            key={game.id}
            layout
            layoutId={`game-${game.id}`}
            variants={itemVariants}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
          >
            <GameCard
              game={game}
              isFavourited={favourites.has(game.id)}
              onClick={() => onCardClick(game)}
              onFavouriteToggle={() => onFavouriteToggle(game.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
