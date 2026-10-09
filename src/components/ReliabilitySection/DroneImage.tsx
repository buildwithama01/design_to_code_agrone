import aboutImage from '../../assets/images/about.jpg'

function DroneImage() {
  return (
    <div className="h-[min(112vw,34rem)] min-h-[22rem] overflow-hidden rounded-[1.75rem] md:h-[min(48vw,34rem)]">
      <img
        alt="Agricultural drone in flight above a field"
        className="size-full object-cover"
        loading="lazy"
        src={aboutImage}
      />
    </div>
  )
}

export default DroneImage
