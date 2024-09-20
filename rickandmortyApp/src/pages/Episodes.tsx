import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchEpisodes,
  incrementPage,
  episodesSelectors,
} from "../redux/slices/episodesSlice";
import Hero from "../components/Hero";
import EpisodeCard from "../components/EpisodeCard";
export default function Episodes() {
  const dispatch: AppDispatch = useDispatch();
  const episodes = useSelector(episodesSelectors.selectAll);
  const { currentPage } = useSelector((state: RootState) => state.episodes);
  const [btnMsg, setBtnMsg] = useState<string>("Load More");
  const [loadDisabled, setLoadDisabled] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchEpisodes(currentPage));
  }, [currentPage, dispatch]);
  return (
    <main className="text-bg-dark">
      <Hero title="Episodes" />
      <div className="container mt-5 d-flex flex-wrap justify-content-around">
        {episodes.map((ep) => (
          <EpisodeCard
            key={ep.id}
            name={ep.name}
            episode={ep.episode}
            airDate={ep.airDate}
          />
        ))}
      </div>
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary my-3"
          disabled={loadDisabled}
          onClick={() => {
            if (currentPage == 3) {
              setLoadDisabled((prev) => !prev);
              setBtnMsg("This is the last page!!");
              return;
            }
            dispatch(incrementPage());
            dispatch(fetchEpisodes(currentPage + 1));
          }}
        >
          {btnMsg}
        </button>
      </div>
    </main>
  );
}
