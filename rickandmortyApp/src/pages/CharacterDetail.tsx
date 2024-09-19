import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CharacterCard from "../components/CharacterCard";
import { charactersSelectors } from "../redux/slices/charactersSlice";
export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = useSelector((state: RootState) =>
    charactersSelectors.selectById(state, id as string)
  );
  useEffect(() => {
    if (!id || !character) {
      navigate("/error");
    }
  }, [id, character, navigate]);
  if (!character) return null;
  return (
    <div className="container-fluid text-bg-dark my-5 d-flex justify-content-center align-items-center">
      <CharacterCard
        id={character.id}
        image={character.image}
        status={character.status}
        isDetail={true}
        lastLocation={character.lastLocation}
        name={character.name}
        species={character.species}
      />
    </div>
  );
}
