import data from "../utils/data";

const Contact = () => {
  const { email } = data;
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">Send me a mail.</p>
          <a
            target="_blank"
            className="cta-btn cta-btn--resume"
            href={`mailto:${email}`}
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
