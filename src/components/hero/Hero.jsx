import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Olá, eu sou <span className="gradient-text">Renan Ferreira</span></h1>
          <h2>Desenvolvedor Full-Stack | React • Node • Django</h2>
          <p>Transformando ideias em código com paixão por tecnologia e design funcional.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">Ver projetos</a>
            <a href="#contact" className="btn secondary">Contato</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Substitua pelo seu avatar ou ilustração */}
          <div className="code-icon">💻</div>
        </div>
      </div>
    </section>
  )
}

export default Hero