import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
    return (
      <>
        <div className="splash-container">
          <div className="header-container">
            <h1 className="title"> ISO Weaponry </h1>
            <Link path="/index">
              <button className="button">Enter</button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default Splash;