'use client'
import React, {useState} from 'react'
import styles from './DogDetailsCard.module.css'
// Next
import Image from 'next/image'

// Internal Components
import Button from '@/components/Buttons/Button/Button'

interface DogDetailsCardProps {
    img: any,
    name: string,
    description: string,
    learnMoreDescription: string,
    birthDate: string,
    gender: string,
    price?: string | number,
}

export default function DogDetailsCard({img, name, description, learnMoreDescription, price, birthDate, gender}: DogDetailsCardProps) {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const toggleLearnMore = () => {
    setIsLearnMoreOpen((prevState) => !prevState )
  }

  return (
    <div className={styles.dog_card}>
        <div className={styles.image_container}>
          <Image src={img} className={styles.img} alt="a picture of a Lab from Labridge Farm's" loading="lazy" width={300} height={300}/>
        </div> 

        <div className={styles.text_container}>
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
        <button className={styles.button_normal} onClick={toggleLearnMore}>
          {isLearnMoreOpen ? <span> Close </span> : <span> Learn More </span>}
        </button>
        {isLearnMoreOpen ? (
          <div className={styles.learn_more}>
              <p>{learnMoreDescription}</p>
              <p> {gender}</p>
              <p> Born on: {birthDate}</p>
              {/* <p className={styles.price}> ${price} </p> */}
          </div>
        ) : null }

    </div>
  )
}
