import Particles from 'react-particles'
import bouncingImage from '../../assets/Gear_5_Infobox.png'
import './particles.scss' // Import your SCSS file
import { loadFull } from 'tsparticles'

const ParticlesContainer = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine)
    console.log(loadFull)
    engine.addShape('bouncing-image', {
      custom: true,
      image: {
        src: bouncingImage,
        width: 100,
        height: 100,
      },
      size: 100,
    })
  }

  const particlesLoaded = async (container) => {
    console.log(container)
  }

  return (
    <div className="particles-container">
      <div className="background-image">
        <img src={bouncingImage} alt="Background" />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000',
            },
          },
          fpsLimit: 1200,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            
            color: {
              value: 'rgb(80, 80, 80)',
            },
            links: {
              color: 'rgb(80, 80, 80)',
              distance: 150,
              enable: true,
              opacity: 1,
              width: 6,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
                width:10,
              type: 'circle', 
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default ParticlesContainer
