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
              <div className="nav-container">
                <div className='searbar'>
                  <input type="search" name="" id="" />
                </div>
                <Link path="/profile">Account</Link>
                <button onClick={logout}>Logout</button>
                <Link path="/shopping_cart">Shopping Cart</Link>
              </div>
            );
        }
    }

    return (
      <div className="nav-container">
        <div className="searbar">
          <label htmlFor="search"> Search:
          <input type="search" name="shop-search" id="searchbar" />
          </label>
        </div>
        <div className='account-buttons'>
          <Link path="/profile">Account</Link>
          <button className='logout-button' onClick={logout}>Logout</button>
          <Link path="/shopping_cart">Shopping Cart</Link>
        </div>
      </div>
    );
}
