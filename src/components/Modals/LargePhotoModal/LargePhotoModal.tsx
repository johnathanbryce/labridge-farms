import React from 'react'
import styles from './LargePhotoModal.module.css'
// Next
import Image from 'next/image'
// External Libraries
import {AiOutlineCloseCircle} from 'react-icons/ai'

interface LargePhotoModalProps{
    onClose: () => void,
    image: any,
    description: string
}

export default function LargePhotoModal({image, description, onClose}: LargePhotoModalProps) {
  return (
    <div className={styles.photo_modal}>
        <div className={styles.modal_background} onClick={onClose} />
        <div className={styles.modal_content}>
            <AiOutlineCloseCircle className={styles.close} onClick={onClose} />
            <Image src={image} alt="" className={styles.img}/>
            <p className={styles.text}>{description}</p>
        </div>


    </div>
  )
}
