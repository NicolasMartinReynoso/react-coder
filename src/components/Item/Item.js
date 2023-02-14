import AddItemButton from '../AddItemButton/AddItemButton'
import '../Item/item.css'


const Item= ({nombre,imgUrl,precio})=><div className='item'>
    <p>{nombre}</p>
    <img src={imgUrl} alt=""></img>
    <p>${precio}</p>
    <AddItemButton></AddItemButton>
</div> 

export default Item;