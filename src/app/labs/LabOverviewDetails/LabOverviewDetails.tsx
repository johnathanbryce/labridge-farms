import React from 'react'
import styles from './/LabOverviewDetails.module.css'
// Next
import Image from 'next/image'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Internal Assets
import vetChecked from '../../../../public/assets/vetChecked.png'
import registedBusiness from '../../../../public/assets/registedBusiness.png'
import dogVaccine from '../../../../public/assets/dogVaccine.png'
import dogDewormed from '../../../../public/assets/dogDewormed.png'
import microchip from '../../../../public/assets/microchip.png'
import dogHealth from '../../../../public/assets/dogHealth.png'

export default function LabOverviewDetails() {
  return (
    <LayoutContainerSections title="Purebred Labrador Retriever Puppies" bgColor='brown'>
        <section className={styles.lab_overview}>
            <div className={styles.content}>
                <Image src={registedBusiness} className={styles.icon} alt="icon representing a registered business" width={50} height={50}/>
                <p> CKC registered business </p>
            </div>

            <div className={styles.content}>
            <Image src={vetChecked} className={styles.icon} alt="icon representing vet checked and approved" width={50} height={50}/>
                <p> Veterinarian checked  </p>
            </div>

            <div className={styles.content}>
                <Image src={dogVaccine} className={styles.icon} alt="icon of a shots/vaccine" width={50} height={50}/>
                <p> First set of shots/vaccines  </p>
            </div>

            <div className={styles.content}>
                <Image src={dogDewormed} className={styles.icon} alt="icon of a dewormed dog" width={50} height={50}/>
                <p> Dewormed </p>
            </div>

            <div className={styles.content}>
                <Image src={microchip} className={styles.icon} alt="icon of a micro-chip" width={50} height={50}/>
                <p> Micro-chipped for identification  </p>
            </div>

            <div className={styles.content}>
                <Image src={dogHealth} className={styles.icon} alt="icon of health gaurantee" width={50} height={50}/>
                <p> Health Guarantee  </p>
            </div>
        </section>
    </LayoutContainerSections>
  )
}
