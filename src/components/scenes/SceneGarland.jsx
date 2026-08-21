import { Box, Button, Typography } from '@mui/material'

const PHOTOS = ['💞', '📸', '📷', '✨']

export default function SceneGarland({ onNext }) {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#d97878', p: 2 }}>
      <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
        {PHOTOS.map((emoji, i) => (
          <Box key={i} sx={{ width: 70, height: 92, p: 1, bgcolor: '#f7f6ed', boxShadow: 2, transform: `rotate(${i % 2 ? 4 : -4}deg)` }}><Box sx={{ height: '100%', display: 'grid', placeItems: 'center', bgcolor: '#c4d9d1', fontSize: 26 }}>{emoji}</Box></Box>
        ))}
      </Box>

      <Typography variant="h1" sx={{ color: '#ffafc0', fontFamily: 'Caveat, cursive', fontSize: 54, mb: 2 }}>I LOVE YOU</Typography>

      <Button variant="contained" onClick={onNext}>
        Read my letter
      </Button>
    </Box>
  )
}
