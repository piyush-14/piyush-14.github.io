import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="app">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Piyush Paliwal</h1>
            <p className="hero-description">
              software engineer with extensive experience in building and
              optimizing large-scale applications across diverse teams. I
              specialize in creating user-friendly front-end solutions for both
              mobile and desktop platforms.
            </p>

            <div className="hero-details">
              <p className="section-label">SPECIALIZE IN:</p>
              <p>
                ReactJS, JavaScript, HTML, CSS, and performance optimization
              </p>

              <p className="section-label">CORE SKILLS:</p>
              <p>
                Data structures, algorithms, and high-quality software solutions
              </p>
            </div>

            <a href="#" className="download-resume">
              Download my Resume ⬇️
            </a>

            <div className="hero-connect">
              <p className="section-label">CONNECT WITH ME:</p>
              <div className="social-links">
                <a
                  href="https://github.com/piyush-14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a href="mailto:your.email@example.com">Email ↗</a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-placeholder">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="placeholder-icon"
              >
                <circle cx="100" cy="75" r="35" fill="currentColor" />
                <path
                  d="M50 150 Q100 120 150 150 L150 200 L50 200 Z"
                  fill="currentColor"
                />
              </svg>
              <p className="placeholder-text">Add Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <h2 className="section-heading">about.</h2>
        <p className="about-text">
          I am a software engineer with extensive experience in building and
          optimizing large-scale applications across diverse teams. I specialize
          in creating user-friendly front-end solutions for both mobile and
          desktop platforms. My proficiency in ReactJS, JavaScript, HTML, and
          CSS, combined with a solid understanding of data structures and
          algorithms, allows me to deliver high-quality software solutions that
          enhance user experience and drive business value.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <h2 className="section-heading">skills.</h2>
        <div className="skill-tags">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">React-Relay</span>
          <span className="skill-tag">GraphQL</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">Webpack</span>
          <span className="skill-tag">Unit Testing</span>
          <span className="skill-tag">Module Federation</span>
          <span className="skill-tag">Kafka</span>
          <span className="skill-tag">Redis</span>
          <span className="skill-tag">Jest</span>
          <span className="skill-tag">GitLab CI</span>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="content-section">
        <h2 className="section-heading">work.</h2>

        <div className="work-item">
          <div className="company-logo-placeholder">
            <span>Mindtickle</span>
          </div>

          <div className="work-details">
            <p className="company-name">MINDTICKLE</p>
            <h3 className="job-title">SDE-II</h3>
            <p className="job-location">Pune • 03/2021 - Present</p>

            <ul className="job-responsibilities">
              <li>
                Integrated LLM-powered reviewer guidance feature with real-time
                streaming via <strong>GraphQL subscriptions</strong>
              </li>
              <li>
                Designed and implemented <strong>Kafka-based pipeline</strong>{" "}
                to stream LLM-generated responses to the frontend
              </li>
              <li>
                Enabled seamless message rendering in React frontend using{" "}
                <strong>
                  GraphQL subscriptions and Redis pub-sub architecture
                </strong>
              </li>
              <li>
                Collaborated on end-to-end system integrating LLM output with
                event-driven messaging{" "}
                <strong>(Kafka → Redis → GQL → UI)</strong>
              </li>
              <li>
                Assisted in developing a <strong>drag-and-drop</strong>{" "}
                experience to design custom dashboards
              </li>
              <li>
                Designed an adaptable architecture supporting seamless{" "}
                <strong>form integration</strong> within the system
              </li>
              <li>
                Minimised the cumulative layout shift on homepage to enhance
                user experience
              </li>
              <li>
                Made it performant by <strong>lazily loading widgets</strong>{" "}
                for the admin as well as in learner flows
              </li>
              <li>
                Designed a robust architecture in vanilla JS which fetched data
                and pre-build file from an endpoint to render different widgets
                on its own
              </li>
              <li>
                Ensured the architecture is independent of rendering environment
                and designed to allow manipulation from external resources while
                preserving encapsulation
              </li>
              <li>
                Contributed to improving page performance by optimizing{" "}
                <strong>chunking strategy</strong> and{" "}
                <strong>page weight</strong>
              </li>
              <li>
                Implemented lazy loading of page chunks to improve{" "}
                <strong>LCP</strong>
              </li>
              <li>
                Enhanced performance of existing projects through techniques
                such as <strong>code splitting, lazy loading</strong>, API
                caching, and parallel API calling in complex scenarios
              </li>
              <li>
                Implemented unit testing setup using <strong>Jest</strong> and
                integrated it with <strong>GitLab CI</strong> to enforce code
                coverage thresholds for PRs, ensuring consistent code quality
                across the frontend codebase
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="content-section">
        <h2 className="section-heading">connect.</h2>
        <p className="about-text">
          Feel free to reach out to me for collaboration, questions, or just to
          say hi! I'm always open to interesting conversations and
          opportunities.
        </p>
        <div className="connect-links">
          <a href="mailto:your.email@example.com" className="connect-link">
            📧 Email
          </a>
          <a
            href="https://github.com/piyush-14"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
          >
            💻 GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
          >
            💼 LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Your Name. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
