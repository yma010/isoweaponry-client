import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRentals } from '../../actions/product_actions';
import { useEffect } from 'react';

export function RentalIndex() {
    const dispatch = useDispatch();
    const rentals = useSelector((state) => Object.values(state.entities.rentals))
    const rentalIdx = rentals.map((rental, index) => {
        return(
        <li className='item' key={index}>
            <img className='picture' src={rental.picture[0]} alt={rental.model}/>
            <h3 className='title'>{rental.model}</h3>
            <div className='price'>${rental.price}.00</div>
        </li>
        )
    })

    const smallArms = rentals.filter((rental) => 
        rental.category === "small_arms"
    )

    const rifles = rentals.filter((rental) =>
        rental.category === "rifle"
    )

    const smg = rentals.filter((rental) => 
        rental.category === "submachine"
    )
    const heavy = rentals.filter((rental) =>
        rental.category === "heavy"
    )

    useEffect(() => {
        dispatch(fetchRentals())
    }, [dispatch]);

    return (
        <div className='product-index'>
            <h1>Entire Collection</h1>
            <ul className='list'>
                {rentalIdx}
            </ul>
        </div>
    )
}
