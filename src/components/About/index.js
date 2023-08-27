import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 >
            <div className='glitch' data-text='AboutMe'>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e']}
            idx={15} 
          ></AnimatedLetters>
          </div>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
          veritatis, aut at totam inventore! Blanditiis officiis sequi corporis!
          Dolorem, odit rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
          veritatis, aut at totam inventore! Blanditiis officiis sequi corporis!
          Dolorem, odit rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          quisquam eaque blanditiis dicta vitae officia sequi, reiciendis fuga
          veritatis, aut at totam inventore! Blanditiis officiis sequi corporis!
          Dolorem, odit rem!
        </p>
      </div>
    </div>
  )
}

export default About
