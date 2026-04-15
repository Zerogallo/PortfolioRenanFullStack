import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Sobre mim</h2>
        <div className="about-content">
          <p>
            Sou estudante de <strong>Ciência da Computação</strong> e desenvolvedor full-stack em formação. 
            Tenho experiência prática com JavaScript, React, Node.js, Python (Django) e bancos de dados como MongoDB e PostgreSQL.
          </p>
          <p>
            Gosto de resolver problemas de forma criativa e construir aplicações que entregam valor real. 
            Atualmente estou me aprofundando em <strong>Next.js, Docker e CI/CD com GitHub Actions</strong>.
          </p>
          <p>
            Fora do código, gosto de compartilhar conhecimento e estou sempre aberto a colaborações e novos desafios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About