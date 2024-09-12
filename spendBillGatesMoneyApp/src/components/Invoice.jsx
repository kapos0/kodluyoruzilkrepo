import { useSelector } from "react-redux";

function Invoice() {
  const cartList = useSelector((state) => state.gates.cart);
  const balance = useSelector((state) => state.gates.balance);
  return (
    <>
      {cartList.length > 0 && (
        <div className="shopping_container">
          <div className="title">Your Receipt</div>

          <div className="cartList">
            {cartList.map((cartItem) => (
              <div style={{ marginBottom: 15 }} key={cartItem.id}>
                {cartItem.title} x{cartItem.quantity}{" "}
                <span
                  style={{
                    color: "rgb(46, 204, 113)",
                  }}
                >
                  $
                  {(cartItem.price * cartItem.quantity)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            ))}
          </div>

          <hr />

          <div className="cartList">
            TOTAL:{" "}
            <span
              style={{
                color: "rgb(46, 204, 113)",
              }}
            >
              ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Invoice;
