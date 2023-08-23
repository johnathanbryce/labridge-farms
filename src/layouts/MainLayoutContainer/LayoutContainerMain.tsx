import React from 'react'
import styles from './LayoutContainerMain.module.css'

interface LayoutContainerMainProps {
  children: any,
  bgColor: string,
}

export default function LayoutContainerMain({children, bgColor}: LayoutContainerMainProps) {
  let containerStyle: React.CSSProperties = {};

  // Check the bgColor prop and set the corresponding background color
  if (bgColor === 'white') {
    containerStyle.backgroundColor = '#F9F7F2';
  } else if (bgColor === 'green') {
    containerStyle.backgroundColor = '#254117';
  } else if (bgColor === 'dark') {
    containerStyle.backgroundColor = '#333333';
  }

  return (
    <div className={styles.container} style={containerStyle}> {children}</div>
  )
}
