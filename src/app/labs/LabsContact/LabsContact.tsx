import React from 'react'
import styles from './LabsContact.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'

export default function LabsContact() {
  const googleMapsLink = "https://www.google.com/maps?q=1230+Black+Hole+Road,+Canning+NS"
  return (
    <LayoutContainerSections title="" bgColor='brown'>
        <section className={styles.contact} id="contact">
            <p> Whether you have inquiries about our labs or are considering making a purchase, contact us below: </p>
            <h6 className={styles.link} > <a href="mailto:labridgekennels@hotmail.com" target="_blank" >labridgekennels@hotmail.com</a> </h6>
            <h6 className={styles.link}> <a href="tel:+9026799445" >(902) 679-9445</a> </h6>
            <a href={googleMapsLink} className={styles.address_container}target="_blank" rel="noopener noreferrer" >
                Glenmont, Nova Scotia
                <FaLocationDot className={styles.icon} />
            </a>      
        </section>
    </LayoutContainerSections>
  )
}