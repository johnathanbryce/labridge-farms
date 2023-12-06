
// Internal Pages
import HeroMain from './(landing-page)/HeroMain/HeroMain'
import About from './(landing-page)/About/About'
import WhyChooseLabridgeFarms from './(landing-page)/WhyChooseLabridgeFarms/WhyChooseLabridgeFarms'
import ShopMeats from './(landing-page)/ShopMeats/ShopMeats'
import ShopLabs from './(landing-page)/ShopLabs/ShopLabs'
import Testimonials from './(landing-page)/Testimonials/Testimonials'
import Contact from './(landing-page)/Contact/Contact'
// Layout
import LayoutContainerMain from '@/layouts/LayoutContainerMain/LayoutContainerMain'
// Internal Components
import HorizontalLineBreak from '@/components/HorizontalLineBreak/HorizontalLineBreak'

export default function Home() {
  return (
    <LayoutContainerMain>
      <HeroMain />
      <About />
      <WhyChooseLabridgeFarms />
      <ShopMeats />
      {/* <HorizontalLineBreak /> */}
      <Testimonials />
      <HorizontalLineBreak />
      <ShopLabs />

      <Contact />
    </LayoutContainerMain>
  )
}
