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
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBQYHCP/EACgQAAICAgAGAQMFAAAAAAAAAAECAxEABAUGEhMhUTEHIkEUYXGBkf/EABkBAAEFAAAAAAAAAAAAAAAAAAEAAgMEBv/EAB0RAAICAgMBAAAAAAAAAAAAAAABAxECEhMhMVH/2gAMAwEAAhEDEQA/AMIXaXsgBpJT5Pij6xb7gfUcxThfQJFAX+2aFydyvw55NqPmDQkPciqKWF3Uq1+QQCPgD1l+b6RcmI88+1xLck12+4QCdI1RR5AsLdfGU8Z42HGB5LY56bYVCB3gBXjoND/MMufNnJCQ8wbcfCRKugrAQq03UVFfBIHu8MXNF9GONp1Rs5jV+oCpUYFfuJxo6Q7i9aR0oqu2D4qqs/iqyJ3OIbUeynRMRZIIoVV+sfO7sNrOWlJIdgCQLr+cy95JekG1Ilf0wQkLBK1+SQ35P94ZGa0jzx9cx6murOGBO+2w9P0//9k='
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
