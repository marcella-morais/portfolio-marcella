import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Olá! Eu sou Marcella, Front-end Developer</h2>
                <p>Desenvolvedora Frontend apaixonada | Transformando ideias em soluções web visualmente agradáveis e interativas</p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/img01.png" alt="" />
                    </div>
                    <img src="./assets/images/img-hero.png" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img  src="./assets/images/img02.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img  src="./assets/images/img03.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img  src="./assets/images/img04.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero