import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [navbar, setnavbar] = useState(false)
    const navBarHandler = () => {
        setnavbar(!navbar)
    }
    
    return (
        <header className="header" data-header>
            <div className="container">

                <div className={navbar ? "overlay active" : "overlay"} data-overlay></div>

                <div className="header-search">
                    <input type="search" name="search" placeholder="Search Product..." className="input-field" />

                    <button className="search-btn" aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>

                <Link to="/" className="logo">
                    <h1><span>J</span>hanwar <span>A</span>nd <span>S</span>ons</h1>
                </Link>

                <div className="header-actions">

                    <button className="header-action-btn">
                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                        <p className="header-action-label">Sign in</p>
                    </button>

                    <button className="header-action-btn">
                        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

                        <p className="header-action-label">Search</p>
                    </button>

                    <button className="header-action-btn">
                        <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

                        <p className="header-action-label">Cart</p>

                        <div className="btn-badge green" aria-hidden="true">3</div>
                    </button>

                    <button className="header-action-btn">
                        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                        <p className="header-action-label">Wishlisht</p>

                        <div className="btn-badge" aria-hidden="true">2</div>
                    </button>

                </div>

                <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu" onClick={navBarHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={navbar ? "navbar active" : "navbar"} data-navbar>

                    <div className="navbar-top">

                        <h1><span>J</span>hanwar</h1>
                        <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu" onClick={navBarHandler}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                    </div>

                    <ul className="navbar-list">

                        <li>
                            <Link to="/home" className="navbar-link">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop" className="navbar-link">Shop</Link>
                        </li>

                        <li>
                            <Link to="/about" className="navbar-link">About</Link>
                        </li>

                        <li>
                            <Link to="/blog" className="navbar-link">Blog</Link>
                        </li>

                        <li>
                            <Link to="/contact" className="navbar-link">Contact</Link>
                        </li>

                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header