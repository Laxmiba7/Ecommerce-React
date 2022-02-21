import React from 'react'
import logo from "../images/logo.png"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Cart from './Cart'


const Header = (props) => {
 const {cartValues, cartItems, value} = props
 return (
 <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
     <a className="navbar-brand ms-5" href="#"> 
        <img src= {logo} alt ="Logo" />
     </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav me-5">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <button type="button" className="btn text-white position-relative">
        
        <Cart value={value} cartItems={cartItems}/> 
        
        </button>
        
        <a className="nav-link" href="#">
            <CgProfile />
        </a>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header