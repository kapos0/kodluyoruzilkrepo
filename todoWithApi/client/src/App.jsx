import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}