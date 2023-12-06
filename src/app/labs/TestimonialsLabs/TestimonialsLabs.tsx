'use client'
import React, { useCallback } from 'react'
import styles from './TestimonialsLabs.module.css'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Components
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
// External Libraries 
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function TestimonialsLabs() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false}, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])


  return (
    <LayoutContainerSections title='What Our Clients Say' bgColor='white'>
        <section className={styles.testimonials}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <TestimonialCard
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 1"
                        />
                        <TestimonialCard
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 2 "
                        />
                        <TestimonialCard
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 3 "
                        />
                        <TestimonialCard
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 4 "
                        />
                    </div>
                </div>
            </div>

        </section>
    </LayoutContainerSections>
  )
}