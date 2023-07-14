import "./App.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <section id="Home">
      <Home />
      </section>
      <section id="About">
      <About />
      </section>
      {/* <section id="Home">
      <Skill />
      </section> */}
    </div>
  );
}

export default App;
