import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import LogoImg from '../../assets/logo-kasa.webp'
import '../../assets/style.scss'

function Header() {
  return (
    <nav>
      <div class="navbar">
        <img src={LogoImg} alt="Logo Kasa" /> 
          <div class="navbar__link">
            <Link to="/">Accueil</Link>
            <Link to="/about/">A propos</Link>
          </div>
      </div>
      <div class="hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>  
    </nav>
  )
}

export default Header
