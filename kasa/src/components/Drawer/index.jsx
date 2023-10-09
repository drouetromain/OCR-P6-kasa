import PropTypes from 'prop-types'

function Drawer({ title, description }) {
    return (
      <div>
            <h2>{title}</h2>
            <div>{description}</div>
      </div>
    )
  }
  
Drawer.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
  
Drawer.defaultProps = {
    title: '',
    description: '',
}

export default Drawer