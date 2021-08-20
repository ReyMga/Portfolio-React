import React from 'react'
import  PerfilImg from '../assets/images/perfil.png'
import PText from '../components/PText';
import './components.css';

const HeroSection = () => {
    return (
        <div>
            <div className="container">
                <h1 className="hero__heading">
                    <span> hello this is</span>
                    <span> Raquel Muriega</span>
                </h1>
                <div className="hero__img">
                    <img className='imagen_perfil' src={PerfilImg} alt="foto" />
                </div>
                <div className="hero__info">
                    <PText>This is my text</PText>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
