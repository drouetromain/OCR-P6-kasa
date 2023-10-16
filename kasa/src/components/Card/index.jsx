import PropTypes from 'prop-types'

function Card({ title, cover }) {
  return (
    <div>
        <h2>{title}</h2>
        <img src={cover} alt={title}/>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
}
export default Card