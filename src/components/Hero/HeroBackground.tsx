import heroImage from '../../assets/images/hero.jpg'

function HeroBackground() {
  return (
    <>
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center"
        src={heroImage}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/20"
      />
    </>
  )
}

export default HeroBackground
