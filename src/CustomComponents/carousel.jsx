import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeSlide(props) {
    return (
        <Carousel
            className='self-center'
            autoPlay
            interval={3000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            swipeable={false}
            emulateTouch={false}
            stopOnHover={false}
            useKeyboardArrows={false}
        >
            {props.images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Carousel image ${index}`} />
                </div>
            ))}
        </Carousel>
    );
}
