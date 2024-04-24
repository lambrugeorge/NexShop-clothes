import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as NeXLogo } from '../../assets/nex.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/card-icon/card-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart-context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } =  useContext(CartContext);
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <NeXLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={ signOutUser }> 
                            SIGN OUT 
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'> SIGN IN</Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown /> }
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
