import React from 'react'
import styles from './HeroMain.module.css'
// Next
import Image from 'next/image';
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections';
import HeaderMain from '@/components/Headers/HeaderMain/HeaderMain';
import Button from '@/components/Buttons/Button/Button';
// Internal Assets
import heroPageImg from '../../../../public/assets/MainPagePicture.jpg';

export default function HeroMain() {
  return (
      <section className={styles.hero}>
        <Image 
          src={heroPageImg} 
          className={styles.background_image}  
          alt="Labridge Farm's main background image" 
          height={500}
          width={500}
          priority
        />
        <HeaderMain />
        <LayoutContainerSections>
        <div className={styles.hero_content}>
          <h1>Welcome to Labridge Farms </h1>
          <h6> Your one-stop destination for premium farm meats and exceptional Labrador retrievers. </h6>
          <div className={styles.buttons_container}>
            <Button label="OUR FARM" isTransparent={true} src="/farm"/>
            <Button label="OUR LABS" isTransparent={true} src="/labs"/>
          </div>
        </div>
 
        </LayoutContainerSections>
      </section>
  )
}
