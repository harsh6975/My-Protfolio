import "./App.css";
import Hero from "./Component/Hero/Hero";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";

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
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
