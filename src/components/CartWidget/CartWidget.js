import './cartWidget.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'

const CartWidget = () => {
const {productCounter}= useCartContext()

    return <div className='cartContainer'><Link to={'/Carrito'}><img src="../images/cart.png" alt="carrito" width={30} height={30} /><span className='cartSpan'>{productCounter()}</span></Link></div>
}

export default CartWidget;