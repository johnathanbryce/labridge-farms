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
                            review="The two new Labridge pups I added to my family are as wonderful as the two I added from their operation a decade ago!"
                            name="Linda"
                        />
                        <TestimonialCard
                            review="Our chocolate male from Labridge was so well-mannered he frequently came to work and greeted patients at my physiotherapy clinic."
                            name="Jeff "
                        />
                        <TestimonialCard
                            review="Our puppy was so well socialized when we brought him home – he was an immediate member of our family."
                            name="Akeem"
                        />
                        <TestimonialCard
                            review="I love the Labridge body-shape and stature and they give the sweetest little kisses."
                            name="Linda"
                        />
                    </div>
                </div>
            </div>

        </section>
    </LayoutContainerSections>
  )
}