import React from "react";
import Photo from "../photo/Photo";
import './home.css'

export default function Home() {
    return (
        <div className="home-container">
            <div className="photo-container-hidden">
                <Photo />
            </div>
            <div className="home-content">
                <article className="intro-line">
                Hi, I'm Jason.
                </article>
                <article className="statement-line">
                I offer business solutions through web design.
                </article>
            </div>
        </div>
    )
    
}