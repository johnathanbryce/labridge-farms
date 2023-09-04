import React from 'react'
import styles from './LabsContact.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'

export default function LabsContact() {
  return (
    <LayoutContainerSections title="" bgColor='brown'>
        <section className={styles.contact} id="contact">
            <p> Whether you have inquiries about our labs or are considering making a purchase, contact us below: </p>
            <h6 className={styles.link} > <a href="mailto:labridgekennels@hotmail.com" target="_blank" >labridgekennels@hotmail.com</a> </h6>
            <h6 className={styles.link}> <a href="tel:+9025821675" >(902) 582-1675</a> </h6>         
        </section>
    </LayoutContainerSections>
  )
}