export default function Card() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            className="img-fluid rounded-start"
            alt="Rick Sanchez"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Rick Sanchez</h5>
            <p className="card-text">
              <span>
                <i className="bi bi-circle-fill text-success"></i> Alive - Human
              </span>
            </p>
            <p className="card-text">
              <small className="text-muted">Last known location:</small>
              <br />
              <span className="fw-bold">Citadel of Ricks</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
