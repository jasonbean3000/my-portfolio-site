import React from "react";
import './footer.css'
import reactIcon from '../../resources/images/react-icon.png'
import cssIcon from '../../resources/images/css-icon.png'
import htmlIcon from '../../resources/images/html-icon.png'
import reduxIcon from '../../resources/images/redux-icon.png'
import javaScriptIcon from '../../resources/images/js-icon.png'
import nodeIcon from '../../resources/images/node-icon.png'
import gitIcon from '../../resources/images/git-icon.png'

export default function Footer() {
    return (
        <div>
            <br></br>
            <div className="icons-container">
                <img className="skills-logo" alt='' src={htmlIcon} />
                <img className="skills-logo" alt='' src={cssIcon} />
                <img className="skills-logo" alt='' src={javaScriptIcon} />
                <img className="skills-logo" alt='' src={reactIcon} />
                <img className="skills-logo" alt='' src={reduxIcon} />
                <img className="skills-logo" alt='' src={nodeIcon} />
                <img className="skills-logo" alt='' src={gitIcon} />
            </div>
            <article className="icons">icons by <a target="_blank" href="https://icons8.com" rel='noreferrer'>Icons8</a></article>
        </div>
    )
}

