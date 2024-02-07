import { useEffect, useState, useRef } from "react";
import "../../js/AnimatedResponsiveImageGrid/css/demo.css";
import "../../js/AnimatedResponsiveImageGrid/css/fallback.css";
import "../../js/AnimatedResponsiveImageGrid/css/style.css";
import '../../js/AnimatedResponsiveImageGrid/js/jquery.gridrotator'
import "./Projects.scss"; // Add your custom styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import $  from 'jquery'

const projects = [
  {
    id: 0,
    title: "code quiz",
    languages: "javascript, html, css",
    packages: "N/A",
    image:
      "https://github.com/fordefam12/code-quiz/blob/main/C0d3%209u1z%20(Quiz).png?raw=true",
    description:
      "i wanted to assist other new devolopers in their coding knowlegde so i built this project to test a persons knowledge on coding.",
    repo: "https://github.com/fordefam12/code-quiz",
    live: "https://fordefam12.github.io/code-quiz/",
  },
  {
    id: 1,
    title: "weather dashBoard",
    languages: "javascript, html, css",
    packages: "N/A",
    image:
      "https://github.com/fordefam12/weatherDashboard/blob/main/weather%20dashboard%20(1).png?raw=true c:Users\fordeDownloadsYour paragraph text.png",
    description:
      "This project is a weather dashboard that allows users to search for weather information for different locations. It provides current weather conditions as well as a 5-day forecast. The project was built using JavaScript, HTML, and CSS.",
    repo: "https://github.com/fordefam12/weatherDashboard",
    live: "https://fordefam12.github.io/weatherDashboard/",
  },
  {
    id: 2,
    title: "employee tracker",
    languages: "javascript,MySQL,Node.js",
    packages: "Node, MySQL",
    image:
      "https://github.com/fordefam12/EmployeeTracker/blob/main/screenshot%20employee%20tracker.png?raw=true",
    description:
      "The Employee Tracker is a command-line application that helps businesses keep track of their employees. It uses MySQL and Node.js to manage employee information, including roles, departments, and managers.",
    repo: "https://github.com/fordefam12/EmployeeTracker",
    live: "https://www.awesomescreenshot.com/video/19490019?key=3148e33e813d3ddc9c0ccf8a9e519592",
  },
  {
    id: 3,
    title: "game box",
    languages: "javascript, html, css",
    packages: "Unknown",
    image:
      "https://github.com/fordefam12/gameBox/blob/main/images/GameBox%20(2).png?raw=true",
    description:
      "Game Box is a game collection library built using JavaScript, HTML, and CSS. It includes classic games like Snake, Tetris, and Pong.",
    repo: "https://github.com/fordefam12/gameBox",
    live: "https://fordefam12.github.io/gameBox/",
  },
  {
    id: 4,
    title: "Plutus",
    languages: "javascript, html, css, handlebars",
    packages: "Unknown",
    image:
      "https://github.com/fordefam12/Plutus/blob/main/public/asset/homepageSrn.png?raw=true",
    description:
      "Plutus is a budget tracking application built using JavaScript, HTML, CSS, and Handlebars. It helps users manage their finances by tracking income, expenses, and providing insightful visualizations.",
    repo: "https://github.com/fordefam12/Plutus",
    live: "https://shielded-stream-48370-06cb0de7f892.herokuapp.com/",
  },
  {
    id: 5,
    title: "Awristocrats",
    languages: "javascript, react, scss, ",
    packages: "Unknown",
    image:
      "https://github.com/fordefam12/Awristocrats/blob/main/Awristocrats%20(2).png?raw=true",
    description:
      "The philosophy at Awristocrats is that a watch is not just a timekeeping device; it's a reflection of your unique personality and a symbol of your discerning taste. Their curated collection of exquisite luxury watches is designed to cater to your desire for the finest craftsmanship, precision, and unparalleled beauty.",
    repo: "https://github.com/fordefam12/Awristocrats",
    live: "https://arcane-caverns-68488-3502f0db0406.herokuapp.com/",
  }]
  

const getRandomAnimationClass = () => {
  const animationClasses = [
    "fadeIn",
    "fadeOut",
    "slideLeft",
    "slideRight",
    "slideTop",
    "slideBottom",
    "rotateLeft",
    "rotateRight",
    "rotateTop",
    "rotateBottom",
    "rotate3d",
    "rotateLeftScale",
    "rotateRightScale",
    "rotateTopScale",
    "rotateBottomScale",
    'fadeIn3d',
    "fadeOut3d",
    "slideLeft3d",
    "slideRight3d",
    "slideTop3d",
    "slideBottom3d",
    "rotateLeft3d",
    "rotateRight3d",
    "rotateTop3d",
    "rotateBottom3d",
    "scale3d",
    "rotate3d",
    "rotateLeftScale3d",
    "rotateRightScale3d",
    "rotateTopScale3d",
    "rotateBottomScale3d",
  ];
  return animationClasses[Math.floor(Math.random() * animationClasses.length)];
};

// $(document).ready(function () {
//   // Initialize GridRotator on a specific element (replace 'your-element-selector' with your selector)
//   $('.your-element-selector').gridrotator({
//     // Add your configuration options here
//   });
// });


const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const duplicateArray = (array, times) => {
  const duplicated = [];
  for (let i = 0; i < times; i++) {
    duplicated.push(...array);
  }
  return duplicated;
};

const Projects = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const rows = 10; // Number of rows
    const columns = 10; // Number of columns
    const projectsToDisplay = rows * columns;
  
    // Shuffle the projects array once at the beginning
    const shuffled = shuffleArray(projects);
    const projectsSubset = shuffled.slice(0, projectsToDisplay);
    setShuffledProjects(duplicateArray(projectsSubset, 5)); // Adjust the number of duplicates as needed
  
    // Initialize the gridrotator effect
    $(document).ready(function () {
    if (gridRef.current) {
      const grid = $(gridRef.current);
      grid.gridrotator({
        rows,
        columns,
        slideshow: true,
        interval: 3000, // Change image every 3 seconds
        maxStep: 2,
        preventClick: true,
        w1024: {
          rows: 5,
          columns: 5,
        },
        w768: {
          rows: 4,
          columns: 4,
        },
        w480: {
          rows: 3,
          columns: 3,
        },
        w320: {
          rows: 2,
          columns: 2,
        },
        autoplay: true,
      });
  
      return () => {
        // Clean up the gridrotator effect when the component unmounts
        grid.gridrotator("destroy");
        console.log(grid.gridrotator());
      };
    }
  }, [gridRef]);
},[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimationIndex((prevIndex) =>
        prevIndex === shuffledProjects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, [shuffledProjects]);

  const handleProjectHover = (projectIndex) => {
    setHoveredProject(projectIndex);

    // Reset the hover effect after 5 seconds
    setTimeout(() => {
      setHoveredProject(null);
    }, 5000);
  };

  return (
    <div className="projects-page">
      <div className="image-grid-container">
        <ul className="image-grid" ref={gridRef}>
          {shuffledProjects.map((project, index) => {
            const animationClass =
              index === currentAnimationIndex ? getRandomAnimationClass() : "";
            const isHovered = index === hoveredProject;

            return (
              <li
                className={` grid-item project ${animationClass} ${
                  isHovered ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <h3>{project.title}</h3>
                  <a href={project.live} className="deploy-link">
                    <FontAwesomeIcon icon={faPaperPlane} /> Deploy Link
                  </a>
                  <a href={project.repo} className="repo-link">
                    <FontAwesomeIcon icon={faGithubAlt} /> Repo Link
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Projects;
