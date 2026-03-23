interface EyebrowProps {
  children: React.ReactNode
  color?: string
}

export function Eyebrow({ children, color = 'var(--verde-acento)' }: EyebrowProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div style={{ width: '18px', height: '1.5px', background: color }} />
      <span
        style={{
          fontFamily: 'var(--font-opensans)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color,
        }}
      >
        {children}
      </span>
    </div>
  )
}
