import heroOne from '../../assets/images/hero1.jpg'
import heroTwo from '../../assets/images/hero2.png'
import Header from '../Header/Header'
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import ProductCard from './ProductCard'
import ProductCard2 from './ProductCard2'
import RatingCard from './RatingCard'

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-[1600px] min-h-[calc(100svh-0.75rem)] overflow-hidden rounded-[2rem] bg-agrone-green sm:mt-4 sm:w-[calc(100%-2rem)] sm:min-h-[calc(100svh-1rem)] sm:rounded-[2.5rem]"
      id="home"
    >
      <HeroBackground />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col px-5 pb-5 pt-6 sm:min-h-[calc(100svh-6rem)] sm:px-8 sm:pb-7 sm:pt-8 lg:px-10">
        <div className="mt-10 flex flex-col justify-between gap-8 md:mt-20 md:flex-row md:items-stretch">
          <div className="flex flex-col items-start">
            <HeroContent />
          </div>
          <RatingCard />
        </div>
        <div className="mt-auto grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2">
          <ProductCard
            actionLabel="View Details"
            description="Fully automatic and manual operation orchard mode variable rate"
            image={heroOne}
            imageAlt="Agricultural spraying drone above a crop field"
            title="DJI Agras T50"
          />
          <ProductCard2
            actionLabel="Explore More"
            description="Fully automatic and manual operation orchard mode variable rate"
            image={heroTwo}
            imageAlt="Agricultural drone remote controller"
            showActionArrow
            actionLabelBackgroundColor="#003324"
            actionLabelTextColor="#ffffff"
            actionArrowBackgroundColor="#003324"
            actionArrowColor="#8bc652"
            title="DJI Agras T50"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
