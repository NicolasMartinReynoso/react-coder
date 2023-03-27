import ItemDetail from "../itemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../itemDetailContainer/itemDetailContainer.css"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
     const [Item, setItem] = useState({})
     const { detalleId } = useParams()

     useEffect(() => {
          const querydb = getFirestore()
          const queryDoc = doc(querydb, "productos", detalleId )
          getDoc(queryDoc)
               .then(res => setItem({id:res.id,...res.data()}))
     }, [detalleId ])

     return <div className="itemDetailContainer"><ItemDetail detalle={Item} /></div>
}

export default ItemDetailContainer;