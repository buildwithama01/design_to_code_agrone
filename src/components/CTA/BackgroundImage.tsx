import ctaImage from '../../assets/images/CTA.jpg'

function BackgroundImage() {
  return (
    <>
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        src={ctaImage}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-agrone-green/25"
      />
    </>
  )
}

export default BackgroundImage
