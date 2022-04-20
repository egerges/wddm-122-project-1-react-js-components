import './portfolio.css';
import React from 'react';
import BAccordion from 'react-bootstrap/Accordion';

function Portfolio() {
    return (
        <div className="portfolio">
            <section className='accordion-holder'>
                <h2>Portfolio</h2>
                <BAccordion defaultActiveKey="0" flush>
                    <BAccordion.Item eventKey="0">
                        <BAccordion.Header>User Persona</BAccordion.Header>
                        <BAccordion.Body>
                            <img src='/img/portfolio/User Persona.png' className='img-fluid shadow-4' alt='User Persona' />
                        </BAccordion.Body>
                    </BAccordion.Item>
                    <BAccordion.Item eventKey="2">
                        <BAccordion.Header>Leaving My Home Mood Board</BAccordion.Header>
                        <BAccordion.Body>
                            <img src='/img/portfolio/Mood Board 1.png' className='img-fluid shadow-4' alt='Mood Board 1' />
                        </BAccordion.Body>
                    </BAccordion.Item>
                    <BAccordion.Item eventKey="3">
                        <BAccordion.Header>My Life At A Glance Mood Board</BAccordion.Header>
                        <BAccordion.Body>
                             <img src='/img/portfolio/Mood Board 2.png' className='img-fluid shadow-4' alt='Mood Board 2' />
                        </BAccordion.Body>
                    </BAccordion.Item>
                    <BAccordion.Item eventKey="4">
                        <BAccordion.Header>An Advertisement</BAccordion.Header>
                        <BAccordion.Body>
                            <img src='/img/portfolio/Nike Ad.jpg' className='img-fluid shadow-4' alt='Nike Ad' />
                        </BAccordion.Body>
                    </BAccordion.Item>
                </BAccordion>
            </section>
        </div>
    );
}

export default Portfolio;