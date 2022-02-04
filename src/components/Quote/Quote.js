import './Quote.css';

// Importing React useRef and useEffect
import { useRef, useEffect } from 'react';

// Importing GSAP and USing ScrollTrigger
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Function
const Quote = () => {
    const containerRef = useRef();
    const q = gsap.utils.selector(containerRef);

    const duration = .5;

    // Waits until DOM has been rendered
    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center-=50',
            toggleActions: 'play none none reset',
            // scrub: 1,
            // markers: true
        });

        gsap.fromTo(q(".quote-profile"), {
            y: -200, 
            autoAlpha: 0
        }, {
            y: 0, 
            autoAlpha: 1, 
            duration: duration,
            scrollTrigger: scrollTrigger
        });
        gsap.fromTo(q(".quote-text"), {
            y: 200, 
            autoAlpha: 0
        }, {
            y: 0, 
            autoAlpha: 1, 
            duration: duration,
            scrollTrigger: scrollTrigger
        });
    });

    return (
        <div className="quote-holder" ref={containerRef}>
            <img src='/logo512.png' alt='parallax profile' className='quote-profile'/>
            <h3 className="quote-text">
                "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."
            </h3>
        </div>
    );
};



export default Quote;