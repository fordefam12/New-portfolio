import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

// import InputPrompt from 'inquirer/lib/prompts/input'

const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeOutID)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_z1bbh7n',
        'template_eyiuf9j',
        refForm.current,
        '90mlj6pBwsViNs2wT'
      )
      .then(
        () => {
          alert('message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('failed to send')
        console.log(error);
        }
      )
  }
  return (
    <>
      <div className="container contact-page ">
        <div className="text-zone">
          <h1>
            <div className="glitch">
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't',' ', 'M', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </div>
          </h1>
          <p>
            If you have any questions or comments about this site, please feel
            free to send me an email at:
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <button className="glow-on-hover" type="submit" value="SEND">
                  {' '}
                  send
                </button>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
