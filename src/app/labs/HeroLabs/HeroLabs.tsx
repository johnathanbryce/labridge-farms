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
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACIQAAICAgIBBQEAAAAAAAAAAAECAwQAERIhMQUUIkFRkf/EABYBAQEBAAAAAAAAAAAAAAAAAAECBP/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhIRMf/aAAwDAQACEQMRAD8Azyokt13Ssru6jkQB3rF2qdyO3JEYGUqpc78cf3fjKhauUKYNe06JyBKqNd/u8TN6pZn9L4ySyGCbaPDy+LfLff2fGZ5pPwrXURFiOnVg32D1hlEx95K085YyOdni2h/MMHcoNI//2Q=='
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