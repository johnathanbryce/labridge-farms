import React from 'react'
import styles from './OurLabs.module.css'
// Internal Components
import DogDetailsCard from '@/components/Cards/DogDetailsCard/DogDetailsCard'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Assets
import Olive from '../../../../public/assets/Olive.jpg'

export default function OurLabs() {
  return (
    <LayoutContainerSections title="Our Labs" bgColor='white'>
        <section className={styles.our_labs} id="labs">
          <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />

                    <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />

                    <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />

                    <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />

                    <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />

                    <DogDetailsCard img={Olive.src} name="Olive" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            gender="Male"
            learnMoreDescription="Here are further details about this dog... blah blah blah"
            price="500"
            birthDate="10/10/2021"
          
          />



        </section>
    </LayoutContainerSections>
  )
}
