import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchLocations,
  incrementPage,
  locationsSelectors,
} from "../redux/slices/locationsSlice";
import LocationCard from "../components/LocationCard";
export default function Locations() {
  const dispatch: AppDispatch = useDispatch();
  const locations = useSelector(locationsSelectors.selectAll);
  const { currentPage } = useSelector((state: RootState) => state.locations);
  const [btnMsg, setBtnMsg] = useState<string>("Load More");
  const [loadDisabled, setLoadDisabled] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchLocations(currentPage));
  }, [currentPage, dispatch]);
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
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary my-3"
          disabled={loadDisabled}
          onClick={() => {
            if (currentPage == 7) {
              setLoadDisabled((prev) => !prev);
              setBtnMsg("This is the last page!!");
              return;
            }
            dispatch(incrementPage());
            dispatch(fetchLocations(currentPage + 1));
          }}
        >
          {btnMsg}
        </button>
      </div>
    </main>
  );
}
