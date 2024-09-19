import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  fetchLocations,
  locationsSelectors,
} from "../redux/slices/locationsSlice";
import LocationCard from "../components/LocationCard";
export default function Locations() {
  const dispatch: AppDispatch = useDispatch();
  const locations = useSelector(locationsSelectors.selectAll);
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);
  return (
    <main className="text-bg-dark">
      <Hero title="Locations" />
      <div className="container mt-5 d-flex flex-wrap justify-content-around">
        {locations.map((loc) => (
          <LocationCard
            key={loc.id}
            name={loc.name}
            dimension={loc.dimension}
            type={loc.type}
          />
        ))}
      </div>
    </main>
  );
}
