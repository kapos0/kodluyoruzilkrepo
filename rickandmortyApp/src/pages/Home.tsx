import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
export default function Home() {
  return (
    <main className="text-bg-dark">
      <Hero title="Characters" />
      <div className="container my-5 d-flex flex-wrap justify-content-between">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </main>
  );
}
