import "./FavouriteButton.css";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function FavouriteButton({ isFavourited, onToggle }) {
  // Ref used to attach a native pointerdown listener that stops the event
  // bubbling up to the card's onClick (which would open the detail panel).
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const stop = (e) => e.stopPropagation();
    el.addEventListener("pointerdown", stop);
    return () => el.removeEventListener("pointerdown", stop);
  }, []);

  return (
    // motion.button replaces a plain <button> so we can animate it directly.
    // animate drives a spring bounce whenever isFavourited changes — the button
    // scales up to 1.2 when favourited and back to 1 when unfavourited.
    // whileTap gives immediate tactile feedback on press, independent of animate.
    <motion.button
      ref={ref}
      className="favourite-btn"
      type="button"
      aria-pressed={isFavourited}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label={isFavourited ? "Remove from favourites" : "Add to favourites"}
      animate={{ scale: isFavourited ? 1.2 : 1 }}
      // Spring physics (stiffness + damping) produce the bouncy "pop" feel
      transition={{ type: "spring", stiffness: 300, damping: 5 }}
      whileTap={{ scale: 0.9, transition: { ease: "easeIn", duration: 0.2 } }}
    >
      <svg
        className="favourite-btn__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12.1 21.35l-1.1-1C5.14 15.24 2 12.39 2 8.99 2 6.14 4.24 4 7.1 4c1.74 0 3.41 0.81 4.5 2.09C12.69 4.81 14.36 4 16.1 4 18.96 4 21.2 6.14 21.2 8.99c0 3.4-3.14 6.25-8.99 11.36l-1.11 1z"
          fill={isFavourited ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
