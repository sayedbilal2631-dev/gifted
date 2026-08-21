import { Box, Button, Typography } from '@mui/material'

export default function SceneWillYou({ data, onNext }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#f7eeee', background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,.7), transparent 68%), #f7eeee', px: 2 }}>
      <Box aria-hidden="true" sx={{ position: 'absolute', left: '-8%', top: '55%', width: '46%', height: 45, borderTop: '2px solid #c87879', borderRadius: '50%', transform: 'rotate(-12deg)' }} />
      <Box aria-hidden="true" sx={{ position: 'absolute', right: '-8%', top: '42%', width: '46%', height: 45, borderTop: '2px solid #c87879', borderRadius: '50%', transform: 'rotate(-20deg)' }} />
      <Typography variant="h1" sx={{ position: 'relative', zIndex: 3, color: '#c84f3d', fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: { xs: 36, sm: 48 }, lineHeight: 1, textAlign: 'center', transform: 'rotate(-4deg)', mb: 1.5, animation: 'proposal-title-in .6s ease both', '@keyframes proposal-title-in': { from: { opacity: 0, transform: 'translateY(-12px) rotate(-8deg)' }, to: { opacity: 1, transform: 'translateY(0) rotate(-4deg)' } } }}>Will you be mine?</Typography>

      <Box aria-label="Photo collage of the couple" sx={{ position: 'relative', width: 'min(92%, 380px)', height: { xs: 260, sm: 310 }, mt: 1, animation: 'proposal-collage-in .8s ease .15s both', '@keyframes proposal-collage-in': { from: { opacity: 0, transform: 'scale(.9)' }, to: { opacity: 1, transform: 'scale(1)' } } }}>
        <Box sx={{ position: 'absolute', width: { xs: 150, sm: 190 }, height: { xs: 150, sm: 190 }, borderRadius: '50%', bgcolor: '#81d4d8', left: '17%', top: 12, opacity: .85 }} />
        <Box sx={{ position: 'absolute', width: { xs: 150, sm: 190 }, height: { xs: 150, sm: 190 }, borderRadius: '50%', bgcolor: '#8bc792', right: '15%', top: 12, opacity: .85 }} />
        <Photo src="/pic.jpeg" alt="Couple portrait" sx={{ position: 'absolute', zIndex: 2, width: { xs: 150, sm: 190 }, height: { xs: 190, sm: 235 }, left: '50%', top: 22, transform: 'translateX(-50%)', clipPath: 'polygon(50% 100%, 8% 60%, 0 28%, 17% 6%, 38% 13%, 50% 0, 62% 13%, 83% 6%, 100% 28%, 92% 60%)' }} />
        <Photo src="/pic.jpeg" alt="Couple portrait" sx={{ position: 'absolute', zIndex: 3, width: { xs: 92, sm: 112 }, height: { xs: 92, sm: 112 }, left: '7%', bottom: 18, borderRadius: '50%', border: '4px solid #f7eeee', transform: 'rotate(-12deg)' }} />
        <Photo src="/pic.jpeg" alt="Couple portrait" sx={{ position: 'absolute', zIndex: 3, width: { xs: 86, sm: 105 }, height: { xs: 86, sm: 105 }, right: '6%', bottom: 27, borderRadius: '50%', border: '4px solid #f7eeee', transform: 'rotate(12deg)' }} />
        <Typography sx={{ position: 'absolute', zIndex: 4, top: '42%', left: '50%', transform: 'translate(-50%,-50%)', color: '#ef6a7c', fontSize: 30 }}>♥</Typography>
      </Box>

      <Typography sx={{ mt: -1, fontFamily: 'Caveat, cursive', fontSize: 21, color: 'rgba(91,72,64,.85)', letterSpacing: '.08em' }}>{data.date}</Typography>

      {onNext ? (
        <Button variant="contained" onClick={onNext} sx={{ mt: 2 }}>
          next
        </Button>
      ) : null}
    </Box>
  )
}

function Photo({ src, alt, sx }) {
  return <Box component="img" src={src} alt={alt} sx={{ objectFit: 'cover', objectPosition: 'center', display: 'block', ...sx }} />
}
