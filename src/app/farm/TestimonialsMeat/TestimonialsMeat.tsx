'use client'
import React, { useCallback } from 'react'
import styles from './TestimonialsMeat.module.css'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Components
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
// External Libraries 
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function TestimonialsMeat() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false}, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])


  return (
    <LayoutContainerSections title='' bgColor='white'>
        <section className={styles.testimonials}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <TestimonialCard
                            rating={5}
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 1"
                            companyName="Placeholder Company Name 1 "
                        />
                        <TestimonialCard
                            rating={4}
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 2 "
                            companyName="Placeholder Company Name2 "
                        />
                        <TestimonialCard
                            rating={3}
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 3 "
                            companyName="Placeholder Company Name 3 "
                        />
                        <TestimonialCard
                            rating={5}
                            review="Am ipsum dolor sit amet, consec- tetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                            name="Placeholder Name 4 "
                            companyName="Placeholder Company Name 4"
                        />
                    </div>
                </div>
            </div>

        </section>
    </LayoutContainerSections>
  )
}