import React from 'react'
import './Services.css'

import service1 from '../../images/service-icon-1.svg'
import service2 from '../../images/service-icon-2.svg'
import service3 from '../../images/service-icon-3.svg'
import service4 from '../../images/service-icon-4.svg'

const Services = () => {
    return (
        <section className="service">
            <div className="container">

                <ul className="service-list">

                    <li className="service-item">
                        <div className="service-item-icon">
                            <img src={service1} alt="Service icon" />
                        </div>

                        <div className="service-content">
                            <p className="service-item-title">Free Shipping</p>

                            <p className="service-item-text">On All Order Over Rs 999</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-item-icon">
                            <img src={service2} alt="Service icon" />
                        </div>

                        <div className="service-content">
                            <p className="service-item-title">Easy Returns</p>

                            <p className="service-item-text">30 Day Returns Policy</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-item-icon">
                            <img src={service3} alt="Service icon" />
                        </div>

                        <div className="service-content">
                            <p className="service-item-title">Secure Payment</p>

                            <p className="service-item-text">100% Secure Gaurantee</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-item-icon">
                            <img src={service4} alt="Service icon" />
                        </div>

                        <div className="service-content">
                            <p className="service-item-title">Special Support</p>

                            <p className="service-item-text">24/7 Dedicated Support</p>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Services