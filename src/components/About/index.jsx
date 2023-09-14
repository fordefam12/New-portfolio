import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBitcoin,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeOutID)
    }
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <div className="glitch" data-text="AboutMe">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={15}
              ></AnimatedLetters>
            </div>
          </h1>

          <p>
          I am a dedicated and passionate entry-level software developer based in Houston, TX. With a strong desire to learn and grow in the field, I am actively seeking opportunities that will allow me to apply my technical skills and contribute to innovative projects. My enthusiasm for problem-solving, combined with my organizational abilities, makes me a valuable asset to any team.
          </p>
          <br />
          <p>
          My journey into software development began after gaining experience as a Nondestructive Testing Technician. During my time in that role, I honed my attention to detail, critical thinking, and teamwork skills. Now, I am excited to transition into the world of coding and bring the same level of dedication and commitment to software development.
          </p>
          <br />
          <p>
          In addition to my technical skills, I bring a diverse skill set that includes proficiency in Microsoft Office, HTML/CSS, JavaScript, React.js, Python, Java, C#, and various database technologies. I am also well-versed in deployment and version control tools like Heroku, Git, and GitHub Pages. My goal is to leverage this knowledge and continue learning and growing in the ever-evolving field of software developmen
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cudespinner ">
            <div className="face1">
              <FontAwesomeIcon icon={faBitcoin} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faChartPie} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
