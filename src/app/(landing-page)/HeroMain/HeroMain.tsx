import React from 'react'
import styles from './HeroMain.module.css'
// Next
import Image from 'next/image';
// Internal Components
import LayoutContainerMain from '@/layouts/MainLayoutContainer/LayoutContainerMain';
import HeaderMain from '@/components/Headers/HeaderMain/HeaderMain';
// Internal Assets
import heroPageFarmImg from '../../../../public/assets/heroPageMainPlaceholder.png';


export default function HeroMain() {
  return (
      <section className={styles.hero}>
        <Image src={heroPageFarmImg} className={styles.background_image} alt="Labridge Farm's main background image"/>
        <HeaderMain />
 

      </section>
  )
}
