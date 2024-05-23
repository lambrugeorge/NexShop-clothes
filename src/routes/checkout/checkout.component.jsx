<<<<<<< HEAD
import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
=======
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal} from '../../store/cart/cart.selector'


import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d


const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);



  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
<<<<<<< HEAD
      <span className='total'>Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
=======
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
  );
};

export default Checkout;