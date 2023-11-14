'use client'
import React, {useState} from 'react'
import styles from './PhotoGalleryCard.module.css'
// Next
import Image from 'next/image'
// Internal Components
import LargePhotoModal from '@/components/Modals/LargePhotoModal/LargePhotoModal'

interface PhotoGalleryCardProps {
    img: any,
    name: string,
    description: string,
}

export default function PhotoGalleryCard({img, name, description}: PhotoGalleryCardProps) {
    const [isPhotoEnlarged, setIsPhotoEnlarged] = useState(false);
  console.log('img')
    const toggleEnlargePhoto = () => {
      setIsPhotoEnlarged((prevState) => !prevState )
    }
  return (
    <div className={styles.photo_gallery_card}>
        <Image src={img} className={styles.img} alt="an image of one of our labradors" loading='lazy'/>
        <div className={styles.hover_details_container}>
            <div className={styles.flex_wrapper}>
                <p>{description}</p>
                <button className={styles.button_normal} onClick={toggleEnlargePhoto}>
                    View Larger
                 </button>        
            </div>
            {isPhotoEnlarged ? <LargePhotoModal image={img} description={description} onClose={toggleEnlargePhoto} /> : null}
        </div>
    </div>
  )
}
