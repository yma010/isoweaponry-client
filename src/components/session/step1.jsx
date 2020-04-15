import React from 'react';

export const Step1 = ({handleInputChange, name, email, password1, password2}) => {
    return (
        <>
            <label htmlFor='name'> Full Name:
                        <input type="text" id='name' name='name' value={name} onChange={handleInputChange} />
            </label>
            <label htmlFor="email"> Email:
                        <input type="email" id="email" name='email' value={email} onChange={handleInputChange} />
            </label>
            <label htmlFor="password1"> Password:
                        <input type="password" id="password1" name='password1' value={password1} onChange={handleInputChange} />
            </label>
            <label htmlFor="password2"> Confirm Password:
                        <input type="password" id="password2" name='password2' value={password2} onChange={handleInputChange} />
            </label>
        </>
    )
}
