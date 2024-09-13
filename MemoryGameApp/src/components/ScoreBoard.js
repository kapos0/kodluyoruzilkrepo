import { useSelector } from "react-redux";
function ScoreBoard() {
  const { score } = useSelector((state) => state.memoryGame);
  return (
    <>
      <div className="flex justify-center w-full">
        <h1 className="bg-slate-700 text-white text-center font-bold w-80 py-1 rounded-xl">
          Score: {score}
        </h1>
      </div>
    </>
  );
}

export default ScoreBoard;
