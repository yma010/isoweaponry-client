import React from 'react';
import { SignUpForm } from './registration';
import { LoginForm } from './login';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

export const SessionModal = (modal) => {
    const dispatch = useDispatch();

    const form = {
        'login' : <LoginForm/>,
        'signup' : <SignUpForm/>,
    }

    const handleModalClose = event => {
        event.preventDefault();
        dispatch(closeModal())
    }

    return (
        <div className='modal-background' onClick={handleModalClose}>
            <div className="modal-window">
                {form[Object.values(modal)]}
            </div>
        </div>
    )
}