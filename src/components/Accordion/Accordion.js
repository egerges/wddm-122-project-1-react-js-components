import './Accordion.css';
import React from 'react';
import BAccordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Accordion extends React.Component {
    //Class constructor
    constructor(props) {
        //Passing props to React.Component (Parent Class of Accordion)
        super(props);

        //Setting class variables
        this.state = { 
            interval: 5000,
            className: 'd-block w-100',
            touch: true,
            fade: true
         };
      }

    render() {
        return(
            <section className='accordion-holder'>
                <h2>Education</h2>
                <BAccordion defaultActiveKey="0" flush>
                    <BAccordion.Item eventKey="0">
                        <BAccordion.Header>Web Design and Development</BAccordion.Header>
                        <BAccordion.Body>
                            As a person coming from a Computer Science with a minor in Business, this program taught me how to be
                            creative, detail-oriented and enhance my problem solving skills.
                            It is a project-based approach learning through the entire process of creating websites and web applications.
                            I learned how to build static and dynamic websites utilizing the most current versions of industry-standard 
                            applications and tools. Programming and design skills were taught with a focus on following best practices 
                            and established industry standards including designing websites that are mobile-ready, accessible and future-proof.
                            Follow the link below to be redirected to my github or portfolio and see some of my projects throughout the course.
                            <br/><br/>
            {/*<Button variant="primary" size="lg" active onClick={() => {window.open("https://github.com/egerges", "_blank")}}>
                                Github
                            </Button> <br/>
                            <Button variant="primary" size="lg" active onClick={() => {window.open("./porfolio", "_self")}}>
                                Portfolio
                            </Button>*/}
    {/* <Link to={'https://github.com/egerges'} target={'_blank'}>
                                <Button variant="primary" size="lg" active> {/** onClick={() => {window.open("https://github.com/egerges", "_blank")}} *
                                    Github
                                </Button>
                            </Link> */}
                            <Link to={''}>
                                <Button variant="primary" size="lg" active onClick={() => {window.open("https://github.com/egerges", "_blank")}}> {/**  */}
                                    Github
                                </Button>
                            </Link>
                            <br/>
                            <Link to={'/portfolio'} target={'_self'}>
                                <Button variant="primary" size="lg" active> {/**onClick={() => {window.open("/porfolio", "_self")}} */}
                                    Portfolio
                                </Button>
                            </Link>
                        </BAccordion.Body>
                    </BAccordion.Item>
                    <BAccordion.Item eventKey="1">
                        <BAccordion.Header>Computer Science minor Business</BAccordion.Header>
                        <BAccordion.Body>
                            Growing up I loved the technology and how it's changing the world. I knew that one day, I wanted to create
                            something that will help humanity. I started this program where I developped a broad understanding in 
                            areas such as systems and networks, algorithms, and programming.
                            I valued being able to learn and grow alongside others who shared my passion and understood my experience. 
                            It's hard work, but also so rewarding. I've grown so much both as a student and as a person while pursuing this program.
                        </BAccordion.Body>
                    </BAccordion.Item>
                </BAccordion>
            </section>
        )
    }
}

export default Accordion;
