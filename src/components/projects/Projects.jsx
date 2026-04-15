import './Projects.css'

const projects = [
  {
    title: 'Nologia-TS',
    description: 'Este projeto foi desenvolvido como solução para o Desafio Nology – Estagiário de Dev 2026. Trata-se de uma aplicação web completa.',
    tech: ['React', 'Vite', 'HTML5', 'CSS Modules', 'Python', 'Flask', 'PostgreSQL'],
    link: '#',
    github: 'https://github.com/Zerogallo/Nology-TS'
  },
  {
    title: 'Prática em Banco de Dados Relacionais',
    description: 'Projeto de prática em banco de dados relacionais utilizando PostgreSQL, com foco em modelagem e consultas SQL.',
    tech: ['PostgreSQL', 'SQL','Tkinter'],
    link: '#',
    github: 'https://github.com/Zerogallo/Banco-de-Dados-Relacional-Consultas-SQL-Organiza-o-de-Tabelas',
  },
  {
    title: 'Sistema de gestão clínica',
    description: 'O projeto visa automatizar processos administrativos e médicos de uma clínica de saúde.',
    tech: ['Python','Flask', 'SQLite3','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/-Clinica-Saude',
  },
   {
    title: 'Sistema de Controle de Estoque',
    description: 'Sistema completo de gerenciamento de estoque desenvolvido em Flask com interface web e API REST. Permite controle de produtos, movimentações de entrada/saída e acompanhamento do histórico.',
    tech: ['Python','Flask', 'SQLite3','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/Controle-de-Estoque',
  },
  {
    title: 'Gerenciador de código QR',
    description: 'Um sistema completo para gerar e ler QR Codes desenvolvidos em Python com Flask.',
    tech: ['Python','Flask', 'SQLite3','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/QR-Code-Manager',
  },
  {
    title: 'Sistema de Gestão de Produtos',
    description: 'Sistema web desenvolvido em Flask para gestão de produtos, com autenticação de usuários e operações CRUD completas.',
    tech: ['Python','Flask', 'SQLite3','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/sistema-de-gestao-de-produtos',
  },
  {
    title: 'Sistema de Controle de Acesso',
    description: 'Sistema web desenvolvido em Python para controle de acessos com dashboard interativo e relatórios gráficos.',
    tech: ['Python','Flask', 'SQLite3','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/Sistema-de-Controle-de-Acesso',
  },
  {
    title: 'Beauty Clinic',
    description: 'Este projeto é uma landing page desenvolvida em React para a clínica "Beauty Clinic", especializada em remoção de tatuagens indesejadas com tecnologia avançada. ',
    tech: ['React','Vite','HTML5', 'CSS'],
    link: '#',
    github: 'https://github.com/Zerogallo/freelas-GLOW',
  },
  {
    title: 'Portfólio 3.0',
    description: 'Meu site pessoal com React e Vite, design responsivo e animações.',
    tech: ['React', 'Vite', 'HTML5', 'CSS Modules'],
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
  {
    title: 'Aplicativo de cartão de embarque',
    description: 'Um aplicativo de cartão de embarque digital desenvolvido em React Native com Expo e TypeScript, criado no Visual Studio Code.',
    tech: ['React Native', 'Expo', 'TypeScript'],
    link: '#',
    github: 'https://github.com/Zerogallo/Cart-o-de-embarque',
  },
  {
    title: 'Conversor de Moedas',
    description: 'Aplicativo móvel para conversão de valores entre moedas internacionais (USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF). Exibe resultados em tempo real com taxa de câmbio atualizada.',
    tech: ['React Native', 'Expo', 'TypeScript'],
    link: '#',
    github: 'https://github.com/Zerogallo/Conversor-de-Moedas-Mobile',
  },

 
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