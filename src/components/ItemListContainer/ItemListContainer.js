import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../productos';


const ItemListContainer = () => {
    const [catalogo, setCatalogo] = useState([])
    const { CatalogoId } = useParams()
    useEffect(() => {
        const getCatalogo = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            },);
        });
        if (CatalogoId) {
            getCatalogo.then(res => setCatalogo(res.filter(res => res.categoria === CatalogoId)))


        } else {
            getCatalogo.then(res => setCatalogo(res))
        }

    }, [CatalogoId])

    return <div className="itemListContainer"> <ItemList productos={catalogo} /></div>
}

export default ItemListContainer;