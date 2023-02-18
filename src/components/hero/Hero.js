import React from 'react'
import './Hero.css'
import hero from '../../images/hero-banner.jpg'

const Hero = () => {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${hero})` }}>
            <div className="container">

                <div className="hero-content">

                    <p className="hero-subtitle">Fashion Everyday</p>

                    <h2 className="h1 hero-title">Unrivalled Fashion House</h2>

                    <button className="btn btn-primary">Shop Now</button>

                </div>

            </div>
        </section>
    )
}

export default Hero