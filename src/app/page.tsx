// Internal Component
import LayoutContainerMain from '@/layouts/LayoutContainerMain/LayoutContainerMain'
import HeroMain from './(landing-page)/HeroMain/HeroMain'
import About from './(landing-page)/About/About'
import WhyChooseLabridgeFarms from './(landing-page)/WhyChooseLabridgeFarms/WhyChooseLabridgeFarms'
import ShopMeats from './(landing-page)/ShopMeats/ShopMeats'

export default function Home() {
  return (
    <LayoutContainerMain>
      <HeroMain />
      <About />
      <WhyChooseLabridgeFarms />
      <ShopMeats />
    </LayoutContainerMain>
  )
}
