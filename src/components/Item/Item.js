import { Link } from 'react-router-dom'
import '../Item/item.css';

const Item = ({ nombre, url, precio, id }) => {
    return <div className='item'>
        <h2>{nombre}</h2>
        <img className="productoImg" src={url} alt=""></img><br></br>
        <Link to={`/Detalle/${id}`}><button >Ver</button></Link>

    </div>
}

export default Item;