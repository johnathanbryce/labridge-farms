import React from 'react'
import styles from './HeroFarm.module.css'
// Next
import Image from 'next/image';
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections';
import HeaderFarm from '@/components/Headers/HeaderFarm/HeaderFarm';
import Button from '@/components/Buttons/Button/Button';
// Internal Assets
import heroPageFarmImg from '../../../../public/assets/heroPageFarm.jpg';


export default function HeroFarm() {
  return (
      <section className={styles.hero}>
        <Image src={heroPageFarmImg} className={styles.background_image} priority alt="Labridge Farm's background image"/>
        <HeaderFarm />
        <LayoutContainerSections>
        <div className={styles.hero_content}>
          <h1>Welcome to Labridge Farms </h1>
          <h6> Your one-stop destination for premium farm meats. Lorem ipsum delorum... </h6>
          <div className={styles.buttons_container}>
            <Button label="HOME" isTransparent={true} src="/"/>
            <Button label="OUR LABS" isTransparent={true} src="/labs"/>
          </div>
        </div>
        </LayoutContainerSections>
      </section>
  )
}
