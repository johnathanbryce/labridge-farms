import React from 'react'
import styles from './ButtonPageScroll.module.css'
// External Libraries
import { Link } from 'react-scroll'

interface ButtonPageScrollProps{
    label: string,
    src: string,
}

export default function ButtonPageScroll({src, label}: ButtonPageScrollProps) {
  return (
    <Link to={src} className={styles.button_normal} spy={true} smooth={true} duration={500}  offset={-100}> {label} </Link>
  )
}
