import React from "react";
import './contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <article className="intro-line">
                Interested in hiring me for a project?
                </article>
                <article className="email">
                jasonbean3000@gmail.com
                </article>
                <article className="github">
                <a href='https://github.com/jasonbean3000' target='_blank' rel='noreferrer'>github.com/jasonbean3000</a>
                </article>
                <article className="phone">
                PHONE: <span>817-721-7641</span>
                </article>
                <article className="resume">
                <a href='https://pdfhost.io/v/UAsB~fQkI_2022_Jason_Bean_Resume' target='_blank' rel='noreferrer'>Click for Resume</a>
                </article>
            </div>
        </div>
    )
    
}