import React, { useState } from "react";
<<<<<<< HEAD
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
=======
import { useDispatch } from 'react-redux';

>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from './sign-up-form.styles';
import { onSignUpStart } from "../../store/user/user.saga";



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();



    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
<<<<<<< HEAD
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
=======
            dispatch(onSignUpStart(email, password, displayName));
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
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
        <SignUpContainer>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
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
                <Button type='submit'>
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
