import React from 'react'
import styles from './FarmContact.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'

export default function FarmContact() {
  return (
    <LayoutContainerSections title="Contact Us" bgColor='white'>
        <section className={styles.contact} id="contact">
            <p> Do you have questions about our products or want to place an order? Contact us below: </p>
            <h6 className={styles.link} > <a href="mailto:labridgekennels@hotmail.com" target="_blank" >labridgekennels@hotmail.com</a> </h6>
            <h6 className={styles.link}> <a href="tel:+9025821675" >(902) 582-1675</a> </h6>         
        </section>
    </LayoutContainerSections>
  )
}