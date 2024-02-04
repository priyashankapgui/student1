import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/Green Leaf Super.png'
import cart from '../Assets/cart-shopping.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt='logo' />
            <p>Green Leaf</p>
            </div>

            <ul className='nav-menu'>
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart} alt='cart' />
            </div>

       
    </div>
  )
}
