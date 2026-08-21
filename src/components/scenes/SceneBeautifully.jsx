import { Box, Button, Typography } from '@mui/material'
import PhotoSlot from '../PhotoSlot.jsx'

const PHOTO_SLOTS = [
  { key: 'beautifully-0', label: 'Photo 1', src: '/pic.jpeg', transform: 'rotate(-4deg)' },
  { key: 'beautifully-1', label: 'Photo 2', src: '/pic.jpeg', transform: 'translateY(12px) rotate(1deg)' },
  { key: 'beautifully-2', label: 'Photo 3', src: '/pic.jpeg', transform: 'rotate(6deg)' },
]

export default function SceneBeautifully({ data, onUpdatePhoto, onNext }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#d97878', background: 'radial-gradient(circle at 50% 50%, rgba(255,190,185,.42), transparent 58%), #d97878', p: 1 }}>
      <Box sx={{ position: 'relative', width: 'min(100%, 500px)', height: { xs: 330, sm: 390 }, overflow: 'hidden' }}>
        <Box aria-hidden="true" sx={{ position: 'absolute', top: 50, left: '-8%', width: '116%', height: 100, borderTop: '3px solid rgba(255,238,226,.88)', borderRadius: '50%', transform: 'rotate(-2deg)' }} />
        <Box aria-hidden="true" sx={{ position: 'absolute', top: 46, left: '13%', width: 5, height: 14, bgcolor: '#f8eee4', borderRadius: 1 }} />
        <Box aria-hidden="true" sx={{ position: 'absolute', top: 37, left: '48%', width: 5, height: 14, bgcolor: '#f8eee4', borderRadius: 1 }} />
        <Box aria-hidden="true" sx={{ position: 'absolute', top: 42, right: '13%', width: 5, height: 14, bgcolor: '#f8eee4', borderRadius: 1 }} />

        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', gap: { xs: .5, sm: 2 }, pt: 5 }}>
          {PHOTO_SLOTS.map((slot, index) => (
            <Box key={slot.key} sx={{ position: 'relative', width: { xs: 92, sm: 125 }, height: { xs: 142, sm: 182 }, p: 1, pb: 3.5, bgcolor: '#f8f6ee', boxShadow: '0 8px 12px rgba(91,46,44,.24)', transform: slot.transform, transition: 'transform .25s ease', '&:hover': { transform: `${slot.transform} translateY(-6px)` } }}>
              <PhotoSlot photo={data.photos[slot.key] || slot.src} label={slot.label} sx={{ width: '100%', height: '100%', background: '#cad9d6', color: '#6d5c5b', fontFamily: 'Caveat, cursive', fontSize: 14 }} onUpdate={(photo) => onUpdatePhoto(slot.key, photo)} />
              <Typography sx={{ position: 'absolute', bottom: 3, left: 9, color: '#e84e84', fontSize: 16 }}>♥</Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={{ position: 'absolute', zIndex: 2, bottom: 37, left: 0, width: '100%', color: '#ffafc0', textAlign: 'center', fontFamily: 'Caveat, cursive', fontSize: { xs: 48, sm: 66 }, fontWeight: 700, lineHeight: 1, textShadow: '0 2px rgba(151,64,68,.2)', transform: 'rotate(-3deg)' }}><span style={{ fontSize: '.45em' }}>♥</span> I LOVE YOU <span style={{ fontSize: '.45em' }}>♥</span></Typography>
        <Typography aria-hidden="true" sx={{ position: 'absolute', left: 7, bottom: 8, fontSize: 36 }}>🎂</Typography>
        <Typography aria-hidden="true" sx={{ position: 'absolute', right: 8, bottom: 15, color: '#fff1dc', fontSize: 34, transform: 'rotate(15deg)' }}>🎁</Typography>
        <Typography aria-hidden="true" sx={{ position: 'absolute', left: '19%', bottom: 72, color: '#fff4ef', fontSize: 22 }}>♥</Typography>
        <Typography aria-hidden="true" sx={{ position: 'absolute', right: '17%', bottom: 79, color: '#fff4ef', fontSize: 20 }}>♥</Typography>
      </Box>

      <Button variant="contained" sx={{ mt: 0, bgcolor: '#fff1ed', color: '#b95c60', '&:hover': { bgcolor: '#fff' } }} onClick={onNext}>Next</Button>
    </Box>
  )
}
