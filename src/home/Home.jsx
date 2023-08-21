import React from "react";
import { useEffect, useRef } from 'react';
import Photo from "../photo/Photo";
import './home.css'
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import crescentPhoto from '../resources/images/crescent.png';
import masterPhoto from '../resources/images/master-plan.png';
import redditPhoto from '../resources/images/reddit-app-icon.png'

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {

    // ScrollTo effect

    const handleScrollToHome = () => {
        gsap.to(window, { duration: 1, scrollTo: {y: "#home", offsetY: 75}});
    };

    const handleScrollToAbout = () => {
        gsap.to(window, { duration: 1, scrollTo: {y: "#about", offsetY: 75}});
    };

    const handleScrollToProjects = () => {
        gsap.to(window, { duration: 1, scrollTo: {y: "#projects", offsetY: 75}});
    };

    const handleScrollToExperience = () => {
        gsap.to(window, { duration: 1, scrollTo: {y: "#experience", offsetY: 75}});
    };

    const handleScrollToContact = () => {
        gsap.to(window, { duration: 1, scrollTo: {y: "#contact", offsetY: 75}});
    };

    const homeRef = useRef(null);

    // ScrollTrigger elements effects

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".about-animate", {
            scrollTrigger: {
              trigger: '#about',
              toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });


        gsap.to(".about-content", {
            scrollTrigger: {
            trigger: '#about',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

        gsap.to(".exp-animate-1", {
            scrollTrigger: {
            trigger: '#experience',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

        gsap.to(".exp-animate-2", {
            scrollTrigger: {
            trigger: '#experience',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });
   
        gsap.to(".projects-animate-1", {
            scrollTrigger: {
            trigger: '#projects',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

        gsap.to(".projects-animate-2", {
            scrollTrigger: {
            trigger: '#projects',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

        gsap.to(".contact-animate-1", {
            scrollTrigger: {
            trigger: '#projects',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

        gsap.to(".contact-animate-2", {
            scrollTrigger: {
            trigger: '#projects',
            toggleActions: "restart none none none"
            },
            x: 0,
            duration: 1,
        });

}, []);


 
  

    // intro text effect 
    useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        const tl = gsap.timeline({repeat:0, repeatDelay:1, yoyo: false});
        tl.to('.intro-text', {
          duration: 2,
          delay: 0,
          text: "jason bean. ",
          ease: 'gsap.Power2.easeInOut',
          
        });
      }, []);

      useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        const tl = gsap.timeline({repeat:0, repeatDelay:1, yoyo: false});
        tl.to('.intro-text2', {
          duration: 1,
          delay: 2,
          text: " web developer",
          ease: 'gsap.Power2.easeInOut',
          
        });
      }, []);
    
    return (
        <div className="site-container">
            <div className="menu" >
                    <h3 onClick={handleScrollToHome} className="button">home</h3>
                    <h3 onClick={handleScrollToAbout} className="button">about</h3>
                    <h3 onClick={handleScrollToExperience} className="button">experience</h3>
                    <h3 onClick={handleScrollToProjects} className="button">projects</h3> 
                    <h3 onClick={handleScrollToContact} className="button">contact</h3> 
                </div>
            <div className="home purple-border" id="home">
               
                <div class="type-container">
                    <p className="intro-text"></p>
                    <p className="intro-text2"></p>
                </div>
            </div>
               
            <div className="content-container purple-border" id="about" >
                <article className="intro-line align-center about-animate">
                        Front-End Engineer
                </article>
                
                <div className="about-content">
                    <article className="statement-line">
                        <Photo />
                        <p>I am a front-end engineer from Fort Worth, TX. I enjoy solving business problems with creative and intuitive web design. When I'm not behind a computer, I love biking, music, and spending time with family and friends.</p>
                    </article>    
                </div>
            </div>
    
            <div className="content-container purple-border" id="experience" ref={homeRef}>
                <article className="intro-line align-center exp-animate-1">
                    Web Development
                </article>
                <div className="block-container exp-animate-2">
                    <article className="statement-line">
                        <p className="subtitle">Skills and Tools</p>
                        <p className="sub-list">JavaScript</p>
                        <p className="sub-list">HTML</p>
                        <p className="sub-list">CSS/SASS</p>
                        <p className="sub-list">NodeJS</p>
                        <p className="sub-list">React</p>
                        <p className="sub-list">Redux</p>
                        <p className="sub-list">GSAP</p>
                        <p className="sub-list">GIT/Github</p>
                        <p className="sub-list">Gulp</p>
                    </article>
                    <article className="statement-line">
                        <p className="subtitle">WordPress</p>
                        <p className="sub-list">Gutenberg</p>
                        <p className="sub-list">Classic Editor</p>
                        <p className="sub-list">Custom Themes & Plugins</p>
                        <p className="sub-list">Gravity Forms</p>
                        <p className="sub-list">Advanced Custom Fields</p>
                        </article>
                    <article className="statement-line">
                        <p className="subtitle">Email</p>
                        <p className="sub-list">MJML</p>
                        <p className="sub-list">HubSpot</p>
                    </article>
                    <article className="statement-line">
                        <p className="subtitle">Banners</p>
                        <p className="sub-list">Animate CC</p>
                    </article>
                </div>
            </div>

            <div className="content-container purple-border" id="projects" ref={homeRef}>
                <div className="projects-content" >
                    <article className="intro-line align-center projects-animate-1">
                        Projects
                    </article>
                    <div className="block-container projects-animate-2">
                    <article className="statement-line">
                        <p className="subtitle">Collaborations</p>
                        <div className="crescent">
                        <a href="https://thecrescentfw.com/"><p className="sub-list hover">Crescent Fort Worth (Schaefer Advertising)</p></a>

                            <div className="photo-container-crescent">
                                <a href="https://thecrescentfw.com/" target="blank"><img src={crescentPhoto} alt='' /></a>
                            </div>
                        </div>
                        
                    </article>
                    <article className="statement-line">
                        <p className="subtitle">Personal Projects</p>
                        <div className="crescent">
                        <a href="https://jovial-muffin-4da696.netlify.app"><p className="sub-list hover">School ISD Masterplan</p></a>

                            <div className="photo-container-crescent">
                                <a href="https://jovial-muffin-4da696.netlify.app" target="blank"><img src={masterPhoto} alt='' /></a>
                            </div>
                        </div>
                        <div className="crescent">
                        <a href="https://luminous-torrone-cc5bbe.netlify.app/"><p className="sub-list hover">Reddit Api App</p></a>

                            <div className="photo-container-crescent">
                                <a href="https://luminous-torrone-cc5bbe.netlify.app/" target="blank"><img src={redditPhoto} alt='' /></a>
                            </div>
                        </div>
                    </article>
                    </div>
                </div>
            </div>

            
            <div className="content-container purple-border" id="contact" ref={homeRef}>
                <article className="intro-line align-center contact-animate-1">
                    Interested in hiring me for a project?
                </article>
                <div className="block-container contact-animate-2">
                    <article className="statement-line">
                        <p className="subtitle email">jasonbean3000@gmail.com</p>
                        <p className="sub-list">817-721-7641</p>
                        <a href='https://github.com/jasonbean3000' target='_blank' rel='noreferrer' className="github-link"><p className="sub-list">github.com/jasonbean3000</p></a>
                        <a href='https://pdfhost.io/v/C7RrqPeo._2023_Jason_Bean_Resume' target='_blank' rel='noreferrer' className="resume-link"><p className="sub-list">Click for resume</p></a>
                    </article>
                 
                </div>
            </div>

        </div>

            
        
    )
    
}
