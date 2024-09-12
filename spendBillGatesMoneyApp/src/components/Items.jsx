import { useSelector, useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../redux/gatesSlice";

function Items() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.gates.items);

  const cart = useSelector((state) => state.gates.cart);

  const totalMoney = useSelector((state) => state.gates.totalMoney);

  const handleBuy = (item) => {
    const id = item.id;
    const price = item.price;
    const title = item.title;
    let quantity = 1;
    if (totalMoney >= item.price) {
      dispatch(addToCart({ id, title, price, quantity }));
    }
  };

  const handleSell = (item) => {
    const id = item.id;
    const price = item.price;
    const title = item.title;
    if (selectedItem(item) > 0) {
      dispatch(removeFromCart({ id, title, price }));
    }
  };

  const selectedItem = (item) => {
    const selected = cart.find((i) => i.id === item.id);
    if (selected) {
      return selected.quantity;
    } else {
      return 0;
    }
  };

  return (
    <div className="items">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white text-center item d-flex flex-column justify-content-center align-items-center"
        >
          <img src={item.picture} alt="" style={{ width: 150, height: 150 }} />
          <div className="mt-3 mb-4">
            <div className="font-weight-bolder title">{item.title} </div>
            <div className="font-weight-bolder text-success price">
              ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center px-2">
            <button
              className={selectedItem(item) > 0 ? "btnSell" : "btnDisable"}
              onClick={() => handleSell(item)}
              disabled={selectedItem(item) > 0 ? false : true}
            >
              Sell
            </button>
            <input
              type="number"
              className="form-control"
              value={selectedItem(item)}
              onChange={() => {}}
              disabled
              style={{ textAlign: "center" }}
            />
            <button
              className={totalMoney >= item.price ? "btnAdd" : "btnDisable"}
              onClick={() => handleBuy(item)}
              disabled={totalMoney >= item.price ? false : true}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
