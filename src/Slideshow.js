import React from 'react';
import { Slide } from 'react-slideshow-image';
import './App.css';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <img class='slideshowimg' src={require('./images/slide_1.jpg')} />
                </div>
                <div className="each-slide">
                    <img class='slideshowimg' src={require('./images/slide_3.jpg')} />
                </div>
                <div className="each-slide">
                    <img class='slideshowimg' src={require('./images/slide_4.jpg')} />
                </div>
                
            </Slide>
        </div>
    )
}

        

    
export default Slideshow;
