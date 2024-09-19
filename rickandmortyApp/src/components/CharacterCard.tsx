import { Link, useNavigate } from "react-router-dom";

type CharacterType = {
  id: string;
  name: string;
  image: string;
  isAlive: boolean;
  livingType: string;
  lastLocation: string;
  isDetail: boolean;
};

function CharacterCard(character: CharacterType) {
  const navigate = useNavigate();
  return (
    <div className="my-4 d-flex flex-column">
      <div
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() =>
          character.isDetail ? "" : navigate(`character/${character.id}`)
        }
      >
        <div className="row">
          <div className="col-md-4">
            <img src={character.image} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                <span
                  className={`text-${character.isAlive ? "success" : "danger"}`}
                >
                  ● {character.isAlive}
                </span>{" "}
                -<span>{" " + character.livingType}</span>
              </p>
              <p className="card-text">
                <strong>Last known location: </strong>
                <span>{character.lastLocation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {character.isDetail ? (
        <Link to="/" className="btn btn-dark rounded-pill px-5 fs-6 m-0 my-5">
          Go Home
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default CharacterCard;
