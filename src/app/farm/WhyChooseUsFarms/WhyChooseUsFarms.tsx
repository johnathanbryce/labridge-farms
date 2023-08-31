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
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

        <div className={styles.why_choose_wrapper}>
          <IoIosCheckmarkCircleOutline className={styles.icon} />
          <p> Text callout here... </p>
        </div>

      </section>

    </LayoutContainerSections>
  )
}
