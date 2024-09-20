import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Hero from "../components/Hero";
import {
  fetchCharacters,
  charactersSelectors,
  incrementPage,
} from "../redux/slices/charactersSlice";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const characters = useSelector(charactersSelectors.selectAll);
  const { currentPage } = useSelector((state: RootState) => state.characters);
  const [btnMsg, setBtnMsg] = useState<string>("Load More");
  const [loadDisabled, setLoadDisabled] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [currentPage, dispatch]);

  return (
    <main className="text-bg-dark">
      <Hero title="Characters" />
      <div className="container mt-5 d-flex flex-wrap justify-content-between">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            image={char.image}
            status={char.status}
            isDetail={false}
            lastLocation={char.lastLocation}
            name={char.name}
            species={char.species}
          />
        ))}
      </div>
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary my-3"
          disabled={loadDisabled}
          onClick={() => {
            if (currentPage == 42) {
              setLoadDisabled((prev) => !prev);
              setBtnMsg("This is the last page!!");
              return;
            }
            dispatch(incrementPage());
            dispatch(fetchCharacters(currentPage + 1));
          }}
        >
          {btnMsg}
        </button>
      </div>
    </main>
  );
}
