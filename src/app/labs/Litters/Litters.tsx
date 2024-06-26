import React from 'react'
import styles from './Litters.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import {PiDog} from 'react-icons/pi'
import {TbVaccine} from 'react-icons/tb'
import {MdMoneyOff} from 'react-icons/md'
import {BiMicrochip} from 'react-icons/bi'

export default function Litters() {
  return (
    <LayoutContainerSections title='Upcoming Litters' bgColor='brown'>
        <section className={styles.litters} id="litters">
            <h5> Fern and Spencer are expecting a litter in late May, 2024. Willow and Toby are expecting a litter in mid-June, 2024.</h5>
            <p> Our primary concern is producing hale and hearty dogs with outgoing, friendly temperaments that are intelligent, dependable, and eager to please.  </p>
            <div className={styles.grid_container}>
                <div className={styles.content}>
                    <PiDog className={styles.icon} />
                    <h6> Our pups are raised underfoot in the house and are exceptionally well socialized from birth.  </h6>
                </div>

                <div className={styles.content}>
                    <TbVaccine className={styles.icon} />
                    <h6> Preliminary vaccinations and deworming are done prior to leaving our home.</h6>
                </div>

                <div className={styles.content}>
                    <BiMicrochip className={styles.icon} />
                    <h6> We microchip all our puppies for identification.</h6>
                </div>

                <div className={styles.content}>
                    <MdMoneyOff className={styles.icon} />
                    <h6>Upon purchase, Labridge Kennels retains the right of first refusal for all dogs, preventing resale without our consent. </h6>
                </div> 
            </div>

            <p className={styles.disclaimer}> If you decide not to keep the dog, we will either take it back to care for or find a suitable placement.</p> 
        </section>
        
    </LayoutContainerSections>

  )
}
