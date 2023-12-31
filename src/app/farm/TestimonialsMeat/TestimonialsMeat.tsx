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
    <LayoutContainerSections title='What Our Clients Say' bgColor='white'>
        <section className={styles.testimonials}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <TestimonialCard
                            review="There is simply no comparison between the flavour of this pasture-raised beef and what you get at the grocery stores!"
                            name="- Mike"
                        />
                        <TestimonialCard
                            review="We have been so pleased with sides of pork we have purchased from Labridge Farms.  It has such a rich flavour – and the price is great for the quality that we receive!"
                            name="- Scott & Kelly"
                        />
                        <TestimonialCard
                            review="I buy sides of both beef and pork and I am very happy with the variety of cuts and quality of the meats.”"
                            name="- Doug "
                        />
                    </div>
                </div>
            </div>

        </section>
    </LayoutContainerSections>
  )
}