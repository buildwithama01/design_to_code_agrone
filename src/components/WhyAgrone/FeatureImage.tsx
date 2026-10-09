import { useRef, useState } from 'react'
import OverlayCard from './OverlayCard'
import { whyFeatures } from './whyFeatures'

const videoUrl =
  'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/5868fa95-55db-48a3-b23c-577d87605b71.mp4?w=2400&h=1200'

type FeatureImageProps = {
  activeFeature: number
}

function FeatureImage({ activeFeature }: FeatureImageProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const feature = whyFeatures[activeFeature]

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  return (
    <div
      className="relative isolate h-[17rem] w-full overflow-hidden rounded-[1.5rem] bg-agrone-green sm:aspect-[2.16] sm:h-auto sm:min-h-[23rem] lg:min-h-0"
      id="why-agrone-feature-video"
    >
      <video
        aria-label="Agricultural drone working over a field"
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        poster={feature.image}
        ref={videoRef}
        src={videoUrl}
        autoPlay
      />
      <OverlayCard
        isPlaying={isPlaying}
        onTogglePlayback={togglePlayback}
      />
    </div>
  )
}

export default FeatureImage
