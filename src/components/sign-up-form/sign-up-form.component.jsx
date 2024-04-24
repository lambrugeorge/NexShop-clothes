import React, { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    // State-ul pentru formularul de înregistrare
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // Funcție pentru resetarea valorilor formularului
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    // Funcție pentru actualizarea valorilor formularului la fiecare modificare
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    // Funcție pentru tratarea submit-ului formularului de înregistrare
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verificăm dacă parolele coincid
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Creăm utilizatorul în baza de date Firebase Authentication
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            // Setăm utilizatorul curent în contextul aplicație

            // Creăm documentul utilizatorului în baza de date Firestore
            await createUserDocumentFromAuth(user, { displayName });

            // Resetăm valorile formularului
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('User creation encountered an error', error);
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                {/* Componente pentru introducerea datelor */}
                <FormInput 
                    label="Display Name"
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput    
                    label="Password"        
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <FormInput
                    label='Confirm Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}
                />
                {/* Buton pentru trimiterea formularului */}
                <Button type='submit'>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
