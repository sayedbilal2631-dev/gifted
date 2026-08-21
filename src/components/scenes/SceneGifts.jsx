import { Box, Typography } from '@mui/material'

export default function SceneGifts({ onFirstGift, onSecondGift }) {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#fbfaf7', p: 2 }}>
      <Typography variant="h1" sx={{ color: '#c85543', fontSize: 48, lineHeight: 1 }}>GIFT FOR YOU!</Typography>
      <Typography sx={{ color: '#c85543', my: 2.5, fontFamily: 'Caveat, cursive', fontSize: 26, fontWeight: 700 }}>Click any gift to open</Typography>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 1.5, width: '100%' }}>
        {[onFirstGift, onSecondGift].map((handler, i) => (
          <GiftBox
            key={i}
            index={i}
            onClick={handler}
          />
        ))}
      </Box>

    </Box>
  )
}

function GiftBox({ index, onClick }) {
  const rotations = ['rotate(-7deg)', 'rotate(0deg) translateY(-8px)', 'rotate(7deg)']

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      aria-label={`Open gift ${index + 1}`}
      sx={{ width: 'clamp(88px, 24vw, 132px)', height: 'clamp(112px, 30vw, 160px)', p: 0, border: 0, bgcolor: 'transparent', cursor: 'pointer', transform: rotations[index], transition: 'transform .2s ease, filter .2s ease', '&:hover': { transform: `${rotations[index]} scale(1.08)`, filter: 'drop-shadow(0 8px 10px rgba(145,66,42,.28))' }, '&:focus-visible': { outline: '3px solid #d8552f', outlineOffset: 4 } }}
    >
      <Box component="img" src="/box.jpeg" alt="Red gift box with a gold ribbon" sx={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', display: 'block' }} />
    </Box>
  )
}
