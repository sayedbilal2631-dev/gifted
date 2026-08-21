import { Box } from '@mui/material'

export default function Dots({ total, current }) {
  return (
    <Box sx={{ display: 'flex', gap: .6, alignItems: 'center' }}>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <Box component="span" key={n} sx={{ width: n === current ? 20 : 6, height: 6, borderRadius: 99, bgcolor: n === current ? '#a83a1e' : 'rgba(122,68,54,.35)' }} />
      ))}
    </Box>
  )
}
