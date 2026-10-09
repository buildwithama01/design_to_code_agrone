import BackgroundImage from './BackgroundImage'
import CTAButton from './CTAButton'
import EmailInput from './EmailInput'
import Heading from './Heading'
import NotchedSurface from '../NotchedSurface'

function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative z-10 mx-auto -mb-24 w-[calc(100%-1.5rem)] max-w-[1600px] sm:-mb-32 sm:w-[calc(100%-2rem)]"
      id="contact"
    >
      <NotchedSurface className="notched-surface notched-surface--cta relative flex min-h-[22rem] items-center justify-center overflow-hidden sm:min-h-[26rem] lg:min-h-[32rem]">
        <BackgroundImage />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-14 text-center text-white sm:px-10 lg:py-20">
          <Heading />
          <div
            className="mt-8 flex w-full max-w-[32rem] flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center"
          >
            <EmailInput />
            <CTAButton />
          </div>
        </div>
      </NotchedSurface>
    </section>
  )
}

export default CTA
