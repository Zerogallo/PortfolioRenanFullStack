import './Projects.css'

const projects = [
  {
    title: 'Portfólio 3.0',
    description: 'Meu site pessoal com React e Vite, design responsivo e animações.',
    tech: ['React', 'Vite', 'CSS Modules'],
    link: 'https://zerogallo.github.io/Portfolio-3.0/',
    github: 'https://github.com/Zerogallo/Portfolio-3.0'
  },
  {
    title: 'App de Tarefas',
    description: 'Lista de tarefas com autenticação JWT e banco MongoDB. Deploy no Render.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: '#',
    github: '#'
  },
  // Adicione mais projetos conforme seus repositórios
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projetos em destaque</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 Live</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">🐙 Código</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects