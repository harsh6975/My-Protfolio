import React, { Suspense, lazy } from "react";
import "./App.css";
// import Hero from "./Component/Hero/Hero";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
// import About from "./Component/About/About";
// import Project from "./Component/Project/Project";
// import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import ArrowToTop from "./utils/Arrow/ArrowToTop";
import Loading from "./utils/Loading/Loading";
const Hero = lazy(() => import("./Component/Hero/Hero"));
const About = lazy(() => import("./Component/About/About"));
const Project = lazy(() => import("./Component/Project/Project"));
const Contact = lazy(() => import("./Component/Contact/Contact"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="App">
          <ArrowToTop />
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
          <section id="Footer">
            <Footer />
          </section>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
