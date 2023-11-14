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
        <div className={styles.grid_section}>
          <h6 className={styles.grid_section_title}> Our Farm</h6>
          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Livestock raised free-range </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> 70 acres of agricultural bliss </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> All meat products are free of antibiotics and hormones </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Delicious heritage breeds of beef and pork </p>
          </div>
        </div>

        <div className={styles.grid_section}>
          <h6 className={styles.grid_section_title}> Our Labs</h6>
          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Labrador Retrievers raised free-range  </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Terrific family pets </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Wonderful hunting companions </p>
          </div>

          <div className={styles.why_choose_wrapper}>
            <IoIosCheckmarkCircleOutline className={styles.icon} />
            <p> Friendly and healthy Labs </p>
          </div>
        </div>


      </section>

    </LayoutContainerSections>
  )
}
