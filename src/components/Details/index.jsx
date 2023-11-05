import PropTypes from 'prop-types'

function Details({ title, location }) {
    return (
        <div className="logement-title">
            <h2>{title}</h2>
            <div>{location}</div>
        </div>
    )
}

Details.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
  
Details.defaultProps = {
    title: '',
    location: '',
}
  
export default Details