'use client'
import React from 'react'
import styles from './AutoScrollCarousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const autoplayOptions = {
    delay: 1000,
}

interface CarouselProps {
    children: any,
}

export const AutoScrollCarousel = ({children}: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])
  
  return (
    <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {children}
            </div>
        </div>
    </div>
  )
}
