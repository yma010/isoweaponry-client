import React from 'react';
import { Link } from 'react-router-dom';
import ISOWeaponryBanner from '../../stylesheets/images/ISO_Banner.png';

export default function Sidebar() {
    const categories = {
        "smallarms": "Small Arms",
        "submachine": "Submachine Gun",
        "rifles": "Rifles",
        "heavy": "Heavy"
    };

    const catLinks = Object.entries(categories).map((cat, idx) => {
        return(
            <li className='sidebar-nav-link' key={idx}>
                <Link to={`/rentals/${cat[0]}`}>{cat[1]}</Link>
            </li>
        )
    });
    
    return(
        <>
            <div className='sidebar-container'>
                <Link to='/'><img src={`${ISOWeaponryBanner}`} alt="" /></Link>
                <ul>
                    <li className='sidebar-nav-link'><Link to='/'>Home</Link></li>
                    <li className='sidebar-nav-link'><Link to='/policy'>Rental Policy</Link></li>
                    {catLinks}
                </ul>
            </div>
        </>
    )
}