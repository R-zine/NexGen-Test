import React from 'react'
import SVG from './img/background.svg'
import './App.css'

const Background = () => {
    return (
        <div className="background">
            <img src={SVG} alt="hero" />
        </div>
    )
}

export default Background
