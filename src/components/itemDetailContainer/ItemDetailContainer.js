import ItemDetail from "../itemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productos";
import "../itemDetailContainer/itemDetailContainer.css"


const ItemDetailContainer = () => {
     const [Item, setItem] = useState({})
     const { detalleId } = useParams()

     useEffect(() => {
          const getItem = new Promise(resolve => {
               setTimeout(() => {
                    resolve(productos);

               }, 2000);
          });
          getItem.then(res => setItem(res.find(producto => producto.id === parseInt(detalleId))));
     }, [])

     return <div className="itemDetailContainer"><ItemDetail detalle={Item} /></div>
}

export default ItemDetailContainer;