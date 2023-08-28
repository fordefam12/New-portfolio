import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/digital_S-removebg-preview.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { Dna } from 'react-loader-spinner'
// 'f', 'u', 'l', 'l','s', 't', 'a', 'c', 'k',

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['p', 'a', 'c', 'e', 'C', 'i', 't', 'y', 'N', 'e', 'r', 'd']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 1000)
    return () => {
      clearTimeout(timeOutID)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {''}
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <span> </span>
            <span className={`${letterClass} _15`}>t</span>
            <span className={`${letterClass} _16`}>h</span>
            <span className={`${letterClass} _17`}>e</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FullStack developer / </h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
        <Logo />
      </div>
      <div className="Dna">
        <Dna
          visible={true}
          height="800"
          width="1800"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  )
}

export default Home
