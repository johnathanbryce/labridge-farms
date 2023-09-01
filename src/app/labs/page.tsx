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

export default function LabPage() {
  return (
    <LayoutContainerMain>
      <HeroLabs />
      <AboutUsKennel />
      <LabOverviewDetails />
      <Litters />
      <HorizontalLineBreak />
      <OurLabs />

    </LayoutContainerMain>
  )
}
