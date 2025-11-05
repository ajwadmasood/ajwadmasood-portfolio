import aboutImg from "../images/code.png";
import Title from "./Title";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img
            src={aboutImg}
            height="400px"
            className="hero-photo"
            alt="about img"
          />
        </article>
        <article className="about-info">
          <Title title="about" section="about" />
          <p>
            I'm a CS Master's student at The University of Texas at Dallas and a software engineer who enjoys turning ideas into scalable products.
          </p>
          <p>
            I’ve built and deployed end-to-end systems, from fast, responsive UIs in React to distributed backends on AWS handling millions of requests. I care about great developer experience, clean code, and building things that actually help people.
          </p>
          <p>
            Always learning, experimenting, and shipping.
          </p>
          <Link class="btn hero-btn" to="/about">
            about me
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
