import React from 'react';
/* import styles from './layout.module.css' */
// Next.js
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labridge Farms - Premium Beef & Pork',
  description: 'Explore Labridge Farms for the finest selection of sustainably raised, farm-fresh beef and pork. Experience the taste of quality meats directly from our farm to your table.',
  keywords: 'Farm Fresh Meats, Sustainable Farming, Premium Beef, Quality Pork, Organic Farming, Ethical Meat Production, Farm to Table, Grass-Fed Beef, Free-Range Pork, Local Farm Produce'
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