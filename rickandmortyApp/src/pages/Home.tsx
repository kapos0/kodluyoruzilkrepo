import Hero from "../components/Hero";
import CharacterCard from "../components/CharacterCard";
export default function Home() {
  //Burada bütün karakterleri sıra ile çekicen ve map ile render edicen
  return (
    <main className="text-bg-dark">
      <Hero title="Characters" />
      <div className="container mt-5 d-flex flex-wrap justify-content-between">
        <CharacterCard
          isDetail={false}
          id="arabalar"
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          isAlive={true}
          lastLocation="Earth"
          livingType="Human"
          name="yarak"
        />
        <CharacterCard
          isDetail={false}
          id="arabalar"
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          isAlive={true}
          lastLocation="Earth"
          livingType="Human"
          name="yarak"
        />
        <CharacterCard
          isDetail={false}
          id="arabalar"
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          isAlive={true}
          lastLocation="Earth"
          livingType="Human"
          name="yarak"
        />
        <CharacterCard
          isDetail={false}
          id="arabalar"
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          isAlive={true}
          lastLocation="Earth"
          livingType="Human"
          name="yarak"
        />
      </div>
    </main>
  );
}
