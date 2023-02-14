import './cartWidget.css'
import cart from '../../images/cart.png'

const CartWidget = () => {
    return <div className='cartContainer'><img src={cart} alt="carrito" width={30} height={30} /></div>
}

export default CartWidget;