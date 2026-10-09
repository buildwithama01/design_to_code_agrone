import AgriculturalFeatures from './AgriculturalFeatures/AgriculturalFeatures'
import CTA from './CTA/CTA'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import NewsArticles from './NewsArticles/NewsArticles'
import OperationsIntro from './OperationsIntro/OperationsIntro'
import Products from './Products/Products'
import ReliabilitySection from './ReliabilitySection/ReliabilitySection'
import WhyAgrone from './WhyAgrone/WhyAgrone'

function AgroneLandingPage() {
  return (
    <div className="font-sans">
      <main>
        <Hero />
        <OperationsIntro />
        <AgriculturalFeatures />
        <ReliabilitySection />
        <WhyAgrone />
        <Products />
        <NewsArticles />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default AgroneLandingPage
