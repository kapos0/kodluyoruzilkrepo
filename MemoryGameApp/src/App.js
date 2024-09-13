import { useEffect } from "react";
import TwoSidedCard from "./components/TwoSidedCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addClickedCard,
  addPointScore,
  clearClickedCard,
  gameOver,
  memoryGameSelectors,
  updateCard,
  updateManyCard,
} from "./redux/memoryGame/memoryGameSlice";
import GameOverStatus from "./components/GameOverStatus";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";

const MATCHED_CARDS_DELAY = 500;
const MISMATCHED_CARDS_DELAY = 1000;

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(memoryGameSelectors.selectAll);
  const { clickedCards, gameOverStatus } = useSelector(
    (state) => state.memoryGame
  );

  const handleClick = (id, name, completed, close) => {
    if (completed || !close) return false;

    if (clickedCards.length < 2) {
      dispatch(addClickedCard({ id, name }));
      dispatch(updateCard({ id, changes: { close: false } }));
    }
  };

  const handleMatchedCards = () => {
    setTimeout(() => {
      dispatch(
        updateManyCard(
          clickedCards.map((item) => {
            return { id: item.id, changes: { completed: true } };
          })
        )
      );

      dispatch(clearClickedCard());
      dispatch(addPointScore(50));
    }, MATCHED_CARDS_DELAY);
  };

  const handleMismatchedCards = () => {
    setTimeout(() => {
      dispatch(
        updateManyCard(
          clickedCards.map((item) => {
            return { id: item.id, changes: { close: true } };
          })
        )
      );

      dispatch(clearClickedCard());
      dispatch(addPointScore(-10));
    }, MISMATCHED_CARDS_DELAY);
  };

  useEffect(() => {
    if (clickedCards.length === 2) {
      clickedCards[0].name === clickedCards[1].name
        ? handleMatchedCards()
        : handleMismatchedCards();
    }
    if (cards.every((card) => card.completed)) {
      dispatch(gameOver());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCards, cards]);
  return (
    <>
      <Header />
      <ScoreBoard />

      <div className="flex mt-8 justify-center items-center p-4 ">
        {/* Cards container */}
        <div className="grid grid-cols-4 gap-2">
          {/* card */}
          {cards.map(({ id, name, close, completed }) => (
            <TwoSidedCard
              key={id}
              id={id}
              name={name}
              close={close}
              handleClick={handleClick}
              completed={completed}
            />
          ))}
        </div>
        {gameOverStatus && <GameOverStatus />}
      </div>
    </>
  );
}

export default App;
