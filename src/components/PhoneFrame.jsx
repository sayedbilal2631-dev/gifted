import { Box, Typography } from '@mui/material'

export default function PhoneFrame({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#000', pt: 2 }}>
      <Typography sx={{ color: '#fff', fontFamily: 'Patrick Hand, cursive', fontSize: 18, fontWeight: 700, mb: 1.5 }}>
        imagine receiving this on your bday
      </Typography>
      <Box sx={{ position: 'relative', width: { xs: '100%', sm: 520 }, height: { xs: 'calc(100dvh - 54px)', sm: 'min(78dvh, 650px)' }, maxWidth: { xs: '100%', sm: '92vw' }, minHeight: 420, bgcolor: '#f4f6f1', borderRadius: { xs: 0, sm: 3 }, overflow: 'hidden', boxShadow: { xs: 'none', sm: '0 30px 60px rgba(0,0,0,.42)' }, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'rgba(132,107,72,.22)', borderBottom: '1px solid rgba(0,0,0,.14)', p: 1.25, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#76614f', fontFamily: 'Patrick Hand, cursive', fontSize: 11 }}>
          <Box aria-hidden="true" sx={{ display: 'flex', gap: 1 }}><span>‹</span><span>›</span></Box>
          <Box sx={{ flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 10 }}>templateadary.my.canva.site</Box>
          <Box aria-hidden="true" sx={{ display: 'flex', gap: 1 }}>
            <span>◌</span><span>⚑</span><span>☰</span>
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  )
}
