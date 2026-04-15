import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-container">
        <h2>Vamos conversar</h2>
        <div className="contact-info">
          <a href="mailto:renan.grenslist@gmail.com"><FaEnvelope /> renan.grenslist@gmail.com</a>
          <a href="tel:+5521972745455"><FaPhone /> (21) 97274-5455</a>
          <a href="https://linkedin.com/in/renan-ferreira-full-stack" target="_blank"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/Zerogallo" target="_blank"><FaGithub /> GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact