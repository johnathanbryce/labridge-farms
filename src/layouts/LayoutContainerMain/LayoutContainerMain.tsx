import React from 'react'
import styles from './LayoutContainerMain.module.css'

interface LayoutContainerMainProps {
  children: any,
}

export default function LayoutContainerMain({children}: LayoutContainerMainProps) {

  return (
    <main className={styles.main_container} >
       {children}
    </main>
  )
}