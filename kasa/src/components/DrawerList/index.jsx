import PropTypes from 'prop-types'

function DrawerList({ equipments }) {
    return (
            <span>{equipments}</span>
    )
  }
  
DrawerList.propTypes = {
  equipments: PropTypes.string.isRequired,
}
  
DrawerList.defaultProps = {
  equipments: '',
}

export default DrawerList