import React from 'react';
import { Link } from 'react-router-dom';
import ISOWeaponryBanner from '../../stylesheets/images/ISO_Banner.png';

function Splash() {
    return (
      <>
        <div className="splash-container">
          <div className="header-container">
            <img src={`${ISOWeaponryBanner}`} alt=""/>
            <Link path="/index">
              <button className="button">Enter</button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default Splash;