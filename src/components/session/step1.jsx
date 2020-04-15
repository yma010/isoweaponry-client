import React from 'react';

export const Step1 = ({handleInputChange, name, email, password1, password2, birthdate}) => {
    return (
        <>
            <label htmlFor='name'> Full Name:
                <input type="text" id='name' name='name' value={name} onChange={handleInputChange} required/>
            </label>
            <label htmlFor="birthdate">Birthday:
                <input type="date" name="birthdate" id="birthdate" value={birthdate} onChange={handleInputChange} required/>
            </label>
            <label htmlFor="email"> Email:
                <input type="email" id="email" name='email' value={email} onChange={handleInputChange} required/>
            </label>
            <label htmlFor="password1"> Password:
                <input type="password" id="password1" name='password1' value={password1} onChange={handleInputChange} required/>
            </label>
            <label htmlFor="password2"> Confirm Password:
                <input type="password" id="password2" name='password2' value={password2} onChange={handleInputChange} required/>
            </label>
        </>
    )
}
