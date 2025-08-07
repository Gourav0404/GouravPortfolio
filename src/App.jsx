import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certificates from "./Components/Certificates";

export default function App() {
  return (
    <div className="bg-gray-400 text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Certificates />
      <Footer />
    </div>
  );
}
