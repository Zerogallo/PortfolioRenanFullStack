import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Renan Ferreira Full-Stack | “Transformando ideias em código – um commit por vez.”</p>
      </div>
    </footer>
  )
}

export default Footer