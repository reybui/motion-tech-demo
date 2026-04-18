import "./FavouriteButton.css";
import { useRef, useEffect } from "react";

export default function FavouriteButton({ isFavourited, onToggle }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const stop = (e) => e.stopPropagation();
    el.addEventListener("pointerdown", stop);
    return () => el.removeEventListener("pointerdown", stop);
  }, []);

  return (
    <button
      ref={ref}
      className="favourite-btn"
      type="button"
      aria-pressed={isFavourited}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label={isFavourited ? "Remove from favourites" : "Add to favourites"}
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
    </button>
  );
}
