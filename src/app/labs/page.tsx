import React from 'react'
// Internal Components
import LayoutContainerMain from '@/layouts/LayoutContainerMain/LayoutContainerMain'
import HorizontalLineBreak from '@/components/HorizontalLineBreak/HorizontalLineBreak'
// Pages
import HeroLabs from './HeroLabs/HeroLabs'
import AboutUsKennel from './AboutUsKennel/AboutUsKennel'
import OurLabs from './OurLabs/OurLabs'
import Litters from './Litters/Litters'
import LabOverviewDetails from './LabOverviewDetails/LabOverviewDetails'
import LabsPhotoGallery from './LabsPhotoGallery/LabsPhotoGallery'
import LabsContact from './LabsContact/LabsContact'

export default function LabPage() {
  return (
    <LayoutContainerMain>
      <HeroLabs />
      <AboutUsKennel />
      <LabOverviewDetails />
      <OurLabs />
      <Litters />
      <LabsPhotoGallery />
      <LabsContact />
    </LayoutContainerMain>
  )
}
