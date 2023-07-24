import "./App.css";
import Hero from "./Component/Hero/Hero";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <section id="Hero">
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
