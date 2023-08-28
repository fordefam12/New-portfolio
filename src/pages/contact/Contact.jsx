import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/index'
export default function Contact() {
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
          console.log(error)
        }
      )
  }
  return (
    <Form ref={refForm} onSubmit={sendEmail}>
      <div className="glitch">
        <AnimatedLetters
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
          letterClass={letterClass}
          idx={15}
        />
      </div>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label htmlFor="inlineFormInput">Name:</Form.Label>
        <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Jane Doe"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="username@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <br />
      <Form.Group as={Row} className="mb-3 app-container">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" className="glow-on-hover">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
