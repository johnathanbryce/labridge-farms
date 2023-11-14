'use client'
import React, { useCallback } from 'react'
import styles from './Testimonials.module.css'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Components
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
// External Libraries 
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Testimonials() {
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
            <div className={styles.controls_container}>
                <h4> What Our Clients Say: </h4>
                <div className={styles.arrows_container}>
                    <div className={styles.arrow_wrapper}>
                        <FaLongArrowAltLeft className={styles.arrow} onClick={scrollPrev} />
                    </div>
                    <div className={styles.arrow_wrapper}>
                        <FaLongArrowAltRight className={styles.arrow} onClick={scrollNext}/>
                    </div>

                </div>
            </div>

            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <TestimonialCard
                            rating={5}
                            review="There is simply no comparison between the flavour of this pasture-raised beef and what you get at the grocery stores!"
                            name="- Mike"
                            companyName="Placeholder Company Name 1 "
                        />
                        <TestimonialCard
                            rating={4}
                            review="We have been so pleased with sides of pork we have purchased from Labridge Farms.  It has such a rich flavour – and the price is great for the quality that we receive!"
                            name="- Scott & Kelly"
                            companyName="Placeholder Company Name2 "
                        />
                        <TestimonialCard
                            rating={3}
                            review="I buy sides of both beef and pork and I am very happy with the variety of cuts and quality of the meats.”"
                            name="- Doug "
                            companyName="Placeholder Company Name 3 "
                        />
                    </div>
                </div>
            </div>

        </section>
    </LayoutContainerSections>
  )
}
