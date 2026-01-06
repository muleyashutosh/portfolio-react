import { useEffect, useState } from "react";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import { BrightnessLow, BrightnessHigh } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import JumboTron from "./components/JumboTron";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import scrollReveal from "./utils/scrollReveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Sora, sans-serif",
  },
});

const App = () => {
  useEffect(() => {
    scrollReveal();
  }, []);

  const darkValue = localStorage.getItem("DARK_MODE");
  // Default to dark mode if no preference is stored
  const [darkMode, setDarkMode] = useState(darkValue === null ? true : darkValue === "true");

  return (
    <ThemeProvider theme={theme}>
      <div data-theme={darkMode ? "dark" : "light"}>
        <Navbar />
        <div id="top">
          <IconButton
            color="primary"
            className="darkSwitch"
            aria-label="toggle-dark"
            onClick={() => {
              setDarkMode((prev) => {
                localStorage.setItem("DARK_MODE", !prev);
                return !prev;
              });
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
        <Experience />
        <Skills />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
