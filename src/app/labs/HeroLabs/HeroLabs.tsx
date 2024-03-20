import React from 'react'
import styles from './HeroLabs.module.css'
// Next
import Image from 'next/image';
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections';
import HeaderLabs from '@/components/Headers/HeaderLabs/HeaderLabs';
import Button from '@/components/Buttons/Button/Button';
// Internal Assets
import heroPageLabs from '../../../../public/assets/heroPageLabs.jpg';


export default function HeroLabs() {
  return (
      <section className={styles.hero}>
        <Image 
          src={heroPageLabs} 
          className={styles.background_image} 
          width={500} 
          height={500}
          priority 
          alt="Labridge Farm's background image"
        />
        
        <HeaderLabs />
        <LayoutContainerSections>
        <div className={styles.hero_content}>
          <h1>Welcome to Labridge Kennels </h1>
          <h6> Your one-stop destination for exceptional Labrador retrievers. </h6>
          <div className={styles.buttons_container}>
            <Button label="HOME" isTransparent={true} src="/"/>
            <Button label="OUR FARM" isTransparent={true} src="/farm"/>
          </div>
        </div>
        </LayoutContainerSections>
      </section>
  )
}