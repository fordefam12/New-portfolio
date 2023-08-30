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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
            veritatis, aut at totam inventore! Blanditiis officiis sequi
            corporis! Dolorem, odit rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
            veritatis, aut at totam inventore! Blanditiis officiis sequi
            corporis! Dolorem, odit rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
            veritatis, aut at totam inventore! Blanditiis officiis sequi
            corporis! Dolorem, odit rem!
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
