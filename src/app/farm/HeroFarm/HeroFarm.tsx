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
        <Image 
          src={heroPageFarmImg} 
          className={styles.background_image} 
          priority 
          alt="Labridge Farm's background image" 
          placeholder='blur'           
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAcCBQb/xAAnEAABAwQBBAAHAAAAAAAAAAABAgMEAAUSIREGExQxBzJBUWGR0f/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/xAAfEQABBQABBQAAAAAAAAAAAAABAAIDBBETIlJxsdH/2gAMAwEAAhEDEQA/AN/P656bgOtNPR5anHflDaMx7A2Roe/rUZnxC6chNd5xpSWcsO6pXCQfyeKQDVymy7p4zay2wRmrFXBP3H7FWEh9FztD0OUrJt13gDjQx2P5WF1+y3Nd6+JGQQk9TU8bX15BukXybbHjPR8ijIFZ2DsUUgE2xm3pS1CXJSyoZ8d4p2fehRUTdsE62U54COGLtX//2Q=='
          height={500}
          width={500}
        />
        <HeaderFarm />
        <LayoutContainerSections>
        <div className={styles.hero_content}>
          <h1>Welcome to Labridge Farms </h1>
          <h6> Your one-stop destination for premium farm meats. </h6>
          <div className={styles.buttons_container}>
            <Button label="HOME" isTransparent={true} src="/"/>
            <Button label="OUR LABS" isTransparent={true} src="/labs"/>
          </div>
        </div>
        </LayoutContainerSections>
      </section>
  )
}
