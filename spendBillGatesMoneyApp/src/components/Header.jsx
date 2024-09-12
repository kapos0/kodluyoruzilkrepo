import React from "react";

function Header() {
  return (
    <>
      <br />
      <div className="section">
        <img src="https://neal.fun/spend/billgates.jpg" />
        <p>Spend Bill Gates{"'"} Money</p>
      </div>
    </>
  );
}

export default React.memo(Header);
