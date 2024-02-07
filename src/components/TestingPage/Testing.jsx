import { useRef, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP here
import './testing.scss'
import { ScrollTrigger } from 'gsap/all';




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
  



function Testing() {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (gridElement) {
      // Your gridrotator initialization code goes here
      // You can use vanilla JavaScript or other libraries like GreenSock (GSAP)
      // for animations and transitions

      // Example using GreenSock (GSAP) for animations:
      gsap.fromTo(gridElement, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2});
      gsap.registerPlugin(ScrollTrigger);

// Your gridrotator initialization code goes here

// Example using GSAP animations:
gsap.from(gridElement.children, {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: gridElement,
    start: 'top 80%',
  },
});

gsap.from(gridElement.children, {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: gridElement,
    start: 'top 80%',
  },
});

gsap.from(gridElement.children, {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: gridElement,
    start: 'top 80%',
  },
});

// Continue adding animations for the remaining effects in a similar manner

// 'slideTop', 'slideBottom', 'rotateLeft', 'rotateRight', 'rotateTop',
// 'rotateBottom', 'scale', 'rotate3d', 'rotateLeftScale', 'rotateRightScale',
// 'rotateTopScale', 'rotateBottomScale'

// Make sure to adjust the properties, durations, easings, and scroll triggers as needed


      return () => {
        // Clean up any resources or animations when the component unmounts
        // Example: gsap.to(gridElement, { opacity: 0, duration: 1 });
      };
    }
  }, []); // Empty dependency array to run this effect once

  return (
    <div className='test'>
      {/* Add your content and grid element here */}
      <div ref={gridRef}>
        {/* Your grid items go here */}
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.live}>
                <img src={project.image} alt={project.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testing;
