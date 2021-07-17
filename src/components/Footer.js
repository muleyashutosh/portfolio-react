import data from "../utils/data";

const Footer = () => {
  const { socials } = data;
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <p
          onClick={() => {
            window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
          }}
          className="back-to-top"
          role="button"
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </p>
        <div className="social-links">
          <a rel="noreferrer" href={socials.twitter} target="_blank">
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a rel="noreferrer" href={socials.codepen} target="_blank">
            <i className="fa fa-codepen fa-inverse"></i>
          </a>
          <a rel="noreferrer" href={socials.linkedin} target="_blank">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href={socials.github} target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
