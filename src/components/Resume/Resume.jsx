import './index.scss' // Import your custom styles here

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <a
        className="resume-download"
        href="src\assets\brandonForde.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      
      <div className="skills-section">
        <h2 className="skills-subtitle">
          Computer Science Applied to JavaScript
        </h2>
        <ul className="skills-list">
          <li>Algorithms (Searches, Sorts)</li>
          <li>Performance</li>
          <li>Time Complexity</li>
          <li>Big O Notation</li>
          <li>Data Structures</li>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="skills-subtitle">Browser Based Technologies</h2>
        <ul className="skills-list">
          <li>HTML/CSS</li>
          <li>JavaScript/jQuery</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>Progressive Web Applications (PWAs)</li>
          <li>Local Storage, Session Storage, IndexedDB</li>
          <li>React.js</li>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="skills-subtitle">Databases</h2>
        <ul className="skills-list">
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="skills-subtitle">Server Side Development</h2>
        <ul className="skills-list">
          <li>User Authentication</li>
          <li>Template Engines</li>
          <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="skills-subtitle">API Design</h2>
        <ul className="skills-list">
          <li>Client-Server Model</li>
          <li>API</li>
          <li>Rest</li>
          <li>JSON</li>
          <li>AJAX (Fetch API)</li>
          <li>HTTP request methods</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="skills-subtitle">Deployment and Delivery</h2>
        <ul className="skills-list">
          <li>Heroku</li>
          <li>Git</li>
          <li>GitHub Pages</li>
          <li>Shell Scripting</li>
          <li>Unit Testing</li>
          <li>Linting</li>
          <li>Continuous Integration</li>
        </ul>
      </div>
    </div>
  )
}
