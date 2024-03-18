import React from 'react'
import styles from './About.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Assets
import aboutUs from '../../../../public/assets/aboutUs.jpg'

export default function About() {
  return (
    <LayoutContainerSections title="What We Offer" bgColor='white'>
        <section className={styles.about} id="about">
            <h5 className={styles.subheader}> Explore our delicious selection of sustainably sourced meats and discover our CKC registered Labrador Retrievers,
                    ensuring quality and excellence in every aspect of our business.
            </h5>
            <div className={styles.callout_card}>
                <div className={styles.callout}>
                    <p> 20+ years of experience raising Labs   </p>
                </div>
                <div className={styles.callout}>
                    <p> 70 acres of farmland </p>
                </div>
                <div className={styles.callout}>
                    <p> Heritage breeds of livestock  </p>
                </div>
                <div className={styles.callout}>
                    <p> Heated indoor kennel </p>
                </div>
            </div> 

            <div className={styles.about_us_container}>
                <Image 
                    src={aboutUs} 
                    className={styles.bio_pic} 
                    alt="A picture of one of Labridge Farm's Cows"
                    height={425}
                    width={425}
                />
                <div className={styles.about_us_text_wrapper}>
                    <h3> About Us </h3>
                    <p> Labridge Farms is a small-scale, organic farm producing high-quality animal products as well as hale and hearty Labrador Retrievers. We are located in the beautiful and picturesque Annapolis Valley of Nova Scotia. </p>
                    <p> Labridge offers top-quality organic animal protein and ethical Labrador Retriever companionship, from our farm to our kennels. Discover the Labridge difference.  </p>
                </div>
            </div>  
        </section>
    </LayoutContainerSections>
  )
}
