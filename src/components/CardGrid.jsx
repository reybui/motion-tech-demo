import GameCard from "./GameCard.jsx";
import "./CardGrid.css";
// AnimatePresence allows Motion to animate elements when they are removed from the DOM
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

  // Variants let you name animation states and share them across parent/children.
  // The parent container uses "staggerChildren" so each card animates in one after another
  // rather than all at once.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // each child starts 0.1s after the previous one
      },
    },
  };

  // Each card fades in and rises 20px from below when it enters
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    // motion.div is a regular <div> with Motion animation props bolted on.
    // initial/animate drive the entrance; variants are inherited by children automatically.
    <motion.div
      className="card-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* AnimatePresence tracks which children are being removed and runs their exit
          animations before they unmount. Without it, cards would just disappear instantly
          when the genre filter changes. */}
      <AnimatePresence>
        {games.map((game) => (
          // layout tells Motion to smoothly animate this element's position whenever
          // the grid reflows (e.g. a card is removed and the others shift).
          // layoutId links this card to the DetailPanel — Motion morphs between them
          // creating the "expand" effect when a card is clicked.
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
