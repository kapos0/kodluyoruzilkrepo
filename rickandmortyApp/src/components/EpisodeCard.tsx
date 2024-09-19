type EpisodesType = {
  name: string;
  episode: string;
  airDate: string;
};
function EpisodeCard(episode: EpisodesType) {
  return (
    <div className="card mb-3" style={{ width: 400 }}>
      <div className="card-body p-5 fs-5">
        <h1 className="card-title">{episode.name}</h1>
        <p className="card-text">
          <small className="text-muted">Type: {episode.episode}</small>
          <br />
          <span className="fw-bold">Dimension: {episode.airDate}</span>
        </p>
      </div>
    </div>
  );
}

export default EpisodeCard;
