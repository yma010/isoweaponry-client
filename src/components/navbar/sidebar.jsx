import React from 'react';
import { Link } from 'react-router-dom';
import ISOWeaponryBanner from '../../stylesheets/images/ISO_Banner.png';

export default function Sidebar() {

    return(
        <>
            <div className='sidebar-container'>
                <Link path='/'><img src={`${ISOWeaponryBanner}`} alt="" /></Link>
                <ul>
                    <li className='sidebar-nav-link'><Link to='/'>Home</Link></li>
                    <li className='sidebar-nav-link'><Link to='/policy'>Rental Policy</Link></li>
                    <li className='sidebar-nav-link'><Link to='/rentals/smallarms'>Small Arms</Link></li>
                    <li className='sidebar-nav-link'><Link to='/rentals/submachine'>Submachine Guns</Link></li>
                    <li className='sidebar-nav-link'><Link to='/rentals/rifles'>Rifles</Link></li>
                    <li className='sidebar-nav-link'><Link to='/rentals/heavy'>Heavy Weapon</Link></li>
                </ul>
            </div>
        </>
    )
}