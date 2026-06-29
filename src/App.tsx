import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Booking from './components/Booking'
import TrophyCarousel from './components/TrophyCarousel'
import PromotionBanner from './components/PromotionBanner'
import Misc from './components/Misc'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Booking />
        <TrophyCarousel />
        <PromotionBanner />
        <Misc />
      </main>
      <Footer />
    </>
  )
}
