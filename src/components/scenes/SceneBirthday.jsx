import { Box, Button, Typography } from '@mui/material'

export default function SceneBirthday({ data, onNext }) {
  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#f4eeee', background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,.5), transparent 62%), #f4eeee', overflow: 'hidden' }}>
      <AnimatedBirthdayTitle />
      <Typography sx={{ color: '#896b5a', fontSize: 13, mt: -0.5, opacity: 0, animation: 'birthday-copy-in .45s ease 1.15s forwards', '@keyframes birthday-copy-in': { to: { opacity: 1 } } }}>for {data.recipient}</Typography>

      <Box
        component="img"
        src="/frame2.jpeg"
        alt="Birthday bears illustration"
        sx={{ width: 'min(82%, 360px)', maxHeight: '58%', objectFit: 'contain', display: 'block', flex: '0 1 auto', mt: 1, mixBlendMode: 'multiply', animation: 'birthday-image-in .8s ease .35s both', '@keyframes birthday-image-in': { from: { opacity: 0, transform: 'scale(.94) translateY(12px)' }, to: { opacity: 1, transform: 'scale(1) translateY(0)' } } }}
      />

      <Button
        onClick={onNext}
        sx={{
          mt: 1,
          minWidth: 142,
          px: 3.5,
          py: 1,
          borderRadius: 999,
          color: '#fff',
          fontFamily: 'Patrick Hand, cursive',
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #ff9a62 0%, #ef5d4c 52%, #d83e54 100%)',
          border: '2px solid rgba(255,255,255,.72)',
          boxShadow: '0 5px 0 #a93445, 0 10px 20px rgba(216,62,84,.28), inset 0 1px 0 rgba(255,255,255,.55)',
          opacity: 0,
          animation: 'birthday-copy-in .45s ease 1.35s forwards, birthday-button-pulse 2.4s ease-in-out 2s infinite',
          transition: 'transform .18s ease, box-shadow .18s ease, filter .18s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #ffad72 0%, #f56a57 52%, #df4860 100%)',
            transform: 'translateY(-3px) scale(1.03)',
            filter: 'saturate(1.1)',
            boxShadow: '0 8px 0 #a93445, 0 14px 24px rgba(216,62,84,.34), inset 0 1px 0 rgba(255,255,255,.65)',
          },
          '&:active': {
            transform: 'translateY(3px) scale(.98)',
            boxShadow: '0 2px 0 #a93445, 0 5px 10px rgba(216,62,84,.22)',
          },
          '@keyframes birthday-button-pulse': {
            '0%, 100%': { filter: 'brightness(1)' },
            '50%': { filter: 'brightness(1.08)' },
          },
        }}
      >
        click me
      </Button>
    </Box>
  )
}

function AnimatedBirthdayTitle() {
  const title = 'HAPPY BIRTHDAY'

  return (
    <Typography
      component="h1"
      aria-label={title}
      sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: 0.1, width: '100%', maxWidth: '100%', whiteSpace: 'nowrap', fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: { xs: 29, sm: 43 }, lineHeight: 0.95, color: '#c84f3d', transform: 'rotate(-3deg)', mb: 0.5 }}
    >
      {title.split('').map((letter, index) => letter === ' '
        ? <Box component="span" key={`space-${index}`} sx={{ width: { xs: 6, sm: 9 } }} aria-hidden="true" />
        : <Box component="span" key={`${letter}-${index}`} sx={{ display: 'inline-block', opacity: 0, animation: `birthday-letter-in .35s cubic-bezier(.2,.8,.2,1) ${index * 0.08}s forwards`, '@keyframes birthday-letter-in': { from: { opacity: 0, transform: 'translateY(-18px) rotate(-12deg) scale(.7)' }, to: { opacity: 1, transform: 'translateY(0) rotate(0) scale(1)' } } }}>{letter}</Box>)}
    </Typography>
  )
}
