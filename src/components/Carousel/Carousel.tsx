'use client'
import React, { useCallback } from 'react'
import styles from './Carousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const autoplayOptions = {
    delay: 1000,
}

interface CarouselProps {
    children: any,
}

export const Carousel = ({children}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])
  

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {children}
            </div>
        </div>
        <button className={styles.embla__prev} onClick={scrollPrev}>
            Prev
        </button>
        <button className={styles.embla__next} onClick={scrollNext}>
            Next
        </button>
    </div>
  )
}

