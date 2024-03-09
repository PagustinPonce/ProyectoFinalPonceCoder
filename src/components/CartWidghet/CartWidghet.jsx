import React,{useContext} from 'react';
import {CartContext} from '../CartContext/CartContext'

const CartWidghet = () =>{

    const {cantidadCarrito} = useContext(CartContext)

    return(
        <div>

            <h2>Cart</h2>

            <p>{cantidadCarrito() == 0? null: cantidadCarrito()} </p>

        </div>
    )
}

export default CartWidghet