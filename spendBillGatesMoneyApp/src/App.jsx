import Header from "./components/Header";
import Money from "./components/Money";
import Items from "./components/Items";
import Invoice from "./components/Invoice";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="root_container">
        <Header />
        <Money />
        <Items />
        <Invoice />
      </div>
      <Footer />
    </>
  );
}

export default App;
