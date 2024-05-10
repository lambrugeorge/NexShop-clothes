import './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
     CartDropdownContainer, 
     EmptyMessage, 
     CartItems,
    } from './cart-dropdown.styles';



const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
 

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropDown;
