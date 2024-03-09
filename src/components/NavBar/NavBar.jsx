import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css'

const NavBar = () =>{

  return(

    <div className='navcontainer'>

      <Link to={'/'}>

        <img src="../assets/img/Captura de pantalla 2024-03-09 185701.png" alt="" />

      </Link>

      <ul>

            <li>
                <NavLink to={'/'}>Inicio</NavLink>
            </li>

            <li>
                <NavLink to={'categoria/Italia'}>Italia</NavLink>
            </li>

            <li>
                <NavLink to={'categoria/España'}>España</NavLink>
            </li>

            <li>
                <NavLink to={'categoria/Portugal'}>Portugal</NavLink>
            </li>

            <li>
                <NavLink to={'categoria/Holanda'}>Holanda</NavLink>
            </li>

      </ul>

      <Link to={'/cart'}>

        <img src="../assets/img/carrito png.png" alt="" />

      </Link>

    </div>
  )

}

export default NavBar