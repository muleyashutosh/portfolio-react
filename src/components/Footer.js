import { KeyboardArrowUp, GitHub, LinkedIn } from "@mui/icons-material";
import data from "../utils/data";

const Footer = () => {
  const { socials } = data;
  return (
    <footer className="footer">
      <div className="container">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="back-to-top"
          aria-label="Back to top"
        >
          <KeyboardArrowUp />
        </button>
        <div className="social-links">
          <a rel="noreferrer" href={socials.github} target="_blank" aria-label="GitHub">
            <GitHub />
          </a>
          <a rel="noreferrer" href={socials.linkedin} target="_blank" aria-label="LinkedIn">
            <LinkedIn />
          </a>
        </div>
        <p className="footer__text">
          © {new Date().getFullYear()} Ashutosh Muley. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
