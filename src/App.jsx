import React from "react";
import "./App.css";
import TimezoneDisplay from "./components/TimezoneDisplay";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Your Name</h1>
        <div className="social-links">
          <a
            href="https://github.com/piyush-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="content">
        <h2>Hi there! 👋</h2>

        <blockquote>
          <p>Welcome to my resume page!</p>
        </blockquote>

        <section>
          <h3>Who am I?</h3>
          <p>
            I am [Your Name], a developer living in India. Let me show you the
            time difference between India and your location:
          </p>

          <TimezoneDisplay />

          <p>
            Not too bad right? (Psst, it's a tiny React component that
            auto-detects your timezone!)
          </p>
        </section>

        <hr />

        <section>
          <h3>My Story</h3>
          <p>
            Let's get started. I am a developer passionate about building great
            software...
          </p>
          <p>
            [Add your story here - education, experience, what you're passionate
            about]
          </p>
        </section>

        <section>
          <h3>Why me?</h3>
          <p>
            I love to experiment with tools and technologies. Here are some
            things I've worked on:
          </p>

          <h4>Projects</h4>
          <ul>
            <li>
              <strong>Project 1:</strong> Description of your first project
            </li>
            <li>
              <strong>Project 2:</strong> Description of your second project
            </li>
          </ul>

          <h4>Skills</h4>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React / Vue / Angular</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Add more skills...</li>
          </ul>
        </section>

        <section>
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Job Title at Company</h4>
            <p className="date">Jan 2020 - Present</p>
            <p>Description of your role and achievements...</p>
          </div>

          <div className="experience-item">
            <h4>Previous Job Title at Company</h4>
            <p className="date">Jan 2018 - Dec 2019</p>
            <p>Description of your role and achievements...</p>
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <div className="experience-item">
            <h4>Degree Name</h4>
            <p className="date">University Name, Year</p>
          </div>
        </section>

        <section>
          <h3>Contact</h3>
          <p>
            Feel free to reach out to me at{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </section>

        <hr />

        <footer>
          <p>
            There is a bunch more I would love to talk about, but I hope this
            gives you a good overview. Looking forward to connecting!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
