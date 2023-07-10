import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import dataContext from "../context/dataContext";
const Navbar = () => {
  let location = useLocation();
  const context = useContext(dataContext)
  const {admin,setAdmin} = context;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/about">Vaccination Booking</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">

          {location.pathname==='/home'?<Link className="nav-link active" aria-current="page" to="/home">Home</Link>:<div></div>}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          {admin===true?
          <Link className="nav-link active" aria-current="page" to="/addcenter">Add Center</Link>:<div></div>
}
        </li>
      </ul>
      {location.pathname==='/home'||location.pathname==='/about' || location.pathname==='/addcenter'?<Link to='/'><button type='button' className='btn btn-primary mx-2'>Logout</button></Link>:
      <div>

    {location.pathname==='/'?<Link to='/signup'>
    <button type="button" className="btn btn-primary mx-2">SignUp</button></Link>:
    <Link to='/'>
    <button type="button" className="btn btn-primary mx-2">LogIn</button></Link>
    }
    </div>
    }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
