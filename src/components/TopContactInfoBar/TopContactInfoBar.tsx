import React from 'react'
import styles from './TopContactInfoBar.module.css'
// Next
import Link from 'next/link'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai'

export default function TopContactInfoBar() {
  const googleMapsLink = "https://www.google.com/maps?q=1230+Black+Hole+Road,+Canning+NS"
  return (
      <section className={styles.top_contact_bar}>
        <div className={styles.contact_info}>
            <a href={googleMapsLink} className={styles.contact_wrapper} target="_blank" rel="noopener noreferrer">
              <FaLocationDot className={styles.icon} />
              <p className={styles.top_text}> Glenmont, Nova Scotia   </p>
            </a>
            <a href="tel:+9026799445" className={styles.contact_wrapper}>
              <BsFillTelephoneFill className={styles.icon} />
              <p className={styles.top_text}>(902) 679-9445  </p>
            </a>
        </div>

        <div className={styles.socials_info}>
          <Link className={styles.link} href="https://www.facebook.com/profile.php?id=100034992205922" target='_blank'>
            <AiFillFacebook className={styles.icon_social} />
            <span className={styles.socials_text}> kennels </span>
          </Link>
          <Link className={styles.link} href="https://www.instagram.com/labridge_kennels/" target='_blank'>
            <AiFillInstagram className={styles.icon_social} />
            <span className={styles.socials_text}> kennels </span>
          </Link>
          <Link className={styles.link} href="https://www.instagram.com/labridge_farms/" target='_blank'>
            <AiFillInstagram className={styles.icon_social} />
            <span className={styles.socials_text}> farms</span>
          </Link>
        </div>
      </section>
  )
}

// https://www.instagram.com/labridge_kennels/