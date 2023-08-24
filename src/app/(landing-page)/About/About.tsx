import React from 'react'
import styles from './About.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Assets
import aboutUsPlaceholderImg from '../../../../public/assets/aboutUsPlaceholder.jpg'

export default function About() {
  return (
    <LayoutContainerSections title="What We Offer" bgColor='white'>
        <section className={styles.about} id="about">
            <h5 className={styles.subheader}> Explore our delicious selection of sustainably sourced meats and discover our champion bloodline Labradors,
                    ensuring quality and excellence in every aspect of our business.
            </h5>
            <div className={styles.callout_card}>
                <div className={styles.callout}>
                    <p> 2000+ </p>
                    <p> Callout goes here </p>
                </div>
                <div className={styles.callout}>
                    <p> 150 </p>
                    <p> Callout goes here </p>
                </div>
                <div className={styles.callout}>
                    <p> 300+ </p>
                    <p> Callout goes here </p>
                </div>
                <div className={styles.callout}>
                    <p> 90% </p>
                    <p> Callout goes here </p>
                </div>
            </div> 

            <div className={styles.about_us_container}>
                <Image src={aboutUsPlaceholderImg} className={styles.bio_pic} alt='A bio picture of Matthew, owner of Labridge Farms'/>
                <div className={styles.about_us_text_wrapper}>
                    <h3> About Us </h3>
                    <p> **PLACEHOLDER ABOUT US** At Labridge Farms, we are dedicated to providing excellence in both organic animal protein and Labrador Retriever companionship. Our farm is nestled in the serene landscapes of the Annapolis Valley, Nova Scotia. </p>
                    <p> **PLACEHOLDER ABOUT US**Our commitment extends from the farm to the kennels, providing you with ethical choices for animal protein and beloved Labrador companions. Experience the Labridge difference today.  </p>
                </div>
            </div>  
        </section>
    </LayoutContainerSections>
  )
}
