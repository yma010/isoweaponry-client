import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

export const LoginForm = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    };

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            email: inputs.email,
            password: inputs.password,
        }

        const userData = Object.assign({}, user);
        dispatch(login(userData)).then(
            dispatch(closeModal())
        );
    }

    return(
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='title'> Login </h2>
            <section className='form-fields'>
                <label htmlFor="email"> Email:
                    <input type="email" id="email" name='email' value={inputs.email} onChange={handleInputChange} required />
                </label>
                <label htmlFor="password1"> Password:
                    <input type="password" id="password1" name='password' value={inputs.password} onChange={handleInputChange} required />
                </label>   
            </section>
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}