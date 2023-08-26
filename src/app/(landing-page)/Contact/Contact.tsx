import React from 'react'
import styles from './Contact.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'

export default function Contact() {
    const googleMapsLink = "https://www.google.com/maps?q=1230+Black+Hole+Road,+Canning+NS"

    /* const zoomAmount = 0; */

  return (
    <LayoutContainerSections title="Have Questions? Get in Touch" bgColor='green'>
        <section className={styles.contact}>
            <h6 className={styles.link} > <a href="mailto:labridgekennels@hotmail.com" target="_blank" >labridgekennels@hotmail.com</a> </h6>
            <h6 className={styles.link}> <a href="tel:+9025821675" >(902) 582-1675</a> </h6> 
            <a href={googleMapsLink} className={styles.address_container}target="_blank" rel="noopener noreferrer" >
                1230 Black Hole Road, Canning NS
                <FaLocationDot className={styles.icon} />
            </a>           
        </section>
    </LayoutContainerSections>
  )
}


