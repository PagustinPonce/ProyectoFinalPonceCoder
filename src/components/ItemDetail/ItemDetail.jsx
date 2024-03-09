import React,{useState,useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({producto}) =>{

  const [cart,setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const agregar = (count) =>{

    setCart (true)

    agregarCarrito(producto,count)

  }

  return(

    <div>

      <img src={producto.img} alt={producto.nombre} />

      <h2>{producto.nombre} </h2>

      <p>{producto.description} </p>

      <p>{producto.stock} </p>

      <p>{producto.precio} </p>
      

    {producto.stock == 0 ? <h2>El producto no tiene stock</h2> : (cart? <Link to={'/cart'}>Ir al carrito</Link>

    : 

    <ItemCount initial={1} stock={producto.stock} agregar={agregar}/> )}

    </div>

  )

}

export default ItemDetail