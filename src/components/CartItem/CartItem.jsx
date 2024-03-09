import React from 'react'

const CartItem = ({producto,eliminarItem}) =>{

    return(
        <div>

            <h2>{producto.producto.nombre} </h2>

            <img src={producto.producto.img} alt={producto.producto.nombre} />

            <h3>Cantidad: {producto.cantidad} </h3>

            <p>Valor: ${producto.producto.precio*producto.cantidad} </p>

            <button onClick={()=> eliminarItem(producto.producto.id)}>Eliminar producto</button>

        </div>

    )

}

export default CartItem