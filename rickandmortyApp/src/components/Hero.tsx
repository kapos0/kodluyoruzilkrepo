import React from "react";
function Hero({ title }: { title: string }) {
  return (
    <div className="card text-bg-dark">
      <div className="row g-0">
        <div className="col-md-5">
          <img src="/logo.png" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-7 d-flex flex-row align-items-center justify-content-center">
          <div className="card-body">
            <h1 className="card-title display-1 ms-5">
              Rick and Morty {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Hero);
