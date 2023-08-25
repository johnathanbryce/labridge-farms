import React from 'react'
import styles from './TestimonialCard.module.css'
// External Libraries
import {AiFillStar} from 'react-icons/ai'

interface TestimonialCardProps {
    rating: number,
    review: string,
    name: string,
    companyName: string
}

export default function TestimonialCard({rating, review, name, companyName}: TestimonialCardProps) {

    const starsArray = Array.from({ length: rating }, (_, index) => (
        <AiFillStar key={index} className={styles.star} />
    ));


    console.log(Array.from({length: 5}))
  return (
    <div className={styles.testimonial_card}>
        <div className={styles.stars_container}>
            {starsArray}
        </div>
        <p> {review}</p>
        <div>
            <h6> {name}</h6>
            <p> {companyName} </p>
        </div>
    </div>
  )
}
