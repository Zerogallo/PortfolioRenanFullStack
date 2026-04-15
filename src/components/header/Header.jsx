import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'
import img from '../../../public/desenvolvedor-fullstack.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={img} alt="Renan Full-Stack Developer" className='imgLogo'/>
          <a href="#"> Renan<span className="highlight"> (Full-Stack)</span></a>
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Início</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  )
} 

export default Header