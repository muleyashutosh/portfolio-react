import data from "../utils/data";

const Contact = () => {
  const { email } = data;
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            Have a project in mind or just want to say hi?<br />
            My inbox is always open.
          </p>
          <a
            className="cta-btn cta-btn--contact"
            href={`mailto:${email}`}
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
