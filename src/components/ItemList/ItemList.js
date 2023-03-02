import Item from '../Item/Item'

import '../ItemList/itemList.css'


const ItemList = ({ productos }) => {
    return <div className='containerList' key="#">{productos.map((producto) => <Item key={producto.id} nombre={producto.nombre} url={producto.url} precio={producto.precio} id={producto.id} />)
    }</div>
}

export default ItemList;