import "./index.scss"; // Import your custom styles here
import resume from "../../assets/brandonForde.pdf";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <a
        className="resume-download"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download Resume
      </a>

      <div className="skills-section spherespinner">
        <h2 className="skills-subtitle sphere">
          Computer Science Applied to JavaScript
        </h2>
        <ul className="skills-list sphere">
          <li className="face1">Algorithms (Searches, Sorts)</li>
          <li className="face2">Performance</li>
          <li className="face3">Time Complexity</li>
          <li className="face4">Big O Notation</li>
          <li className="face5">Data Structures</li>
        </ul>

        <h2 className="skills-subtitle ">Browser Based Technologies</h2>
        <ul className="skills-list sphere">
          <li className="face6">HTML/CSS</li>
          <li className="face7">JavaScript/jQuery</li>
          <li className="face8">Responsive Design</li>
          <li className="face9">Bootstrap</li>
          <li className="face10">Progressive Web Applications (PWAs)</li>
          <li className="face11">Local Storage, Session Storage, IndexedDB</li>
          <li className="face12">React.js</li>
        </ul>

        <h2 className="skills-subtitle sphere">Databases</h2>
        <ul className="skills-list face3">
          <li className="face13">MySQL</li>
          <li className="face14">MongoDB</li>
        </ul>

        <h2 className="skills-subtitle sphere">Server Side Development</h2>
        <ul className="skills-list face4">
          <li className="face15">User Authentication</li>
          <li className="face16">Template Engines</li>
          <li className="face17">
            MERN Stack (MongoDB, Express.js, React.js, Node.js)
          </li>
        </ul>

        <h2 className="skills-subtitle sphere">API Design</h2>
        <ul className="skills-list face5">
          <li className="face18">Client-Server Model</li>
          <li className="face19">API</li>
          <li className="face20">Rest</li>
          <li className="face21">JSON</li>
          <li className="face22">AJAX (Fetch API)</li>
          <li className="face23">HTTP request methods</li>
          <li className="face24">GraphQL</li>
        </ul>

        <h2 className="skills-subtitle sphere">Deployment and Delivery</h2>
        <ul className="skills-list face6">
          <li className="face25">Heroku</li>
          <li className="face26">Git</li>
          <li className="face26">GitHub Pages</li>
          <li className="face27">Shell Scripting</li>
          <li className="face28">Unit Testing</li>
          <li className="face29">Linting</li>
          <li className="face30">Continuous Integration</li>
        </ul>
      </div>
    </div>
  );
}
