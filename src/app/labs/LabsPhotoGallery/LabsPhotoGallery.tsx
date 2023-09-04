import React from 'react'
import styles from './LabsPhotoGallery.module.css'
// Layout
import LayoutContainerSections from '@/layouts/LayoutContainerSections/LayoutContainerSections'
// Lists
import labsPhotoGalleryList from '../../../lists/labsPhotoGalleryList';
// Internal Components
import PhotoGalleryCard from '@/components/Cards/PhotoGalleryCard/PhotoGalleryCard';


export default function LabsPhotoGallery() {
  return (
    <LayoutContainerSections title="Photo Gallery" bgColor='white'>
        <h6 className={styles.sub_header}> Here are a few snaps of our adorable labs. </h6>
        <section className={styles.labs_photo_gallery} id="photos">
            {
                labsPhotoGalleryList.map((photo) => (
                    <PhotoGalleryCard 
                        key={photo.id} 
                        img={photo.img} 
                        name={photo.name}
                        description={photo.description}
                    />
                ))
            }
        
        </section>
    </LayoutContainerSections>
  )
}
