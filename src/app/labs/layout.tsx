
import React from 'react';
import styles from './layout.module.css'
// Next.js
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labridge Farms - Ethical Labrador Retriever Breeding',
  description: 'Discover Labridge Farms, a haven for ethically bred Labrador Retrievers. Our commitment to health, temperament, and breed quality sets us apart, ensuring loving and loyal companions for your family.',
  keywords: 'Labrador Retriever Breeding, Ethical Dog Breeding, Healthy Lab Puppies, Family-Friendly Labs, Labrador Temperament, Quality Lab Breeders, Purebred Labradors, Champion Bloodlines, Lab Puppy Care, Responsible Dog Breeding'
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