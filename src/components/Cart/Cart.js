import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";
import "../Cart/cart.css"



const Cart = () => {
    const { cart, total, clearCart } = useCartContext()

    if (cart.length === 0) {
        return <div className="emptyCart"><p>¡Parece que no has seleccionado ningun producto!</p><Link to={"/"}><button>Ir al catalogo</button></Link></div>
    } else {
        return <div className="itemCart">
            <h3>Carrito de compra</h3>
            <div >{cart.map(detalle => <div className="cartList" key={detalle.id}>
                <img src={detalle.url} alt="" />
                <div><ul>
                    <li>{detalle.counter}un.</li>
                    <li>{detalle.nombre}</li>
                    <li>${detalle.precio * detalle.counter}</li>
                </ul></div>
            </div>)}
            </div>
            <div className="cartButtons"><button onClick={clearCart} >Vaciar carrito</button><Link to={'/'}><button>Seguir comprando</button></Link><p>El precio total es de ${total()}</p><Link to={"/Formulario"}><button>Finalizar compra</button></Link></div>
        </div>
    }


}

export default Cart;