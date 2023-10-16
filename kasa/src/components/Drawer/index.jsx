import PropTypes from 'prop-types'

function Drawer({ content, drawerTitle }) {
    return (
      <div className="drawer-block">
            <h3>{drawerTitle}</h3>
            <div>{content}</div>
      </div>
    )
  }
  
Drawer.propTypes = {
  content: PropTypes.string.isRequired,
}
  
Drawer.defaultProps = {
  content: '',
}

export default Drawer