import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { SessionModal } from '../session/sessionModal';
import { openModal } from '../../actions/modal_actions';
export default function Nav() {
    const [searchParams, setSearchParams] = useState("");
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((state) => (state.user));
    const modalType = useSelector((state) => state.ui.modal);
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
                <Link to="/profile">Account</Link>
                <button onClick={logout}>Logout</button>
                <Link to="/shopping_cart">Shopping Cart</Link>
              </>
            );
        } else {
          return (
            <>
              <button onClick={handleModal} name='signup'>Sign Up</button>
              <button onClick={handleModal} name='login'>Login</button>
              <Link to="/shopping_cart">Shopping Cart</Link>
            </>
          )
        }
    }

    const handleModal = e => {
      e.preventDefault();
      setModal( modal => !modal );
      dispatch(openModal(e.target.name));
    }



    return (
      <div className="nav-container">
        { modal ? 
          <SessionModal modal={modalType}/> :
          null
        }
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
