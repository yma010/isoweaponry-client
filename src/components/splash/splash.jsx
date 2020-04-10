import React from 'react';
import isoweaponryMain from '../../stylesheets/images/isoweaponryMain.jpg';

function Splash() {
    return (
      <>
        <div className="splash-container">
          <div className="header-container">
            <img src={isoweaponryMain}/>
            <h1 className='title'> Our Mission: </h1> 
            <p>ISO Weaponry is an affordable alternative to include realistic looking prop firearms for photography.</p>
          </div>
        </div>
      </>
    );
}

export default Splash;