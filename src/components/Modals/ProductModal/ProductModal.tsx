import React from 'react'
import styles from './ProductModal.module.css'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

interface ProductModalProps{
    isOpen?: boolean,
    onClose: () => void,
    name: string,
    description: string,
    image: any,
}

export default function ProductModal({onClose, name, description, image}: ProductModalProps) {

    return (
        <div className={styles.modal}>
          <div className={styles.modal_background} onClick={onClose} />
          <div className={styles.modal_content}>
            <AiFillCloseCircle className={styles.close} onClick={onClose} />
            <img src={image.src} className={styles.img} alt="" />
            <h6 className={styles.name}> {name} </h6>
            <p className={styles.description}> {description} </p>
            <p> To place your order, or find out more about this product, send us an email or give us a call: </p>
            <div className={styles.icons_container}>
              <a href="tel:+9025821675">
                Phone: <BsFillTelephoneFill className={styles.icon} />
              </a>
              <a href="mailto:labridgekennels@hotmail.com" target="_blank">
                Email: <MdEmail className={styles.icon}/>
              </a>
            </div>
          </div>
      </div>
    );
}
