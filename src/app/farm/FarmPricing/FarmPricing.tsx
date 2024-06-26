import React from 'react'
import styles from './FarmPricing.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
import ButtonOrder from '@/components/Buttons/ButtonOrder/ButtonOrder'
// Internal Assets
import beefPlaceholderImg from '../../../../public/assets/beefMainPlaceholder.jpg'
import porkPlaceholderImg from '../../../../public/assets/porkMainPlaceholder.jpg'


export default function FarmPricing() {
  return (
    <LayoutContainerSections title='Our Pricing' bgColor='white'>
        <section className={styles.farm_pricing} id="pricing">
            <ButtonOrder label="Place an Order" isTransparent={false} />
            
            <div className={styles.pricing_about}>
                <p> We sell our beef and pork by the side </p>
                <p> We also sell lots of ground beef separately as well at $7.00/lb. </p>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product}>
                    <Image 
                        src={beefPlaceholderImg} 
                        className={styles.product_img} 
                        alt="Labridge Farm's beef"
                        loading="lazy"
                        height={200}
                        width={200}
                        />
                    <div>
                        <h5> Beef </h5>
                        <p> <span className={styles.bold}>$6.50/lb</span> dressed weight </p>
                    </div>
                    <div className={styles.meat_options}>
                        <h6> Sides of beef include: </h6>
                        <ul >
                            <li>Various cuts of steak </li>
                            <li>Various cuts of roasts</li>
                            <li>Clear (boneless) stew meat</li>
                            <li>Ground beef</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.product}>
                    <Image 
                        src={porkPlaceholderImg} 
                        className={styles.product_img} 
                        alt="Labridge Farm's pork"
                        loading="lazy"
                        height={200}
                        width={200}
                    />
                    <div>
                        <h5> Pork </h5>
                        <p> <span className={styles.bold}>$5.50/lb</span> dressed weight </p>
                    </div>
                    <div className={styles.meat_options}>
                        <h6> Sides of pork include: </h6>
                        <ul>
                            <li>Pork chops & roasts </li>
                            <li>Cured ham steaks & roasts</li>
                            <li>Smoked bacon</li>
                            <li>Spare ribs</li>
                            <li>Ground pork</li>
                            <li>Sausages (various flavours available)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </LayoutContainerSections>
  )
}
