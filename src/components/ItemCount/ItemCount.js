import { useState } from 'react'

const ItemCount = () => {

    const [counter, setCounter] = useState(1)

    const clickMenos = () => {
        setCounter(counter - 1)
    }

    const clickMas = () => {
        setCounter(counter + 1)
    }

    return (<div><button disabled={counter <= 1} onClick={clickMenos}>-</button><span>{counter}</span><button onClick={clickMas}>+</button></div>)
}

export default ItemCount;