import React from 'react'
import styles from './ShopLabs.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
import Button from '@/components/Button/Button'
// Internal Assets
import Lily2 from '../../../../public/assets/Lily2.jpg'
import Olive from '../../../../public/assets/Olive.jpg';
import River2 from '../../../../public/assets/River2.jpg';

export default function ShopLabs() {
  return (
    <LayoutContainerSections>
        <section className={styles.shop_labs} id="farm">
        <div className={styles.header_section}>
            <h2> Our Labrador Retrievers</h2>
            <Button label="Shop Labradors" isTransparent={false} src="/labs" />
        </div>

        <div className={styles.product_container}>
            <div className={styles.product_wrapper}>
                <Image src={Lily2} className={styles.product_img} alt="A picture of one of Labridge Farm's labrador retrievers"  />
                <figcaption> <span className={styles.product_title}> Lily </span> (brief description if necessary)   </figcaption>
            </div>

            <div className={styles.product_wrapper}>
                <Image src={Olive} className={styles.product_img} alt="A picture of one of Labridge Farm's labrador retrievers"  />
                <figcaption> <span className={styles.product_title}> Olive </span> (brief description if necessary)   </figcaption>
            </div>

            <div className={styles.product_wrapper}>
                <Image src={River2} className={styles.product_img} alt="A picture of one of Labridge Farm's labrador retrievers"  />
                <figcaption> <span className={styles.product_title}> River </span> (brief description if necessary)   </figcaption>
            </div>
        </div>

        <p className={styles.disclaimer}> <span className={styles.bold}>Labridge Kennels promise:</span> a brief disclaimer or blurb about our dogs here...</p>
        </section>
    </LayoutContainerSections>
  )
}