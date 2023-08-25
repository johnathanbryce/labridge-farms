import React from 'react';
import styles from './HorizontalLineBreak.module.css'
// Internal Components
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections';

export default function HorizontalLineBreak() {
  return (
    <LayoutContainerSections>
        <div className={styles.line}  />
    </LayoutContainerSections>
  )
}

