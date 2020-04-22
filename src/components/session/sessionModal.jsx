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
            <div className="modal-window" onClick={e => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                {form[modal]}
            </div>
        </div>
    )
}