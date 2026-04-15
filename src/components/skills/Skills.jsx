import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiDjango, SiRender } from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
]

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Habilidades técnicas</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills