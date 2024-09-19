import { useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
export default function CharacterDetail() {
  //Burada id sini aldığın karakteri tekrardan store dan seçip aşağıda ki template ile render edicen
  const { id } = useParams();
  return (
    <div className="container-fluid text-bg-dark my-5 d-flex justify-content-center align-items-center">
      <CharacterCard
        id={id ? id : ""}
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        isAlive={true}
        lastLocation="Earth"
        livingType="Human"
        name="yarak"
        isDetail={true}
      />
    </div>
  );
}
