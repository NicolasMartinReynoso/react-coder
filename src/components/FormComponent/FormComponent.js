import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../contexts/cartContext";
import React, { useState } from "react";
import "../FormComponent/formComponent.css"

const FormComponent = () => {
    const {cart,total,clearCart }= useCartContext()
     const compra= cart
     const coste= total()
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        addres: "",
        compra,
        coste
    } )
    const inputHandler = (ev) => {
        const { value, name } = ev.target;
        setForm({ ...form, [name]: value})

    }
    
        
   
    

    const submitHandler = (ev) => {
        ev.preventDefault()
        const db = getFirestore()
        const orderList = collection(db, "orderList")
        addDoc(orderList, form).then() 
        clearCart ()
    }
    
        
    return (<div className="formComponent">
        <form onSubmit={submitHandler} >
            <label>Nombre:</label><input onChange={inputHandler} type={"text"} name="name" id="name" value={form.name} ></input>
            <label>Telefono:</label><input onChange={inputHandler} type={"text"} name="phone" id="phone" value={form.phone}></input>
            <label>Direccion:</label><input onChange={inputHandler} type={"text"} name="addres" id="addres" value={form.addres}></input>
            <label>Email:</label><input onChange={inputHandler} type={"text"} name="email" id="email" value={form.email} ></input>
            <button>Confirmar compra</button>
            
        </form>
    </div>)
}

export default FormComponent;