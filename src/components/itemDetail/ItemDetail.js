import ItemCount from "../ItemCount/ItemCount";
import AddItemButtom from "../AddItemButton/AddItemButton"
import "../itemDetail/itemDetail.css"

const ItemDetail = ({ detalle }) => {
    return <div className="itemDetail">
        <h2>{detalle.nombre}</h2>
        <img src={detalle.url} alt="" />
        <p>{detalle.descripcion}</p>
        <p>${detalle.precio}</p>
        <ItemCount /><AddItemButtom />
    </div>
}

export default ItemDetail;