import React, { useState } from 'react'

import styles from "./Home.module.css"

import imgCarrusel1 from "../../Img/img-1-c.png"
import imgCarrusel2 from "../../Img/img-2-c.png"
import imgCarrusel3 from "../../Img/img-3-c.png"
import imgCarrusel4 from "../../Img/img-4-c.png"
import imgCarrusel5 from "../../Img/img-5-c.png"
import imgCarrusel6 from "../../Img/img-6-c.png"
import imgCarrusel7 from "../../Img/img-7-c.png"


import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  { src: imgCarrusel1 },
  { src: imgCarrusel2 },
  { src: imgCarrusel3 },
  { src: imgCarrusel4 },
  { src: imgCarrusel5 },
  { src: imgCarrusel6 },
  { src: imgCarrusel7 }

];


const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  
    const totalItems = items.length;

  const slides = items.map((item, index) => {
    const prevIndex = (index - 1 + totalItems) % totalItems;
      return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className={styles.carouselSlide}>
            <img src={items[prevIndex].src} alt={items[prevIndex].altText} className={styles.imgs} />
        </div>
      </CarouselItem>
    );
  });
  
  return (
    <div className={styles.Contenedorr}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      </Carousel>
    </div>
  )
}

export default Carrusel;