import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const data = {
  about: [
    "Hey there! My name is Ashutosh Muley and I am an aspiring software developer, currently pursuing my Bachelors' of Engineering degree in Information Technology. I have been working with JavaScript and Python for a while now. Apart from that I am also familiar with ReactJS, Node.js, Flask, JQuery, webpack, RESTful APIs, etc.",
    "When it comes to my work, I always leave no stone unturned. I believe I am a fast learner with high grasping abilities. It would be great working with you, Contact Me.",
  ],
  resume:
    "https://drive.google.com/file/d/1tr5lNCYY1m6hKml8kZ_TI1OCwLuYFT75/view?usp=sharing",
  email: "muleyashutosh@gmail.com",
  socials: {
    twitter: "https://twitter.com/muley_ashu",
    codepen: "https://codepen.io/muleyashutosh",
    linkedin: "https://www.linkedin.com/in/muleyashutosh/",
    github: "https://github.com/muleyashutosh",
  },
  projects: [
    {
      title: "Plagiarism Checker",
      description: [
        "A simple Web App to analyse a given text as plagiarised or unique.",
        "Used HTML, CSS, and JavaScript for the Front-end and used web Scraping in php to get Google Search results for all the sentences in the given text and compare for a match.",
        "Generates a Score based on the Plagiarism level and Unique lines found.",
      ],
      liveUrl: "https://plagiarism-checker-project.herokuapp.com/",
      sourceUrl: "https://github.com/muleyashutosh/plagiarism-checker",
      screenshot: project1,
    },
    {
      title: "Smart-Brain App",
      description: [
        "An App that detects the faces in a given photo.",
        "Used React JS for the front-end, Node.js for the backend server which is connected to a PostgreSQL database for storing user information.",
        "Used a Face Detection API by Clarifai to get search results.",
      ],
      liveUrl: "https://muleyashutosh.github.io/smart-brain/",
      sourceUrl: "https://github.com/muleyashutosh/smart-brain",
      screenshot: project2,
    },
    {
      title: "E-Commerce Database System",
      description: [
        "An App that detects the faces in a given photo.Used HTML, CSS, JavaScript to Create the Frontend templates.",
        "Used FLASK with python backend for connecting to a MySQL database.",
        "Used Git to coordinate with the team members.",
        "Used Google's Material Design Components and fundamentals to create a beautiful UI.",
      ],
      liveUrl: "https://elcarto.xyz",
      sourceUrl: "https://github.com/muleyashutosh/e-commerce-system",
      screenshot: project3,
    },
  ],
};

export default data;
