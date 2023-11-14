import React from 'react'
import styles from './WhyChooseUsFarms.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'

export default function WhyChooseUsFarms() {
  return (
    <LayoutContainerSections title="Why Choose Our Meat" bgColor='green'>
      <section className={styles.why_choose_grid} id="why">
        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Antibiotic free </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Hormone free </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> No pesticides or herbicides used on property </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Naturally lean and delicious Highland beef </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Heritage-breed pork products </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Free-range eggs </p>
        </div>
      </section>

    </LayoutContainerSections>
  )
}
