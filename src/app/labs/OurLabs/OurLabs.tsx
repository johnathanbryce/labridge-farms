import React from 'react'
import styles from './OurLabs.module.css'
// Internal Components
import DogDetailsCard from '@/components/Cards/DogDetailsCard/DogDetailsCard'
import { Carousel } from '@/components/Carousel/Carousel'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Lists
import labDetailsList from '../../../lists/labDetailsList'


export default function OurLabs() {

  
  return (
    <LayoutContainerSections title="Our Labs" bgColor='white'>
        <section className={styles.our_labs} id="labs">
          <p className={styles.text}> We breed top-quality Labs in numerous colours: chocolate, black, and yellow (ranging from white to fox-red), as well as silver- and charcoal-coloured Labs.  Though we produce dogs which excel as hunters and work in field trials, our primary focus is on producing more relaxed, calm family pets.  </p>
          <Carousel>
            {labDetailsList.map((detail) => (
              <DogDetailsCard
                key={detail.id}
                img={detail.img}
                name={detail.name}
                description={detail.description}
                learnMoreDescription={detail.learnMoreDescription}
                birthDate={detail.birthDate}
                gender={detail.gender}
                price={detail.price}
              />
            ))}
          </Carousel>
        </section>

    </LayoutContainerSections>
  )
}
