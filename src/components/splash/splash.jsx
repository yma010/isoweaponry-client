import React from 'react';
import isoweaponryMain from '../../stylesheets/images/isoweaponryMain.jpg';

function Splash() {
    return (
      <>
        <div className="splash-container">
          <div className="header-container">
            <img src={isoweaponryMain}/>
            <section className='mission-statement-text'>
            <h1 className='title'> Our Mission:</h1> 
            <p> ISO Weaponry is an affordable alternative to include realistic looking prop firearms for photography.</p>
            </section>
          </div>
        </div>
      </>
    );
}

export default Splash;