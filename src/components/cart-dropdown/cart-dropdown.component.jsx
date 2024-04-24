import './cart-dropdown.styles.scss'
import Button from '../button/button.component'

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>Go TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;