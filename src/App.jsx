import { useState, useEffect, useRef } from "react";
import "./App.css";
import Business from "./components/Business";
import Company from "./components/Company";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [navbarTheme, setNavbarTheme] = useState("light");
  const introRef = useRef(null);
  const navbarRef = useRef(null);
  const companyRef = useRef(null); // Ref for the component after Intro

  useEffect(() => {
    const handleScroll = () => {
      if (introRef.current && navbarRef.current && companyRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        const introRect = introRef.current.getBoundingClientRect();

        // Check if the navbar is currently within the bounds of the Intro section
        const isOverIntro =
          introRect.top <= navbarHeight && introRect.bottom > navbarHeight;

        if (isOverIntro) {
          setNavbarTheme("dark");
        } else {
          setNavbarTheme("light");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Navbar ref={navbarRef} theme={navbarTheme} />
        <Hero />
        <div ref={introRef}>
          <Intro />
        </div>
        <div ref={companyRef}>
          <Company />
        </div>
        <Business />
        <Form />
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
