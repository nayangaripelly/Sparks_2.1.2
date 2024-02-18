import React from 'react';

import BeatCard from '../components/BeatCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BeatCarousel = ({type, beats}) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <KeyboardArrowRightIcon className={className}
            style={{ ...style, display: "block", color: "gray"}}
            onClick={onClick} />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <KeyboardArrowLeftIcon className={className}
            style={{ ...style, display: "block", color: "gray"}}
            onClick={onClick}/>
        );
    }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='py-4'>
            <div className='w-fit'>
                {type}
            </div>
            <Slider {...settings}>
                {beats.map((beat, index) => (
                    <div key={index}>
                        <BeatCard beat={beat} ifSpotlight={index % 3} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BeatCarousel