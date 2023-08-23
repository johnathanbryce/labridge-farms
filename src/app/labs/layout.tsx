
import React from 'react';
import styles from './layout.module.css'
// Next.js
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labridge Farms - Labs',
  description: "",
}

export default function LabsLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
          <section className={styles.main_content}>
              {children}
          </section>
  )
}