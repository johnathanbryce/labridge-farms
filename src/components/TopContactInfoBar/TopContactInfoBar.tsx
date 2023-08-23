import React from 'react'
import styles from './TopContactInfoBar.module.css'
// Next
import Link from 'next/link'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai'
// Internal Components
import LayoutContainerMain from '@/layouts/MainLayoutContainer/LayoutContainerMain'

export default function TopContactInfoBar() {
  const googleMapsLink = "https://www.google.com/maps?q=1230+Black+Hole+Road,+Canning+NS"
  return (
    <LayoutContainerMain bgColor='white'>
      <section className={styles.top_contact_bar}>
        <div className={styles.contact_info}>
          <div className={styles.contact_wrapper}>
            <FaLocationDot className={styles.icon} />
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              1230 Black Hole Road, Canning NS
            </a>
          </div>
          <div className={styles.contact_wrapper}>
            <BsFillTelephoneFill className={styles.icon} />
            <p className={styles.top_text}><a href="tel:+9025821675">(902) 582-1675</a>  </p>
          </div>
        </div>

        <div className={styles.socials_info}>
          <Link href="" target='_blank'><AiFillFacebook className={styles.icon_social} /></Link>
          <Link href="" target='_blank'><AiFillInstagram className={styles.icon_social} /></Link>
          <Link href="" target='_blank'><AiFillTwitterCircle className={styles.icon_social} /></Link>
        </div>
      </section>
    </LayoutContainerMain>
  )
}
