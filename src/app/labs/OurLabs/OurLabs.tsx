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
          {/*TODO: remove this basic list and replace inside carousel when images and details are ready */}
         <div className={styles.placeholder_section}>
            <p> <em> Further images and information on our labs coming soon! </em></p>
            <div>

            <div className={styles.lists_container}>
              <div>
                <h6>Male Labs</h6>
                <ul>
                  <li>Koda - Yellow</li>
                  <li>Spencer - Black</li>
                  <li>Toby - Chocolate</li>
                  <li>Milo - Charcoal</li>
                </ul>
              </div>

              <div>
                <h6> Female Labs</h6>
                <ul>
                  <li> Reese - Chocolate</li>
                  <li> Lola - Chocolate</li>
                  <li>Fern - Fox Red</li>
                  <li>Willow - Charcoal</li>
                  <li>Ivy - Silver</li>
                  <li>Luna - White</li>
                </ul>
              </div>
            </div>
          </div>
         </div>
{/*           <Carousel>
            {labDetailsList.map((detail) => (
              <DogDetailsCard
                key={detail.id}
                img={detail.img}
                name={detail.name}
                description={detail.description}
                learnMoreDescription={detail.learnMoreDescription}
                birthDate={detail.birthDate}
                gender={detail.gender}
               
              />
            ))}
          </Carousel> */}
        </section>

    </LayoutContainerSections>
  )
}
