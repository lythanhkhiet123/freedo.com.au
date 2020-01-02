import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../App.css';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
const Slideshow = () => {
    return (
        
        <div className="slide-container" >
            <Slide  {...properties}>
                <div className="each-slide">
                    <img className='slideshowimg' src={require('../images/1.png')} alt='1 ' />
                </div>
                <div className="each-slide">
                    <img className='slideshowimg' src={require('../images/slide_3.jpg')} alt='2 '/>
                </div>
                <div className="each-slide">
                    <img className='slideshowimg' src={require('../images/slide_4.jpg')} alt='3 ' />
                </div>
               
            </Slide> 
        
        </div>
    )
}

        

    
export default Slideshow;
