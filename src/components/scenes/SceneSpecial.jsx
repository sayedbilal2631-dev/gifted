import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import BearDuo from '../BearDuo.jsx'
import frame1 from '../../../public/frame1.gif'
export default function SceneSpecial({ onYes }) {
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 })
  const [clickedNo, setClickedNo] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  const dodge = () => {
    if (clickedNo) return
    const x = (Math.random() - 0.5) * 160
    const y = (Math.random() - 0.5) * 34
    setNoOffset({ x, y })
  }

  if (clickedNo) {
    return (
      <Box sx={{ ...sceneSx, bgcolor: '#f4eeee' }}>
        <Typography variant="h1" sx={titleSx}>Hmph! How dare you?</Typography>
        <BearIllustration imageFailed={imageFailed} onImageError={() => setImageFailed(true)} />
        <Button sx={pillSx} onClick={() => setClickedNo(false)}>
          TRY AGAIN
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={sceneSx}>
      <Typography variant="h1" sx={titleSx}>I made something special for u</Typography>
      <Typography sx={{ ...titleSx, fontSize: 23, mb: 1 }}>do u want to see it?</Typography>

      <BearIllustration imageFailed={imageFailed} onImageError={() => setImageFailed(true)} />

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 0.5 }}>
        <Button sx={pillSx} onClick={onYes}>
          YES
        </Button>
        <Button
          sx={pillSx}
          style={{ transform: `translate(${noOffset.x}px, ${noOffset.y}px)` }}
          onMouseOver={dodge}
          onTouchStart={dodge}
          onClick={() => setClickedNo(true)}
        >
          NO
        </Button>
      </Box>
    </Box>
  )
}

function BearIllustration({ imageFailed, onImageError }) {
  if (imageFailed) {
    return <Box sx={{ width: 180, mb: 2 }}><BearDuo /></Box>
  }

  return (
    <Box sx={{ width: 220, height: 170, mb: 2, display: 'grid', placeItems: 'center' }}>
      <Box
        component="img"
        src={frame1}
        alt="A bear offering a flower bouquet to another bear"
        onError={onImageError}
        sx={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </Box>
  )
}

const sceneSx = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: '#f4eeee',
  background: 'radial-gradient(circle at 50% 48%, rgba(255,255,255,.42), transparent 58%), #f4eeee',
}
const titleSx = {
  fontFamily: 'Caveat, cursive',
  fontWeight: 700,
  color: '#cf5744',
  fontSize: { xs: 25, sm: 29 },
  lineHeight: 1.15,
  mb: 0.5,
  maxWidth: 360,
  textAlign: 'center',
}
const pillSx = {
  minWidth: 96,
  fontFamily: 'Patrick Hand, cursive',
  fontWeight: 700,
  fontSize: 19,
  px: 3,
  py: 0.8,
  borderRadius: 2.5,
  color: '#fff',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  background: 'linear-gradient(180deg,#f6a45b 0%,#d85c30 100%)',
  boxShadow: '0 6px 0 rgba(128,60,40,.22)',
  '&:hover': { background: 'linear-gradient(180deg,#f8ad68 0%,#d85c30 100%)' },
}
