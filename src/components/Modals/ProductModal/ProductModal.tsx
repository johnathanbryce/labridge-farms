import React from 'react'
import styles from './ProductModal.module.css'
import Image from 'next/image'
// External Libraries
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
// Internal Components
import Button from '@/components/Buttons/Button/Button'

interface ProductModalProps{
    isOpen?: boolean,
    onClose: () => void,
    name: string,
    description: string,
    image: any,
    src?: string
}

export default function ProductModal({onClose, name, description, image, src}: ProductModalProps) {

    return (
        <div className={styles.modal}>
          <div className={styles.modal_background} onClick={onClose} />
          <div className={styles.modal_content}>
            <AiFillCloseCircle className={styles.close} onClick={onClose} />
            <Image src={image.src} className={styles.img} alt="" width={300} height={300} loading="lazy"/>
            <h6 className={styles.name}> {name} </h6>
            <p className={styles.description}> {description} </p>
            <p> To place your order, or find out more, send us an email or give us a call: </p>
            <div className={styles.icons_container}>
              <a href="tel:+9026799445">
                Phone: <BsFillTelephoneFill className={styles.icon} />
              </a>
              <a href="mailto:labridgekennels@hotmail.com" target="_blank">
                Email: <MdEmail className={styles.icon}/>
              </a>
                <Button
                  isTransparent={false}
                  label="Learn more"
                  src={src}
                />
            </div>

          </div>
      </div>
    );
}
