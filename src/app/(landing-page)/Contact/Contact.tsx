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
            <h6 > <a href="mailto:labridgekennels@hotmail.com" target="_blank">labridgekennels@hotmail.com</a> </h6>
            <h6> <a href="tel:+9025821675">(902) 582-1675</a> </h6> 
            <a href={googleMapsLink} className={styles.address_container}target="_blank" rel="noopener noreferrer">
                1230 Black Hole Road, Canning NS
                <FaLocationDot className={styles.icon} />
            </a>
                
{/*             <iframe 
            className={styles.map}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.568123850241!2d-64.48678202374057!3d45.195837971070816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b58f70dfb9b8d43%3A0x4b4c6e9295a0b53b!2s1230%20Black%20Hole%20Rd%2C%20Canning%2C%20NS%20B0P%201H0!5e0!3m2!1sen!2sca!4v1692983199073!5m2!1sen!2sca&z=${zoomAmount}`} 
            allowFullScreen={false}
            loading="lazy" 
        /> */}

        </section>
    </LayoutContainerSections>
  )
}


