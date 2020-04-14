import React, { useState }  from 'react';

export function SignUpForm() {
    const signupForm = {
        name: '',
        email: '',
        password1: '',
        password2: '',
        errors: {},
    };

    const [inputs, setInputs] = useState(signupForm);

    return (
        <div className='signup-form-container'>
            <form className='form'>
                <h2 className='title'> Sign Up </h2>
                <section className='form-fields'>
                    <label htmlFor='name'> Full Name:
                        <input type="text" id='name'/>
                    </label>
                    <label htmlFor="email"> Email:
                        <input type="email" id="email"/>
                    </label>
                    <label htmlFor="password1"> Password:
                        <input type="password" name="" id="password1"/>
                    </label>
                    <label htmlFor="password2"> Confirm Password:
                        <input type="password" name="" id="password2" />
                    </label>
                </section>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
