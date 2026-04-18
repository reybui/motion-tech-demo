import './DetailPanel.css';

export default function DetailPanel({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="detail-panel__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="detail-panel__title">{game.title}</h2>
        <p className="detail-panel__description">{game.description}</p>

        <table className="detail-panel__table">
          <tbody>
            <tr><td>Genre</td><td>{game.genre}</td></tr>
            <tr><td>Rating</td><td>{game.rating} / 10</td></tr>
            <tr><td>Year</td><td>{game.year}</td></tr>
            <tr><td>Developer</td><td>{game.developer}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
