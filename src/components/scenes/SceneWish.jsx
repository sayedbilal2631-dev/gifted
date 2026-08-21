import { Box, Button, Typography } from '@mui/material'

export default function SceneWish({ data, onNext }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', bgcolor: '#f7eeee', background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,.7), transparent 68%), repeating-linear-gradient(0deg, rgba(205,153,145,.035) 0 1px, transparent 1px 5px), #f7eeee', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: { xs: 2.5, sm: 4 }, py: 2 }}>
      <Box aria-hidden="true" sx={{ position: 'absolute', top: '12%', left: { xs: '5%', sm: '8%' }, width: 48, height: 32, border: '3px solid #84945c', borderRadius: 2, transform: 'rotate(-16deg)' }}>
        <Box sx={{ position: 'absolute', top: -9, left: 9, width: 18, height: 9, border: '3px solid #84945c', borderBottom: 0, borderRadius: '5px 5px 0 0' }} />
        <Box sx={{ position: 'absolute', top: 6, left: 14, width: 14, height: 14, border: '3px solid #e99b85', borderRadius: '50%' }} />
        <Box sx={{ position: 'absolute', top: 9, left: 17, width: 8, height: 8, bgcolor: '#ffd77b', borderRadius: '50%' }} />
      </Box>
      <Box aria-hidden="true" sx={{ position: 'absolute', top: '15%', right: { xs: '4%', sm: '8%' }, color: '#d87f82', fontFamily: 'Caveat, cursive', fontSize: 68, lineHeight: .65, transform: 'rotate(16deg)' }}>♡</Box>
      <Box aria-hidden="true" sx={{ position: 'absolute', top: '24%', right: { xs: '9%', sm: '14%' }, color: '#e9a19c', fontSize: 37, transform: 'rotate(-18deg)' }}>♡</Box>
      <Box aria-hidden="true" sx={{ position: 'absolute', bottom: '13%', left: { xs: '6%', sm: '9%' }, width: 24, height: 24, border: '4px solid #f3af25', borderRadius: '50%', boxShadow: 'inset 0 0 0 3px #ffdc62' }}>
        <Box sx={{ position: 'absolute', width: 3, height: 40, bgcolor: '#df9a43', left: 9, top: 18, transform: 'rotate(-20deg)', transformOrigin: 'top' }} />
      </Box>
      <Typography aria-hidden="true" sx={{ position: 'absolute', bottom: '7%', right: '6%', color: '#dd8b73', fontSize: 32, transform: 'rotate(-12deg)' }}>🌼</Typography>

      <Typography sx={{ zIndex: 1, color: '#9f6257', fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: { xs: 21, sm: 25 }, lineHeight: 1, textAlign: 'center', transform: 'rotate(-2deg)', mb: .5 }}>Aatika Ahmad</Typography>
      <Typography variant="h1" sx={{ zIndex: 1, color: '#c84f3d', fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: { xs: 34, sm: 45 }, lineHeight: 1, textAlign: 'center', transform: 'rotate(-2deg)', mb: 1.5 }}>MY WISH FOR U</Typography>

      <Box sx={{ zIndex: 1, width: 'min(100%, 445px)', maxHeight: '64%', overflow: 'hidden', px: { xs: 1, sm: 2 }, py: 1, borderTop: '1px solid rgba(196,92,81,.12)', borderBottom: '1px solid rgba(196,92,81,.12)' }}>
        <WishParagraph>Happy Birthday to the most special person in my life!</WishParagraph>
        <WishParagraph>On your special day, I just want you to know how much you mean to me.</WishParagraph>
        <WishParagraph>You bring light, laughter, and so much love wherever you go.</WishParagraph>
        <WishParagraph>May your day be filled with all the happiness you deserve, and may this year bring you endless success, peace, and joy.</WishParagraph>
        <WishParagraph>Always stay the amazing person you are - the world is better with you in it. 👀</WishParagraph>
        <WishParagraph>Love you always. 🕊️🌷</WishParagraph>
      </Box>

      <Button onClick={onNext} sx={{ position: 'absolute', right: { xs: 12, sm: 22 }, bottom: { xs: 12, sm: 18 }, zIndex: 2, minWidth: 66, px: 1.5, py: .45, borderRadius: 1.5, bgcolor: '#db6a3f', color: '#fff', fontFamily: 'Patrick Hand, cursive', fontSize: 12, boxShadow: '0 3px 0 #a94d34', '&:hover': { bgcolor: '#c95c36' } }}>click me</Button>
    </Box>
  )
}

function WishParagraph({ children }) {
  return <Typography component="p" sx={{ m: { xs: '8px 0', sm: '11px 0' }, color: '#403b39', fontFamily: 'Patrick Hand, cursive', fontSize: { xs: 12.5, sm: 15 }, lineHeight: 1.22, textAlign: 'center' }}>{children}</Typography>
}
