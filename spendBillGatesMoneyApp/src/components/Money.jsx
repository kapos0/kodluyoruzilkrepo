import { useSelector } from "react-redux";

function Money() {
  const totalMoney = useSelector((state) => state.gates.totalMoney);
  return (
    <div className="total_money_container">
      ${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </div>
  );
}

export default Money;
