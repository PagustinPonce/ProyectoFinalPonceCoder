import React,{useState} from 'react';

const ItemCount = ({initial,stock,agregar}) =>{

  const [contador,setContador] = useState(1)

  const decrementar = () =>{
    if(contador>initial){
      setContador(contador-1)
    }
  }

  const incrementar = () =>{
    if(contador<stock){
      setContador(contador +1)
    }
  }

  const agregarCarrito = () =>{
    agregar(contador)
  }

  return(
    
    <div>

      <p>{contador}</p>

      <button onClick={decrementar}>-</button>

      <button onClick={agregarCarrito}>Agregar al carrito</button>

      <button onClick={incrementar}>+</button>

    </div>

  )

}

export default ItemCount
