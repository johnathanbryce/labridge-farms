import React from 'react'
import styles from './ProductItem.module.css'

interface ProductItemProps {
    openModal: () => void,
    product: any,
    isDog?: boolean,
    isMeat?: boolean

}
export default function ProductItem({openModal, product, isMeat, isDog}: ProductItemProps) {
    const {name, image, price, description } = product

  return (
    <div className={styles.product_wrapper} onClick={openModal}>
      {isMeat && (
        <figure>
          <img src={image.src} className={styles.product_img} alt="Labridge Farm's meat"  />
          <figcaption> <span className={styles.product_title}> {name} </span> {/* (grass-fed & pastured raised) */}  </figcaption>
          <span className={styles.product_price}> {price} </span> 
        </figure>
      )}

      {isDog && (
        <figure>
          <img src={image.src} className={styles.product_img} alt="Labridge Farm's meat"  />
          <figcaption> <span className={styles.product_title}> {name} </span>   </figcaption>
          {/*{description} */}
          <span className={styles.product_price}> {price} </span> contact us for more details 
        </figure>
      )}
    </div>
  )
}
