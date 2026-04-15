import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="#">Renan<span className="highlight">(ZeroGallo)</span></a>
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