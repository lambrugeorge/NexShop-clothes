import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px; 
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
<<<<<<< HEAD
    background-color: white;
    color: black;
    border: 1px solid black;
}
 `
=======
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

<<<<<<< HEAD
&:hover {
    background-color: #357ae8;
    border: none;
}
`
=======
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

<<<<<<< HEAD
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    
=======
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
<<<<<<< HEAD
`

=======
`;
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
