import PropTypes from 'prop-types'
import '../../assets/style.scss'

function Hero({ bgImg, heroTitle }) {
  return (
    <div className="hero" style={{  
         backgroundImage: `url(${bgImg})`
    }}>
    <h1>{heroTitle}</h1>
    </div>  
  )
}

Hero.propTypes = {
  src: PropTypes.string.isRequired,
}

Hero.defaultProps = {
  src: '',
}

export default Hero