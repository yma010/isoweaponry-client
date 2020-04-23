import React from 'react';
import { SignUpForm } from './registration';
import { LoginForm } from './login';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export const SessionModal = ({modal, onClose}) => {

    const form = {
        'login' : <LoginForm onClose={onClose}/>,
        'signup' : <SignUpForm onClose={onClose}/>,
    }

    return (
        <div className='modal-background' onClick={onClose}>
            <div className="modal-window" onClick={e => e.stopPropagation()}>
                <section className='modal-contents' >
                    <h2 className='title'>{modal}</h2>
                    <button className='close-button' aria-label="close" onClick={onClose}> 	<FontAwesomeIcon icon={faTimes}/> </button>
                    {form[modal]}
                </section>
            </div>
        </div>
    )
}