import React,{useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection,getDocs,query,where } from 'firebase/firestore';

const itemlistcontainer = () =>{

  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    const misProductos = categoryId ? query(collection(db,"ItemCarrito"),where("categoria", "==", categoryId))

    :

    collection(db,"ItemCarrito")

    getDocs(misProductos)

    .then((res)=>{

      const nuevosProductos = res.docs.map((doc)=>{

        const data = doc.data()

        return{id: doc.id,...data}

      })

      setProductos(nuevosProductos)

    })

    .catch((error)=>console.log(error))

  },[categoryId])

  return(

    <div className='itemcontainer'>

      {productos.length == 0 ?
      
      <h1>Cargando...</h1>

      :

      <ItemList productos={productos}/>

    }

    </div>

  )

}

export default itemlistcontainer