import React from 'react'
import styles from './WhyChooseLabridgeFarms.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// External Libraries
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'

export default function WhyChooseLabridgeFarms() {
  return (
    <LayoutContainerSections title="Why Choose Labridge Farms" bgColor='green'>
      <section className={styles.why_choose_grid}>
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
