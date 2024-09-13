import { useDispatch } from "react-redux";
import { resetGame } from "../redux/memoryGame/memoryGameSlice";
function GameOverStatus() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="absolute w-full flex justify-center bg-red-500 p-8">
        <button
          onClick={() => dispatch(resetGame())}
          className="bg-white p-8 font-bold hover:bg-slate-100"
        >
          Play again
        </button>
      </div>
    </>
  );
}

export default GameOverStatus;
