import React, {useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
      <section className="slider">
        {/*<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />*/}
        {/*<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />*/}
        <FaArrowAltCircleLeft className="left-arrow" />
        <FaArrowAltCircleRight className="right-arrow" />
        {SliderData.map((slide, index) => {
          return <img src={slide.image} alt='travel image' className="image" />;
        })}
      </section>
  );
}

export default ImageSlider;
