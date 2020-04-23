import React from 'react';
import { SignUpForm } from './registration';
import { LoginForm } from './login';


export const SessionModal = ({modal, onClose}) => {

    const form = {
        'login' : <LoginForm onClose={onClose}/>,
        'signup' : <SignUpForm onClose={onClose}/>,
    }

    return (
        <div className='modal-background' onClick={onClose}>
            <div className="modal-window" onClick={e => e.stopPropagation()}>
                <button className='close-button' aria-label="close" onClick={onClose}>Close</button>
                {form[modal]}
            </div>
        </div>
    )
}