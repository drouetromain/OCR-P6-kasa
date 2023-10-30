import PropTypes from 'prop-types'
import React, { useState } from 'react';
import ArrowUp from '../../assets/arrow-up.svg'

function DrawerList({ equipementsArray  }) {
  const [open, setOpen] = useState(false);
    return (
      <div className={ open ? "drawer-block-open" : "drawer-block-closed" }>
        <div className="drawer-title">
          <h3>Equipements</h3>
          <img src={ArrowUp} alt="Déployer" onClick={() => { open ? setOpen(false) : setOpen(true) } } />
        </div>
        <div className="drawer-content-mask"></div>
        <div className={ open ? "drawer-content-open" : "drawer-content-closed" }>
          {<ul>
            {equipementsArray.map((equipementsArray) =>
              <li key={equipementsArray}>{equipementsArray}</li>
            )}
          </ul>}
        </div>
        
      </div>
    )
  }
  
DrawerList.propTypes = {
  content: PropTypes.string.isRequired,
}
  
DrawerList.defaultProps = {
  content: '',
}
// import PropTypes from 'prop-types'

// function DrawerList({ equipments }) {
//     return (
//             <span>{equipments}</span>
//     )
//   }
  
// DrawerList.propTypes = {
//   equipments: PropTypes.string.isRequired,
// }
  
// DrawerList.defaultProps = {
//   equipments: '',
// }

export default DrawerList