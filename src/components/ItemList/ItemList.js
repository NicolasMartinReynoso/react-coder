import Item from '../Item/Item'
import { productos } from '../../productos'



const ItemList = () => {
    return <div style={{ columnCount: 3, columnGap: 160, }}>{productos.map((producto) => <Item nombre={producto.nombre} imgUrl={producto.imgUrl} precio={producto.precio} />)
    }</div>
}

export default ItemList;