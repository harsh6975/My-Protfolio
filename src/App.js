import "./App.css";
import Hero from "./Component/Hero/Hero";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";

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
        <section id="Project">
          <Project />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
