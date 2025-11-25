import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from '../context/CartContext';
import '../index.css'

function Header() {
    const { cart } = useCart()
    const [active, setActive] = useState("home")
    const totalQnt = cart.items.reduce((c, item) => c + item.quantite, 0)

    
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">

            <div className="container">

                <Link to='/' className='navbar-brand' onClick={()=>setActive('home')}>
                    <img src="./logo.png" alt="brand" className='' width='50px' />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id='navbarNav'>
                    <div className="m-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            </li>
                            <li className="nav-item d-flex flex-row">
                                <Link
                                    to='/'
                                    onClick={() => setActive('home')}
                                    className={`nav-link mx-3 ${active === 'home' ? "nav-active" : ""}`}
                                    
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/shop'
                                    className={`nav-link mx-3 ${active === 'shop' ? "nav-active" : ""}`}

                                    onClick={() => setActive('shop')}
                                >Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/'
                                    className={`nav-link mx-3 ${active === 'contact' ? "nav-active" : ""}`}
                                    onClick={() => setActive('contact')}
                                >Contact Us</Link>
                            </li>

                        </ul>
                    </div>

                    <div>

                        <Link
                            to='/cart'
                            className='position-relative ms-3 '
                            onClick={()=>setActive("")}
                        >
                            <HiOutlineShoppingBag size={30} className='text-light '/>
                            <span className='badge bg-danger postition-absolute top-0 start-100 translate-middle '>{totalQnt}</span>
                        </Link>


                    </div>

                </div>
            </div>
        </nav>


    )
}

export default Header



