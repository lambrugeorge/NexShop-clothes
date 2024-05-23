<<<<<<< HEAD
import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';


=======
import { 
    BaseButton, 
    GoogleSignInButton, 
    InvertedButton 
} from './button.styles';

>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};
<<<<<<< HEAD
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton, 
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
=======
 
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
    return <CustomButton {...otherProps}>{children}</CustomButton>
};

export default Button;
