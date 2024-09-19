type LocationType = {
  name: string;
  type: string;
  dimension: string;
};
function LocationCard(location: LocationType) {
  return (
    <div className="card mb-3" style={{ width: 540 }}>
      <div className="card-body p-5 fs-5">
        <h1 className="card-title">{location.name}</h1>
        <p className="card-text">
          <small className="text-muted">Type: {location.type}</small>
          <br />
          <span className="fw-bold">Dimension: {location.dimension}</span>
        </p>
      </div>
    </div>
  );
}

export default LocationCard;
