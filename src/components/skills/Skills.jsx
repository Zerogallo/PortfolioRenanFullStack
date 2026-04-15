import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaJsSquare, FaHtml5, FaCss3Alt, FaAws, FaReacteurope, FaGithub } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiDjango, SiRender, SiVite, SiExpress, SiPrisma, SiKubernetes, SiGithubactions, SiExpo } from 'react-icons/si'
import './Skills.css'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoFlask } from 'react-icons/bi'
import { IoLogoFirebase } from 'react-icons/io5'
import { PiFigmaLogoFill } from 'react-icons/pi'
import { FcLinux } from 'react-icons/fc'

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Vite', icon: <SiVite />, color: '#e3cd26' },
  { name: 'HTML5', icon:<FaHtml5 />, color: '#e39126' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
  { name: 'Next.js', icon:<RiNextjsFill />, color: '#f5f4ef' },
  { name: 'Express', icon:<SiExpress  />, color: '#d0d8d0' },
  { name: 'Prisma', icon:<SiPrisma />, color: '#38B2AC' },
  { name: 'Flask', icon: <BiLogoFlask />, color: '#e7eaed' },
  { name: 'Tailwind CSS', icon:<RiTailwindCssFill />, color: '#3875b2' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#9e31c6' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#85b7e2' },
  { name: 'AWS', icon: <FaAws />, color: '#e8e9ea' },
  { name: 'Firebase', icon: <IoLogoFirebase />, color: '#8f973a' },
  { name: 'Expo', icon: <SiExpo />, color: '#fafcff' },
  { name: 'React Native', icon: <FaReacteurope />, color: '#61DAFB' },
  { name: 'Figma', icon: <PiFigmaLogoFill />, color: '#df61fb' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
  { name: 'GitHub', icon: <FaGithub />, color: '#333' },
  { name: 'Linux', icon: <FcLinux />, color: '#85b7e2' },
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