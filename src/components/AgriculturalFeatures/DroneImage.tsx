import NotchedSurface from '../NotchedSurface'

type DroneImageProps = {
  image: string
  imageAlt: string
  backgroundColor: string
}

function DroneImage({ image, imageAlt, backgroundColor }: DroneImageProps) {
  return (
    <div
      className="relative min-h-64 w-full sm:min-h-80 lg:min-h-[360px]"
      id="agricultural-feature-image"
      role="img"
      aria-label={imageAlt}
    >
      <NotchedSurface
        className="notched-surface notched-surface--features absolute inset-0 transition-colors duration-300"
        style={{ backgroundColor }}
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute -top-[15%] -left-[15%] z-10 size-[130%] max-w-none object-contain object-center"
        src={image}
      />
    </div>
  )
}

export default DroneImage
