import React from "react";

function TwoSidedCard({ id, name, close, handleClick, completed }) {
  return (
    <div
      onClick={() => handleClick(id, name, completed, close)}
      className={`card ${!close ? "open" : ""}  `}
    >
      <div className="front text-5xl">?</div>
      <div className={`back ${completed ? "animate-card" : ""}`}>
        <img
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${name}.png`}
          alt=""
          className="p-4"
        />
      </div>
    </div>
  );
}

export default TwoSidedCard;
