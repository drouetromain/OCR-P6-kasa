import PropTypes from 'prop-types'

function Agent({ name, picture }) {
    return (
        <div className="logement-contact">
            <div>{name}</div>
                <img className='agent-pic' src={picture} alt={name} />
        </div>
    )
}

Agent.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
  
Agent.defaultProps = {
    name: '',
    picture: '',
}
export default Agent

