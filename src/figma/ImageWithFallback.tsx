import React from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export function ImageWithFallback({ src, alt, className, style }: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false)

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'var(--off-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink-40)',
          fontFamily: 'var(--font-opensans)',
          fontSize: '14px',
          textAlign: 'center',
          padding: '16px',
        }}
      >
        {alt}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
