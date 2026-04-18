import './FavouriteButton.css';

export default function FavouriteButton({ isFavourited, onToggle }) {
  return (
    <button
      className="favourite-btn"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label={isFavourited ? 'Remove from favourites' : 'Add to favourites'}
    >
      {isFavourited ? '♥' : '♡'}
    </button>
  );
}
