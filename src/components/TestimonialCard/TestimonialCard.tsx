import React from 'react'
import styles from './TestimonialCard.module.css'
// External Libraries
import {AiFillStar} from 'react-icons/ai'

interface TestimonialCardProps {
    review: string,
    name: string,
}

export default function TestimonialCard({ review, name}: TestimonialCardProps) {
/*     const starsArray = Array.from({ length: rating }, (_, index) => (
        <AiFillStar key={index} className={styles.star} />
    ));
 */
  return (
    <div className={styles.testimonial_card}>
        <p> {review}</p>
        <div>
            <h6> {name}</h6>
        </div>
    </div>
  )
}
