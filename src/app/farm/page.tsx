import React from 'react'
// Internal Pages
import HeroFarm from './HeroFarm/HeroFarm'
import OurAnimals from './OurAnimals/OurAnimals'
import FarmPricing from './FarmPricing/FarmPricing'
 import WhyChooseUsFarms from './WhyChooseUsFarms/WhyChooseUsFarms'
 import FarmContact from './FarmContact/FarmContact'
// Internal Components
import LayoutContainerMain from '@/layouts/LayoutContainerMain/LayoutContainerMain'
import HorizontalLineBreak from '@/components/HorizontalLineBreak/HorizontalLineBreak'
import TestimonialsMeat from './TestimonialsMeat/TestimonialsMeat'

export default function FarmPage() {
  return (
    <LayoutContainerMain>
      <HeroFarm />
      <OurAnimals />
      <HorizontalLineBreak />
      <FarmPricing />
      <WhyChooseUsFarms />
      <TestimonialsMeat />
      <FarmContact />
    </LayoutContainerMain>
  )
}
