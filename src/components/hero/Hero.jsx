import './Hero.css'
import Pref from '../../assets/pref_Renan.png'
import logo from '../../../public/desenvolvedor-fullstack.png'
import pt from '../../assets/pt.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Olá, Eu sou <span className="gradient-text">Renan Ferreira</span></h1>
          <h2>Desenvolvedor Full-Stack | Back-End | Front-End | React • Node • Django e outras tecnologias</h2>
          <p>Transformando ideias em código com paixão por tecnologia e design funcional.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">Ver projetos</a>
            <a href="#contact" className="btn secondary">Contato</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Substitua pelo seu avatar ou ilustração */}
          <div className="code-icon">
            <img src={Pref} alt="Renan Ferreira" className="avatar" />
            <img src={logo} alt="Desenvolvedor Full-Stack" className="code-logo" />
            <img src={pt} alt="Português" className="code-pt" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero