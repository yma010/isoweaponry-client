import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

function Nav(props) {
    const [searchParams, setSearchParams] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => (state.entities.user));


    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());

        return(
            <Redirect to='/' />
        )
    };

    const getLinks = () => {
        if (user) {
            <Link path='/profile'>Account</Link>
            <Link path=''
        }
    }



}
