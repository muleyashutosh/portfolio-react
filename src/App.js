import { useEffect, useState } from "react";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import { BrightnessLow, BrightnessHigh } from "@mui/icons-material";
import JumboTron from "./components/JumboTron";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import scrollReveal from "./utils/scrollReveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const App = () => {
  useEffect(() => {
    scrollReveal();
  }, []);

  const darkValue =
    !localStorage.getItem("DARK_MODE")
      ? false
      : localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(darkValue === "true" ? true : false);

  return (
    <ThemeProvider theme={theme}>
      <div data-theme={darkMode ? "dark" : "light"}>
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
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
