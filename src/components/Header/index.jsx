import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo-kasa.webp'
import '../../assets/style.scss'

function Header() {
  return (
    <nav>
      <div className="navbar">
        <img src={LogoImg} alt="Logo Kasa" /> 
          <div className="navbar__link">
            <Link to="/">Accueil</Link>
            <Link to="/about/">A propos</Link>
          </div>
      </div>
    </nav>
  )
}

export default Header
