import React from 'react';
/* import styles from './layout.module.css' */
// Next.js
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labridge Farms - Farms',
  description: "",
}

export default function FarmLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <section /* className={styles.main_content} */>
        {children}
    </section>
  )
}