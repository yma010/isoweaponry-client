import React from 'react';
import { Link } from 'react-router-dom';
import ISOWeaponryBanner from '../../stylesheets/images/ISO_Banner.png';

export default function Sidebar() {

    return(
        <>
            <div className='sidebar-container'>
                <Link path='/'><img src={`${ISOWeaponryBanner}`} alt="" /></Link>
                <ul>
                    <li className='sidebar-nav-link'><Link path='/'>Home</Link></li>
                    <li className='sidebar-nav-link'><Link>Rental Policy</Link></li>
                    <li className='sidebar-nav-link'><Link>Small Arms</Link></li>
                    <li className='sidebar-nav-link'><Link>Submachine Guns</Link></li>
                    <li className='sidebar-nav-link'><Link>Rifles</Link></li>
                    <li className='sidebar-nav-link'><Link>Heavy Weapon</Link></li>
                </ul>
            </div>
        </>
    )
}