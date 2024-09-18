import Hero from "../components/Hero";
import EpisodeCard from "../components/EpisodesCard";
export default function Episodes() {
  return (
    <main className="text-bg-dark">
      <Hero title="Episodes" />
      <div className="container my-5 d-flex flex-wrap justify-content-around">
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
        <EpisodeCard name="Pilot" episode="S01E01" airDate="December 2, 2013" />
      </div>
    </main>
  );
}
