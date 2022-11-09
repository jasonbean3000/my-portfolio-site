import React from "react";
import './projects.css'
import redditIcon from '../resources/images/reddit-app-icon.png'
import weatherAppIcon from '../resources/images/weather-app-icon.png'
import longRangeIcon from '../resources/images/school-long-range-logo.png'

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="project-1-container">
                <div className="project-content-container">
                    <a href='https://jovial-muffin-4da696.netlify.app' target='_blank' rel='noreferrer'>Example Long Range Facilities Masterplan for School District</a>
                    <article className="sub-content">Languages: HTML, CSS, JavaScript</article>
                    <article className="sub-content">Libraries Used: React, React Router </article>
                </div>
                <div className="project-icon-container">
                    <a href='https://jovial-muffin-4da696.netlify.app' target='_blank' rel='noreferrer'><img alt='' src={longRangeIcon} /></a>
                </div>
            </div>
            <div className="project-2-container">
                <div className="project-content-container">
                    <a href='https://luminous-torrone-cc5bbe.netlify.app' target='_blank' rel='noreferrer'>Reddit Bean Subreddit App</a>
                    <article className="sub-content">Languages: HTML, CSS, JavaScript</article>
                    <article className="sub-content">Libraries Used: React, React Router, Redux, RTK</article>
                </div>
                <div className="project-icon-container">
                    <a href='https://luminous-torrone-cc5bbe.netlify.app' target='_blank' rel='noreferrer'><img alt='' src={redditIcon} /></a>
                </div>
            </div>
            <div className="project-2-container">
                <div className="project-content-container">
                    <a href='https://endearing-griffin-fbb9fc.netlify.app' target='_blank' rel='noreferrer'>Weather App</a>
                    <article className="sub-content">Languages: HTML, CSS, JavaScript</article>
                    <article className="sub-content">Libraries Used: React, React Router, Redux, RTK, RTK Query</article>
                </div>
                <div className="project-icon-container">
                    <a href='https://endearing-griffin-fbb9fc.netlify.app' target='_blank' rel='noreferrer'><img alt='' src={weatherAppIcon} /></a>
                </div>
            </div>
        </div>
    )
}