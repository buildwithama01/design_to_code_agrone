import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

type NotchedSurfaceProps = {
  children?: ReactNode
  className: string
  cutout?: 'top-right' | 'bottom-right'
  style?: CSSProperties
}

function NotchedSurface({
  children,
  className,
  cutout = 'top-right',
  style,
}: NotchedSurfaceProps) {
  const surfaceRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const surface = surfaceRef.current
    if (!surface) return

    const updateClipPath = () => {
      const { width, height } = surface.getBoundingClientRect()
      if (!width || !height) return

      const styles = getComputedStyle(surface)
      const readDimension = (name: string, fallback: number) =>
        Number.parseFloat(styles.getPropertyValue(name)) || fallback
      const cornerRadius = Math.min(
        readDimension('--surface-radius', 32),
        width / 2,
        height / 2,
      )
      const notchWidth = Math.min(
        readDimension('--notch-width', 88),
        width - cornerRadius * 2,
      )
      const notchHeight = Math.min(
        readDimension('--notch-height', 76),
        height - cornerRadius * 2,
      )
      const notchRadius = Math.min(
        readDimension('--notch-radius', 24),
        notchWidth / 2,
        notchHeight / 2,
      )
      const notchX = width - notchWidth
      const bottomRightRadius = Math.min(
        cornerRadius,
        (width - notchX - notchRadius) / 2 || cornerRadius,
        (height - notchHeight) / 2 || cornerRadius,
      )

      const path =
        cutout === 'bottom-right'
          ? [
              `M ${cornerRadius} 0`,
              `H ${width - cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 ${width} ${cornerRadius}`,
              `V ${height - notchHeight - notchRadius}`,
              `A ${notchRadius} ${notchRadius} 0 0 1 ${width - notchRadius} ${height - notchHeight}`,
              `H ${width - notchWidth + notchRadius}`,
              `A ${notchRadius} ${notchRadius} 0 0 0 ${width - notchWidth} ${height - notchHeight + notchRadius}`,
              `V ${height - cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 ${width - notchWidth - cornerRadius} ${height}`,
              `H ${cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 0 ${height - cornerRadius}`,
              `V ${cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} 0`,
              'Z',
            ].join(' ')
          : [
              `M ${cornerRadius} 0`,
              `H ${notchX - notchRadius}`,
              `A ${notchRadius} ${notchRadius} 0 0 1 ${notchX} ${notchRadius}`,
              `V ${notchHeight - notchRadius}`,
              `A ${notchRadius} ${notchRadius} 0 0 0 ${notchX + notchRadius} ${notchHeight}`,
              `H ${width - bottomRightRadius}`,
              `A ${bottomRightRadius} ${bottomRightRadius} 0 0 1 ${width} ${notchHeight + bottomRightRadius}`,
              `V ${height - cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 ${width - cornerRadius} ${height}`,
              `H ${cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 0 ${height - cornerRadius}`,
              `V ${cornerRadius}`,
              `A ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} 0`,
              'Z',
            ].join(' ')

      surface.style.clipPath = `path("${path}")`
    }

    updateClipPath()

    const observer = new ResizeObserver(updateClipPath)
    observer.observe(surface)

    return () => observer.disconnect()
  }, [cutout])

  return (
    <div className={className} ref={surfaceRef} style={style}>
      {children}
    </div>
  )
}

export default NotchedSurface
