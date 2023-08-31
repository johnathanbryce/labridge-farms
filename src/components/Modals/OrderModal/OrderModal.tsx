import React from 'react'
import styles from './OrderModal.module.css'
// External Libraries
import { FaLocationDot } from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

interface ProductModalProps{
    onClose: () => void,
}

export default function OrderModal({onClose}: ProductModalProps) {

    return (
        <div className={styles.modal}>
          <div className={styles.modal_background} onClick={onClose} />
          <div className={styles.modal_content}>
            <AiFillCloseCircle className={styles.close} onClick={onClose} />
            <p> Any other description or text content you would like a user to know about before placing an order here... etc.. </p>
            <p> To place your order or find out more about our meat products, send us an email or give us a call: </p>
            <div className={styles.icons_container}>
              <a className={styles.link} href="tel:+9025821675">
                (902) 582-1675: <BsFillTelephoneFill className={styles.icon} />
              </a>
              <a href="mailto:labridgekennels@hotmail.com" target="_blank">
                labridgekennels@hotmail.com: <MdEmail className={styles.icon}/>
              </a>
            </div>
          </div>
      </div>
    );
}