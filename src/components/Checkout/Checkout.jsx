import React,{useContext,useState} from 'react';
import { db } from '../../firebase/config';
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../CartContext/CartContext';

const Checkout = () =>{

    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    const manejadorFormulario = (event) =>{
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completar todos los campos requeridos")
            return;
        }

        if(email !== emailConfirmacion){
            setError("El campo del email no coincide con el campo de confirmacion")
            return;
        }

        const orden ={
            items: cart.map((producto)=>({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async(productoOrden)=>{
                const productoRef = doc(db, "ItemCarrito", productoOrden.id);

                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef,{
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef)=>{
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error)=>{
                console.log(error)
                setError("Se produjo un error al concretar la orden")
            })
        })
        .catch((error)=>{
            console.log(error)
            setError("No se puede actualizar el stock")
        })

        alert("Los datos se han subido")
    }

    return(
        <div>
            <h2>Ingresa tus datos</h2>

            <form onSubmit={manejadorFormulario}>

                {cart.map((producto)=>(

                    <div key={producto.producto.id}>

                        <p>


                            {""}

                            {producto.producto.nombre} x {producto.cantidad}

                        </p>

                    </div>

                ))}
                
                <div>
                    <label htmlFor='Nombre'>Nombre</label>
                    <input name='Nombre' type="text" onChange={(e)=> setNombre(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='Apellido'>Apellido</label>
                    <input name='Apellido' type="text" onChange={(e)=> setApellido(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='Telefono'>Telefono</label>
                    <input name='Telefono' type="number" onChange={(e)=> setTelefono(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='Email'>Email</label>
                    <input name='Email' type="email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='EmailConfirmacion'>Email Confirmacion</label>
                    <input name='EmailConfirmacion' type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
                </div>

                <button type='submit'>Completa tu compra</button>

                {error && <p style={{color: "red"}}>{error} </p>}

                {ordenId &&(
                    <p>Gracias por tu compra. Tu numero de ordenes es :{ordenId} </p>
                )}
            </form>
        </div>
    )
}

export default Checkout