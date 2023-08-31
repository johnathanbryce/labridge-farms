import React from 'react'
import styles from './OurAnimals.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Assets
import highlandImg from '../../../../public/assets/highland.jpg'
import pigPlaceholderImg from '../../../../public/assets/pigPlaceholder.jpg'

export default function OurAnimals() {
  return (
    <LayoutContainerSections title="Our Animals" bgColor='white'>
        <section className={styles.our_animals} id="animals">
            <p className={styles.about}> 
                At Labridge Farms we produce high-quality, organic animal protein.  Our cattle are raised exclusively on pasture forage and hay; our cattle are not grain-fed.  Our pork is raised primarily on compostable food waste supplemented with spent beer grains or commercial hog grower as required.
                None of our animals are given any amount of prophylactic antibiotic medications or growth hormones of any kind; our animals receive only food and fresh water.

            </p>
            <div className={styles.product_section}>
                <h4> Beef</h4>
                <div className={styles.product_content_wrapper}>
                    <p> We raise primarily Scottish Highland cattle and Highland / Hereford crosses.  Our beef is rich in nutrients, lean, well-marbled and incredibly flavourful!  Highland beef is nutritious with lower levels of total fat and cholesterol and higher levels of omega-3 fatty acids than other beef varieties.</p>
                    <Image src={highlandImg} className={styles.product_img} alt="A picture of a Labrige Farm's Highland cow"/>
                </div>
            </div> 

            <div className={styles.product_section}>
                <h4> Pork</h4>
                <div className={styles.product_content_wrapper}>
                    <Image src={pigPlaceholderImg} className={styles.product_img} alt="A picture of a Labrige Farm's Berkshire pig"/>
                    <p> We raise primarily Berkshire pigs for our pork.  The Berkshire pig is a heritage breed, and often called the “wagyu of pork” the meat is prized for its rich, complex flavour and succulent texture and marbling.  You will find the meat a darker red and sweeter, more flavourful meat than conventional commercial pork.</p>
                </div>
            </div> 


        </section>
    </LayoutContainerSections>
  )
}
