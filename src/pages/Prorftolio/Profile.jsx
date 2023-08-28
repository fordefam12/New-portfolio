import React from "react";

export default function Profile() {
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
      image: "https://github.com/fordefam12/weatherDashboard/blob/main/weather%20dashboard.png?raw=true c:\Users\forde\Downloads\Your paragraph text.png",
      description: "This project is a weather dashboard that allows users to search for weather information for different locations. It provides current weather conditions as well as a 5-day forecast. The project was built using JavaScript, HTML, and CSS.",
      repo: "https://github.com/fordefam12/weatherDashboard",
      live: "https://fordefam12.github.io/weatherDashboard/",
    },
    {
      id: 2,
      title: "employee tracker",
      languages: "javascript,MySQL,Node.js",
      packages: "Node, MySQL",
      image: "https://github.com/fordefam12/EmployeeTracker/blob/main/screenshot%20employee%20tracker.png?raw=true",
      description: "The Employee Tracker is a command-line application that helps businesses keep track of their employees. It uses MySQL and Node.js to manage employee information, including roles, departments, and managers.",
      repo: "https://github.com/fordefam12/EmployeeTracker",
      live: "https://www.awesomescreenshot.com/video/19490019?key=3148e33e813d3ddc9c0ccf8a9e519592",
    },
    {
      id: 3,
      title: "game box",
      languages: "javascript, html, css",
      packages: "Unknown",
      image: "https://github.com/fordefam12/gameBox/blob/main/images/project-1%20readme%20photo.PNG?raw=true",
      description: "Game Box is a game collection library built using JavaScript, HTML, and CSS. It includes classic games like Snake, Tetris, and Pong.",
      repo: "https://github.com/fordefam12/gameBox",
      live: "https://fordefam12.github.io/gameBox/",
    },
    {
      id: 4,
      title: "Plutus",
      languages: "javascript, html, css, handlebars",
      packages: "Unknown",
      image: "https://github.com/fordefam12/Plutus/blob/main/public/asset/homepageSrn.png?raw=true",
      description: "Plutus is a budget tracking application built using JavaScript, HTML, CSS, and Handlebars. It helps users manage their finances by tracking income, expenses, and providing insightful visualizations.",
      repo: "https://github.com/fordefam12/Plutus",
      live: "https://shielded-stream-48370-06cb0de7f892.herokuapp.com/",
    },
  ];
  
  const chunkProjects = (projects, size) => {
    const chunkedProjects = [];
    for (let i = 0; i < projects.length; i += size) {
      chunkedProjects.push(projects.slice(i, i + size));
    }
    
    return chunkedProjects;
  };

  const chunkedProjects = chunkProjects(projects, 2);
  console.log(chunkedProjects);

  return (
    <div>
      <section id="work" className="jobs">
        <h2 className="section-title secondary-border">Projects</h2>
        {chunkedProjects.map((row, rowIndex) => (
          <div key={rowIndex} className="row mb-4">
            {row.map((project) => (
              <div key={project.id} className="col-md-6">
                <img
                src={project.image}
                alt={project.title}
                style={{ width: "200px", height: "200px" }}
              />
              <h3>{project.title}</h3>
              <h5>{project.languages}</h5>
              <p>{project.description}</p>
                {/* {console.log(chunkedProjects[0][0])} */}
                {chunkedProjects.id}
              </div>
            ))}
            
          </div>
        ))}
        <hr />
      </section>
    </div>
  );
}