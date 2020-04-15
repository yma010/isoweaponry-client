import React from 'react';

export const Step2 = ({ handleInputChange, street, state, zip }) => {
    return (
        <>
            <label htmlFor='address'> Street Address:
                        <input type="text" id='street' name='street' value={street} onChange={handleInputChange} />
            </label>
            <label htmlFor="state"> State:
                        <input type="text" id="state" name='state' value={state} onChange={handleInputChange} />
            </label>
            <label htmlFor="zip"> Zip Code:
                        <input type="text" id="zip" name='zip' value={zip} onChange={handleInputChange} />
            </label>
        </>
    )
}
