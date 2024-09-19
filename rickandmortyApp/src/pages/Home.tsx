import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import Hero from "../components/Hero";
import {
  fetchCharacters,
  charactersSelectors,
} from "../redux/slices/charactersSlice";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const characters = useSelector(charactersSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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
    </main>
  );
}
