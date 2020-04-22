import React from 'react';
import { SignUpForm } from './registration';
import { LoginForm } from './login';


export const SessionModal = ({modal, onClose}) => {
    const form = {
        'login' : <LoginForm/>,
        'signup' : <SignUpForm/>,
    }

    return (
        <div className='modal-background' onClick={onClose}>
            <div className="modal-window">
                {form[modal]}
            </div>
        </div>
    )
}