import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  fetchEpisodes,
  episodesSelectors,
} from "../redux/slices/episodesSlice";
import Hero from "../components/Hero";
import EpisodeCard from "../components/EpisodeCard";
export default function Episodes() {
  const dispatch: AppDispatch = useDispatch();
  const episodes = useSelector(episodesSelectors.selectAll);
  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);
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
    </main>
  );
}
