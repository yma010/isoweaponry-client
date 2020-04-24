import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRentals } from '../../actions/product_actions';
import { useEffect } from 'react';

export function RentalIndex() {
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.entities.rentals);

    useEffect(() => {
        dispatch(fetchRentals())
    }, [dispatch])
    
    console.log(rentals)
    return (
        <div>
            This is the Rental Index Page
        
        </div>
    )
}
