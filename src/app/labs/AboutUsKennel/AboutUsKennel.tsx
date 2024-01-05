'use client'
import React, {useState} from 'react'
import styles from './AboutUsKennel.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
import { AutoScrollCarousel } from '@/components/AutoScrollCarousel/AutoScrollCarousel'
import Button from '@/components/Buttons/Button/Button'
import ButtonPageScroll from '@/components/Buttons/ButtonPageScroll/ButtonPageScroll'
// Internal Assets
import CaelPupImg from '../../../../public/assets/Cael-pup1.jpg'
import LilyImg from '../../../../public/assets/Lily2.jpg'
import OliveImg from '../../../../public/assets/Olive.jpg'
import CodaImg from '../../../../public/assets/Coda.jpg'
import SophieImg from '../../../../public/assets/Sopphie1.jpg'
import SageImg from '../../../../public/assets/Sage.jpg'

export default function AboutUsKennel() {
    const [displayMore, setDisplayMore] = useState(false);

    const toggleReadMore = () => {
        setDisplayMore((prevState) =>!prevState )
    }
  return (
    <LayoutContainerSections title="About Labridge Kennels" bgColor='white'>
        <section className={styles.about}>
            <div className={styles.text}>
                <p> Labridge Kennels is a small CKC registered breeding operation located in the picturesque Annapolis Valley of Nova Scotia.  We are committed to producing the highest quality, intelligent, reliable Labrador Retrievers.   </p>
                <p>We raise our dogs actively and they spend as much time outdoors with people as possible.  Our dogs are members of the household, and time is made for all our dogs each day.  Our kennels are large with plenty of outdoor space for exercise and warm, weather-tight areas inside to keep cozy and dry. </p>
            </div>

            {/* displays the ...read more option on >1200 px screen sizes */}
            <div className={styles.text_read_more}>
                <p> Labridge Kennels is a small hobby breeding operation located in the picturesque Annapolis Valley of Nova Scotia.  We are committed to producing the highest quality, intelligent, reliable Labrador Retrievers.   </p>
                { displayMore ? (
                    <>
                        <p>We raise our dogs actively and they spend as much time outdoors with people as possible.  Our dogs are members of the household, and time is made for all our dogs each day.  Our kennels are large with plenty of outdoor space for exercise and warm, weather-tight areas inside to keep cozy and dry. </p>
                     </>
                ) : null}
                 <p className={styles.read_toggle} onClick={toggleReadMore}> {displayMore ?  <> Read Less...</>  : <> Read More...</>}</p>
                
               
            </div>

            <div className={styles.images}>
                <ButtonPageScroll label='View Our Labs' src='labs' />
                <AutoScrollCarousel>
                    <Image src={CaelPupImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                    <Image src={LilyImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                    <Image src={OliveImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                    <Image src={CodaImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                    <Image src={SophieImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                    <Image src={SageImg} className={styles.img} alt="A Labrador from Labridge Farms"/>
                </AutoScrollCarousel>
            </div>


        </section>
    </LayoutContainerSections>
  )
}
