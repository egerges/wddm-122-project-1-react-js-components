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
            interval: 2500,
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
                        <img className={this.state.className} src='/img/carousel-banner/800x400.png' alt='first name'/>
                        <BCarousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/800x400.png' alt='first name'/>
                        <BCarousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                    <BCarousel.Item interval={this.state.interval} >
                        <img className={this.state.className} src='/img/carousel-banner/800x400.png' alt='first name'/>
                        <BCarousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </BCarousel.Caption>
                    </BCarousel.Item>
                </BCarousel>
            </section>
        )
    }
}

export default Carousel;