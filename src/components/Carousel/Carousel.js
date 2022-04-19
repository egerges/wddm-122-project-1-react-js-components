import './Carousel.css';
import React from 'react';
import { Carousel as BCarousel } from 'react-bootstrap'; 
//We are importing as BCarousel since the class we are creating
//  is called Carousel. Else, would have a conceptual error.

class Carousel extends React.Component {
    //Class constructor
    constructor(props) {
        //Passing props to React.Component (Parent Class of Carousel)
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
            <section className='carousel-holder'>
                <BCarousel fade={this.state.fade} touch={this.state.touch}>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/uchange.jpg' alt='PMI'/>
                        <BCarousel.Caption>
                            <h5>
                                <a href="https://www.linkedin.com/posts/elio-gerges-4478ba126_uchange-for-a-stronger-usj-activity-6814837628949590016-UUrm"
                                    target="_blank"
                                    rel="noreferrer">
                                        CEO of UChange University Chapter Saint Joseph University of Beirut
                                </a>
                            </h5>
                            <p>My testimony as a student at Saint Joseph University of Beirut who helped initiate a student lead project to bring together students and alumni in networking events.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/uif.jpg' alt='UIF'/>
                        <BCarousel.Caption>
                            <h5>
                                <a href="https://universityinnovation.org/wiki/Category:Saint_Joseph_University_of_Beirut_(2019_Fall_cohort)"
                                    target="_blank"
                                    rel="noreferrer">
                                        University Innovation Fellows
                                </a>
                            </h5>
                            <p>Change doesn't happen overnight! Change needs patience, collaboration and people to believe in it.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/pmi.jpg' alt='PMI'/>
                        <BCarousel.Caption>
                            <h5>
                                <a href="https://www.linkedin.com/posts/elio-gerges-4478ba126_projectmanagement-pmi-competition-activity-6671832457689485312-LZu7"
                                    target="_blank"
                                    rel="noreferrer">
                                        Project Management Institute MENA
                                </a>
                            </h5>
                            <p>Winner of the PMI Pioneering Youth Competition.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/mentor.jpg' alt='Mentor'/>
                        <BCarousel.Caption>
                            <h5>
                                <a href="https://www.linkedin.com/posts/elio-gerges-4478ba126_collaborativelearning-futureoflearning-changemakers-activity-6665739761933664256-b4po"
                                    target="_blank"
                                    rel="noreferrer">
                                        Design Thinking Ambassador
                                </a>
                            </h5>
                            <p>Ambassador of Innovation, Change and Desgn Thinking.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                </BCarousel>
            </section>
        )
    }
}

export default Carousel;