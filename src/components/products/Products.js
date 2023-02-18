import React from 'react'
import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'
import product4 from '../../images/product-4.jpg'
import product5 from '../../images/product-5.jpg'
import product6 from '../../images/product-6.jpg'
import product7 from '../../images/product-7.jpg'
import product8 from '../../images/product-8.jpg'
import product9 from '../../images/product-9.jpg'
import product10 from '../../images/product-10.jpg'

import './Products.css'

const Products = () => {
    return (
        <section className="section product">
            <div className="container">

                <h2 className="h2 section-title">Products of the week</h2>

                <ul className="filter-list">

                    <li>
                        <button className="filter-btn  active">Best Seller</button>
                    </li>

                    <li>
                        <button className="filter-btn">Hot Collection</button>
                    </li>

                    <li>
                        <button className="filter-btn">Trendy</button>
                    </li>

                    <li>
                        <button className="filter-btn">New Arrival</button>
                    </li>

                </ul>

                <ul className="product-list">

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product1} alt="Varsi Leather Bag" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-badge red"> -25%</div>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Varsi Leather Bag</a>
                                </h3>

                                <div className="card-price">
                                    <data value="48.75">&pound;48.75</data>

                                    <data value="65.00">&pound;65.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product2} alt="Fit Twill Shirt for Woman" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-badge green"> New</div>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Fit Twill Shirt for Woman</a>
                                </h3>

                                <div className="card-price">
                                    <data value="62.00">&pound;62.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product3} alt="Grand Atlantic Chukka Boots" loading="lazy"
                                        width="800" height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Grand Atlantic Chukka Boots</a>
                                </h3>

                                <div className="card-price">
                                    <data value="32.00">&pound;32.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product4} alt="Women's Faux-Trim Shirt" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Women's Faux-Trim Shirt</a>
                                </h3>

                                <div className="card-price">
                                    <data value="84.00">&pound;84.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product5} alt="Soft Touch Interlock Polo" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Soft Touch Interlock Polo</a>
                                </h3>

                                <div className="card-price">
                                    <data value="45.00">&pound;45.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product6} alt="Jhanwar Smart Watch" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Jhanwar Smart Watch</a>
                                </h3>

                                <div className="card-price">
                                    <data value="30.00">&pound;30.00</data>

                                    <data value="38.00">&pound;38.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product7} alt="Jhanwar Smart Glass" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Jhanwar Smart Glass</a>
                                </h3>

                                <div className="card-price">
                                    <data value="25.00">&pound;25.00</data>

                                    <data value="39.00">&pound;39.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product8} alt="Cotton Shirt for Men" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Cotton Shirt for Men</a>
                                </h3>

                                <div className="card-price">
                                    <data value="85.00">&pound;85.00</data>

                                    <data value="99.00">&pound;99.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product9} alt="Double-breasted Blazer" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Double-breasted Blazer</a>
                                </h3>

                                <div className="card-price">
                                    <data value="32.00">&pound;32.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="product-card">

                            <figure className="card-banner">

                                <a href="#">
                                    <img src={product10} alt="Ribbed Cotton Bodysuits" loading="lazy" width="800"
                                        height="1034" className="w-100" />
                                </a>

                                <div className="card-badge green">New</div>

                                <div className="card-actions">

                                    <button className="card-action-btn" aria-label="Quick view">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="card-action-btn cart-btn">
                                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                                        <p>Add to Cart</p>
                                    </button>

                                    <button className="card-action-btn" aria-label="Add to Whishlist">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                </div>

                            </figure>

                            <div className="card-content">
                                <h3 className="h4 card-title">
                                    <a href="#">Ribbed Cotton Bodysuits</a>
                                </h3>

                                <div className="card-price">
                                    <data value="71.00">&pound;71.00</data>
                                </div>
                            </div>

                        </div>
                    </li>

                </ul>

                <button className="btn btn-outline">View All Products</button>

            </div>
        </section>
    )
}

export default Products