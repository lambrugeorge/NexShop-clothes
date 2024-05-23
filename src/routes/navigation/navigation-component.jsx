<<<<<<< HEAD
import React, { Fragment, useContext } from 'react';
=======
import React, { Fragment } from 'react';
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
import { Outlet } from 'react-router-dom';
import { ReactComponent as NeXLogo } from '../../assets/nex.svg';
import CartIcon from '../../components/card-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutUser = () => dispatch(signOutStart());
    
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <NeXLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={ signOutUser }> 
                            SIGN OUT 
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                        SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown /> }
            </NavigationContainer>
            <Outlet />
            </ Fragment>
    );
};

export default Navigation;
