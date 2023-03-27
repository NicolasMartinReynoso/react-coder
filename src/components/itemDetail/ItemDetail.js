import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../contexts/cartContext";
import "../itemDetail/itemDetail.css"


const ItemDetail = ({ detalle }) => {
    const [finCompra, setFinCompra] = useState(false)
    const { addItem } = useCartContext()

    const onAdd = (cantidad) => {
        setFinCompra(true)
        addItem({detalle},cantidad)
      
    }

    return <div className="itemDetail">
        <img src={detalle.url} alt="" />
        <div>
        <h2>{detalle.nombre}</h2>
        <p>{detalle.descripcion}</p>
        <p>${detalle.precio}</p>
        {finCompra
            ? <div><button><Link to='/Carrito'>Finalizar compra</Link></button><button><Link to={"/"}>Seguir comprando</Link></button></div>
            : <ItemCount stock={detalle.stock} onAdd={onAdd} />
        }
        </div>
    </div>

}

export default ItemDetail;