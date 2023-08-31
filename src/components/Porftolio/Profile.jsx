import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Gallery } from 'react-grid-gallery'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Profile = () => {
  const [expandedImageIndex, setExpandedImageIndex] = useState(-1)

  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeOutID)
    }
  }, [])

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
  ];
  const repeatedProjects = projects.flatMap((project) => [
    project,
    project,
    project,
    project,
  ])

  for (let i = repeatedProjects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[repeatedProjects[i], repeatedProjects[j]] = [
      repeatedProjects[j],
      repeatedProjects[i],
    ]
  }
  // shufflerepeatedProjects(repeatedProjects);

  const handleImageClick = (index) => {
    setExpandedImageIndex(index)
  }

  return (
    <div>
      <section id="work" className="jobs">
        <h1>
          <div className="glitch">
            <AnimatedLetters
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              letterClass={letterClass}
              idx={15}
            />
          </div>
        </h1>
        <h4>hover to get details of each project</h4>
        <div className="gallery-container">
          <Gallery
            images={repeatedProjects.map((project, index) => ({
              src: project.image,
              thumbnail: project.image,
              thumbnailWidth: 320,
              thumbnailHeight: 212,
              isSelected: expandedImageIndex === index,
              customOverlay: (
                <div className="project-caption">
                  <h3>{project.title}</h3>
                  <h5>{project.languages}</h5>
                  <h5>
                    <NavLink exact to={project.live} className="deploy-link">
                      <FontAwesomeIcon icon={faPaperPlane} /> Deploy Link
                    </NavLink>
                    <NavLink exact to={project.repo} className="repo-link">
                      <FontAwesomeIcon icon={faGithubAlt} /> Repo Link
                    </NavLink>
                  </h5>
                  <p>get more info at the repo link</p>
                  <div className="project-links">
                    <span> </span>
                  </div>
                </div>
              ),
            }))}
            enableImageSelection={true}
            onClickThumbnail={handleImageClick}
          />
        </div>
        <hr />
      </section>
    </div>
  )
}

export default Profile
