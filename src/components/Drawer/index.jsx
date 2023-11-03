import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import ArrowUp from '../../assets/arrow-up.svg'

function Drawer({ content, drawerTitle, equipementsArray, isOpen }) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setOpen(isOpen)
  // }, [isOpen]);
  
  return (
    <div className={open ? "drawer-block-open" : "drawer-block-closed"}>
      <div className="drawer-title">
        <h3>{drawerTitle}</h3>
        <img src={ArrowUp} alt="Déployer" onClick={() => { open ? setOpen(false) : setOpen(true) }} />
      </div>
      <div className={open ? "drawer-content-open" : "drawer-content-closed"}>

        {(content !== undefined) && (
          <>
            {content}
          </>
        )}

        {(equipementsArray !== undefined) && (
          <>
            {<ul>
              {equipementsArray.map((equipementsArray) =>
                <li key={equipementsArray}>{equipementsArray}</li>
              )}
            </ul>}
          </>
        )}
      </div>

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