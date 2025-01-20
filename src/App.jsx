import { useState } from "react";
import "./styles/styles.scss";

// Components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Contact />
    </>
  );
}

export default App;
