import { Box, Button, Typography } from '@mui/material'
import PhotoSlot from '../PhotoSlot.jsx'

export default function SceneLetter({ data, onUpdatePhoto, onReplay }) {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#fbfaf5', p: 1 }}>
      <Box sx={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(100px,.82fr)', gap: 1, width: 'min(96%,448px)', minHeight: 355, overflow: 'hidden', p: '52px 12px 28px', bgcolor: '#fffdf5', boxShadow: '0 14px 28px rgba(92,44,48,.2)', border: '3px solid #d84f67' }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ color: '#a95045', fontSize: 34, lineHeight: 1, mb: 1.5 }}>To the love of my life...</Typography>
          <Typography sx={{ fontFamily: 'Patrick Hand, cursive', fontSize: 14, lineHeight: 1.25, color: '#5b4636', mb: 1 }}>{data.letter}</Typography>
          <Typography sx={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 19, color: '#b45d5a', textAlign: 'center', mt: 1 }}>I love you more than words can say.<br />{data.sender}</Typography>
        </Box>
        <Box sx={{ position: 'relative', alignSelf: 'start', mt: .25, p: 1, pb: 5, bgcolor: '#eaa0a8', border: '5px solid #c64e61', transform: 'rotate(2deg)' }}>
          <PhotoSlot sx={{ minHeight: 150, background: 'linear-gradient(150deg,#d2bdac,#a9c8cf 48%,#c77b75)', color: 'rgba(102,80,75,.78)', fontFamily: 'Caveat, cursive', fontSize: 17 }} photo={data.photos.letter || '/girl.jpeg'} label="your photo" onUpdate={(photo) => onUpdatePhoto('letter', photo)} />
          <Typography sx={{ position: 'absolute', left: 12, bottom: 6, color: '#5d4d48', fontSize: 28 }}>◉</Typography>
          <Typography sx={{ position: 'absolute', right: 10, bottom: 5, color: '#fff6e7', fontSize: 31 }}>✿</Typography>
        </Box>
        <Typography sx={{ position: 'absolute', left: 16, bottom: 22, zIndex: 2, fontSize: 37, transform: 'rotate(-8deg)' }}>📷</Typography>
      </Box>
      <Button variant="outlined" onClick={onReplay} sx={{ mt: 2, color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.6)' }}>
        ↺ watch again
      </Button>
    </Box>
  )
}
