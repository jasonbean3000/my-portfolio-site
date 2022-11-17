import React from "react";
import './photo.css'
import portrait from '../resources/images/portrait2.jpeg'

export default function Photo() {
    return (
        <div className="photo-container2">
            <img src={portrait} alt='' />
        </div>
    )
}
