import styles from './Button.module.css'
// Next
import Link from 'next/link'

interface ButtonProps{
    isTransparent: boolean
    label: string,
    onClick?: () => void,
    src?: any
}

function Button({ label, isTransparent, onClick, src}: ButtonProps) {
  // src is to link to another page 
  return (
    <Link href={src}>
        { isTransparent ?
          <button className={styles.button_transparent} onClick={onClick}> {label} </button>
          :
          <button className={styles.button_normal} onClick={onClick}> {label} </button>
        } 
    </Link>   
  
  )
}

export default Button