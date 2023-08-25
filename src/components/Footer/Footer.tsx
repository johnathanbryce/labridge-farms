import React from 'react'
import styles from './Footer.module.css'
// Next 
import Link from 'next/link'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function Footer() {
  const googleMapsLink = "https://www.google.com/maps?q=1230+Black+Hole+Road,+Canning+NS"
  return (
    <LayoutContainerSections bgColor='dark'>
      <footer className={styles.footer}>
        <div className={styles.footer_section}>
          <h5> LABRIDGE FARMS </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          </p>
          <div className={styles.icons_container}>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              <FaLocationDot className={styles.icon} />
            </a>
            <a href="tel:+9025821675">
              <BsFillTelephoneFill className={styles.icon} />
            </a>
            <a href="mailto:labridgekennels@hotmail.com" target="_blank">
              <MdEmail className={styles.icon}/>
            </a>
          </div>
        </div>
    

        <div className={styles.footer_section}>
            <h5> Services </h5>
            <Link href="/labs"><p> Labridge Kennels </p></Link>
            <Link href="/farm"><p> Labridge Farms </p></Link>
        </div>


        <div className={styles.footer_section}>
            <h5> Contact </h5>
            <a href="mailto:labridgekennels@hotmail.com" target="_blank">labridgekennels@hotmail.com</a> 
            <a href="tel:+9025821675">(902) 582-1675</a> 
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                1230 Black Hole Road, Canning NS
            </a>
        </div>
      </footer>
    </LayoutContainerSections>
  )
}
