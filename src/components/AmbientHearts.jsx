import { useMemo } from 'react'
import { Box } from '@mui/material'

const GLYPHS = ['♥', '♡', '✦']

export default function AmbientHearts({ count = 14 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        glyph: GLYPHS[i % GLYPHS.length],
        left: Math.random() * 100,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 10,
        size: 12 + Math.random() * 14,
      })),
    [count]
  )

  return (
    <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {hearts.map((h) => (
        <Box component="span"
          key={h.id}
          sx={{
            left: `${h.left}%`,
            position: 'absolute',
            bottom: -30,
            color: 'rgba(255,255,255,.3)',
            fontSize: `${h.size}px`,
            animation: `float-heart ${h.duration}s linear ${h.delay}s infinite`,
            '@keyframes float-heart': { to: { transform: 'translateY(-110vh) rotate(360deg)', opacity: 0 } },
          }}
        >
          {h.glyph}
        </Box>
      ))}
    </Box>
  )
}
