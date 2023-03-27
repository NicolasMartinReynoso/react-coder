import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
    const [catalogo, setCatalogo] = useState([])
    const { CatalogoId } = useParams()
    useEffect(() => {
        const querydb = getFirestore()
        const querycollection = collection(querydb, 'productos')
        if (CatalogoId) {
            const queryFilter = query(querycollection, where('categoria', '==', CatalogoId))
            getDocs(queryFilter)
                .then(res =>setCatalogo(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))) )
        } else {
            getDocs(querycollection)
            .then(res => setCatalogo(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        }
    }, [CatalogoId])

   
    return <div className="itemListContainer"> <ItemList productos={catalogo} /></div>
}

export default ItemListContainer;