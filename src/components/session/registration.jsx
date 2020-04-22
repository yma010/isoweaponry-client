import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { Step1 } from './step1';
import { Step2 } from './step2';

export function SignUpForm() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        street: '',
        state: '',
        zip: '',
        birthdate: '',
    });
    const [step, setStep] = useState(1);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value})
    };

    const _next = e => {
        e.preventDefault();
        setStep(step + 1);
    };

    const _prev = e => {
        e.preventDefault();
        setStep(step <= 1 ? 1 : step - 1)
    };

    
    const dispatch = useDispatch(); 
    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            fName: parsefName(inputs.name),
            lName: parselname(inputs.name),
            email: inputs.email,
            password1: inputs.password1,
            password2: inputs.password2,
            street: inputs.street,
            state: inputs.state,
            zip: inputs.zip,
            birthdate: inputs.birthdate,
        }

        function parsefName(name) {
            return name.split(' ')[0]
        };
        function parselname(name) {
            return name.split(' ')[1]
        };

        const userData = Object.assign({}, user);
        dispatch(signup(userData)).then((response) => {
            if(response.data && response.data.status === 200) {
                dispatch(login({email: inputs.email, password: password1}))
            }
        })
    }

    const {
        name,
        email,
        password1,
        password2,
        birthdate,
        street,
        state,
        zip,
    } = inputs;

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='title'> Sign Up </h2>
                <section className='form-fields'>
                    {   step === 1 ?
                        <Step1 handleInputChange={handleInputChange} name={name} email={email} password1={password1} password2={password2} birthdate={birthdate}/> :
                        <Step2 handleInputChange={handleInputChange} street={street} state={state} zip={zip} />
                    }
                </section>
                { step === 2 ? <>
                    <button className='formNav' type="submit">Submit</button> 
                    <button className='formNav' type='button' onClick={_prev}> Previous </button> 
                </> : 
                <> 
                    <button className='formNav' type='button' onClick={_next}> Next </button> 
                    <button className={`formNav step${step}`} type='button' onClick={_prev}> Previous </button> 
                </>
                }
            </form>
        </>
    )
}
