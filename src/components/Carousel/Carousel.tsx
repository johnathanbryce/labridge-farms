'use client'
import React, { useCallback } from 'react'
import styles from './Carousel.module.css'

// External Libraries
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';

const autoplayOptions = {
    delay: 1000,
}

interface CarouselProps {
    children: any,
}

export const Carousel = ({children}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
          <div className={styles.arrows_container}>
              <div className={styles.arrow_wrapper}>
                  <FaLongArrowAltLeft className={styles.arrow} onClick={scrollPrev} />
              </div>
              <div className={styles.arrow_wrapper}>
                  <FaLongArrowAltRight className={styles.arrow} onClick={scrollNext}/>
              </div>
          </div>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {children}
            </div>
        </div>    
    </div>
  )
}

