import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./testing.scss";
// import "./timeLineElements";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../../assets/images/logo-lines-2 (1).svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/react.svg";
import resume from "../../assets/brandonForde.pdf";
import timelineElemnets from "../Resume/timeLineElements";


const Testing = () => {
  let WorkIconStyles = { background: "#06d6a0" };
  let schoolIconStyles = { background: "##9c74f" };
  return (
    <div>
      <div className="container">
      <h1 className="title">Scroll Down</h1>
      <a
        className="resume-download"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download Resume
      </a>
      <div>
  <h2>Computer Science Applied to JavaScript</h2>
  <ul>
    <li>Algorithms (Searches, Sorts)</li>
    <li>Performance</li>
    <li>Time Complexity</li>
    <li>Big O Notation</li>
    <li>Data Structures</li>
  </ul>

  <h2>Browser Based Technologies</h2>
  <ul>
    <li>HTML/CSS</li>
    <li>JavaScript/jQuery</li>
    <li>Responsive Design</li>
    <li>Bootstrap</li>
    <li>Progressive Web Applications (PWAs)</li>
    <li>Local Storage, Session Storage, IndexedDB</li>
    <li>React.js</li>
  </ul>

  <h2>Databases</h2>
  <ul>
    <li>MySQL</li>
    <li>MongoDB</li>
  </ul>

  <h2>Server Side Development</h2>
  <ul>
    <li>User Authentication</li>
    <li>Template Engines</li>
    <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
  </ul>

  <h2>API Design</h2>
  <ul>
    <li>Client-Server Model</li>
    <li>API</li>
    <li>Rest</li>
    <li>JSON</li>
    <li>AJAX (Fetch API)</li>
    <li>HTTP request methods</li>
    <li>GraphQL</li>
  </ul>

  <h2>Deployment and Delivery</h2>
  <ul>
    <li>Heroku</li>
    <li>Git</li>
    <li>GitHub Pages</li>
    <li>Shell Scripting</li>
    <li>Unit Testing</li>
    <li>Linting</li>
    <li>Continuous Integration</li>
  </ul>
</div>

      <VerticalTimeline>
        {timelineElemnets.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? WorkIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <script src="timeline.js"></script>
    </div>
    </div>
  );
};

export default Testing;
