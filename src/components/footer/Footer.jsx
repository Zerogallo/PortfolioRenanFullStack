import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Renan Ferreira (ZeroGallo) | Feito com React + Vite</p>
      </div>
    </footer>
  )
}

export default Footer