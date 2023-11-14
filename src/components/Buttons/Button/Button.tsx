import styles from './Button.module.css'
// Next
import Link from 'next/link'

interface ButtonProps{
    isTransparent: boolean
    label: string,
    onClick?: () => void,
    src?: any
}

function Button({ label, isTransparent, src }: ButtonProps) {
  const buttonStyle = isTransparent ? styles.button_transparent : styles.button_normal;

  return (
      <Link href={src} className={buttonStyle}>
          {label}
      </Link>
  );
}


export default Button