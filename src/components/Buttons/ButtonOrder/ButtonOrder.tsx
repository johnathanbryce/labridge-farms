'use client'
import {useState} from 'react'
import styles from './ButtonOrder.module.css'
// Internal Components
import OrderModal from '@/components/Modals/OrderModal/OrderModal'

interface ButtonProps {
    isTransparent: boolean
    label: string,
}

function ButtonOrder({ label, isTransparent}: ButtonProps) {
  // src is to link to a section of the same page
  const [isPlaceOrderModalOpen, setIsPlaceOrderModalOpen] = useState(false);

  const toggleModal = () => {
      setIsPlaceOrderModalOpen((prevState) => !prevState)
  }

  const closeModal = () => {
    setIsPlaceOrderModalOpen(false);
  };

  return (
    <>
        { isTransparent ?
          <button className={styles.button_transparent} onClick={toggleModal}> {label} </button>
          :
          <button className={styles.button_normal} onClick={toggleModal}> {label} </button>
        }

        {isPlaceOrderModalOpen ? <OrderModal onClose={closeModal} /> : null} 
        
        
    </>
  )
}

export default ButtonOrder