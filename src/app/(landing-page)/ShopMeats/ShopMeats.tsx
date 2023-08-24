import React from 'react'
import styles from './ShopMeats.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
import Button from '@/components/Button/Button'
// Internal Assets
import beefPlaceholder from '../../../../public/assets/beefMainPlaceholder.jpg'
import porkPlaceholder from '../../../../public/assets/porkMainPlaceholder.jpg';
import groundBeefPlaceholder from '../../../../public/assets/groundBeefPlaceholder.jpg';

export default function ShopMeats() {
  return (
    <LayoutContainerSections>
        <section className={styles.shop_meats} id="farm">
        <div className={styles.header_section}>
            <h2> Our Beef & Pork</h2>
            <Button label="Shop Our Meat" isTransparent={false} src="/farm" />
        </div>

        <div className={styles.product_container}>
            <div className={styles.product_wrapper}>
                <Image src={beefPlaceholder} className={styles.product_img} alt="Labridge Farm's beef"  />
                <figcaption> <span className={styles.product_title}> Beef </span> (grass-fed & pastured raised)   </figcaption>
                <p> <span className={styles.product_price}> $6.00 / lb </span> dressed weight </p>
            </div>

            <div className={styles.product_wrapper}>
                <Image src={groundBeefPlaceholder} className={styles.product_img} alt="Labridge Farm's ground beef"  />
                <figcaption> <span className={styles.product_title}> Ground Beef </span> (grass-fed & pastured raised)   </figcaption>
                <p> <span className={styles.product_price}> $6.00 / lb </span> dressed weight </p>
            </div>

            <div className={styles.product_wrapper}>
                <Image src={porkPlaceholder} className={styles.product_img} alt="Labridge Farm's pork"  />
                <figcaption> <span className={styles.product_title}> Pork </span> (grass-fed & pastured raised)   </figcaption>
                <p> <span className={styles.product_price}> $5.00 / lb </span> dressed weight </p>
            </div>
        </div>

        <p className={styles.disclaimer}> <span className={styles.bold}>Labridge Farms promise:</span> all our meat is sourced from pasture-raised, grass-fed animals, reflecting our holistic approach to ethical and sustainable farming.</p>
        </section>
    </LayoutContainerSections>
  )
}
