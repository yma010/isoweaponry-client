import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRentals } from '../../actions/product_actions';
import { useEffect } from 'react';

export function RentalIndex() {
    const dispatch = useDispatch();
    const rentals = useSelector((state) => Object.values(state.entities.rentals))
    const rentalIdx = rentals.map((rental, index) => {
        return(
        <li key={index}>
            <img src={rental.picture[0]} alt={rental.model}/>
            <div>{rental.model}</div>
            <div>{rental.price}</div>
        </li>
        )
    })
    useEffect(() => {
        dispatch(fetchRentals())
    }, [dispatch]);


    return (
        <div>
            This is the Rental Index Page
            <ul>
                {rentalIdx}
            </ul>
        </div>
    )
}
