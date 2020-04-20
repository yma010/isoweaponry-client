import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

export default function Nav() {
    const [searchParams, setSearchParams] = useState("");

    const dispatch = useDispatch();
    const user = useSelector((state) => (state.user));


    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());

        return(
            <Redirect to='/' />
        )
    };

    const search = e => {
        e.preventDefault();
        if (searchParams.length !== 0) {
            this.props.history.push(`/index?${searchParams}`)
        };
    }

    const getLinks = () => {
        if (user) {
            return (
              <>
                <Link path="/profile">Account</Link>
                <button onClick={logout}>Logout</button>
                <Link path="/shopping_cart">Shopping Cart</Link>
              </>
            );
        } else {
          return (
            <>
              <Link path='/signup'>Sign Up</Link>
              <Link path='/login'>Login</Link>
              <Link path="/shopping_cart">Shopping Cart</Link>
            </>
          )
        }
    }

    return (
      <div className="nav-container">
        <div className="searchbar">
          <label htmlFor="search"> Search:
          <input className='searchbar-input' type="search" name="shop-search" id="searchbar" />
          </label>
        </div>
        <div className='account-buttons'>
          {getLinks()}
        </div>
      </div>
    );
}
