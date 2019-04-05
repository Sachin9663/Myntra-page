import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import SliderImg from '../../images';
import './slider.css';

class Slider extends Component {
    render() {
        let images = SliderImg["carousel-images"];
        return (
            <div className="main-slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[0]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[1]}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[2]}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;
