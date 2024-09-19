import Hero from "../components/Hero";
import LocationCard from "../components/LocationCard";
export default function Locations() {
  return (
    <main className="text-bg-dark">
      <Hero title="Locations" />
      <div className="container mt-5 d-flex flex-wrap justify-content-around">
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
        <LocationCard name="earth" type="planet" dimension="c-137" />
      </div>
    </main>
  );
}
