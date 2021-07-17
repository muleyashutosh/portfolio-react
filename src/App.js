import { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons";
import JumboTron from "./JumboTron";
import About from "./About";
import ProjectSection from "./ProjectSection";
import Contact from "./Contact";
import Footer from "./Footer";
import scrollReveal from "./scrollReveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    scrollReveal();
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <span data-theme={darkMode ? "dark" : "light"}>
      <div id="top">
        <IconButton
          color="primary"
          className="darkSwitch"
          aria-label="toggle-dark"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <BrightnessHigh fontSize="large" />
          ) : (
            <BrightnessLow fontSize="large" />
          )}
        </IconButton>
      </div>
      <JumboTron />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </span>
  );
};

export default App;
