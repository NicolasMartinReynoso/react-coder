import { useState } from 'react'


const ItemCount = ({stock,onAdd}) => {

    const [counter, setCounter] = useState(1)

    const clickMenos = () => {
        setCounter(counter - 1)
    }

    const clickMas = () => {
        setCounter(counter + 1)
    }

    return (<div>
        <button disabled={counter <= 1} onClick={clickMenos}>-</button>
        <button>{counter}</button>
        <button disabled={counter >= stock} onClick={clickMas}>+</button>
        <button onClick={()=>onAdd(counter)}>añadir al carrito</button></div>)
}

export default ItemCount;