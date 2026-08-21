import { Box, Drawer, IconButton, Stack, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function EditPanel({ data, onChange, onClose }) {
  const update = (key) => (event) => onChange({ [key]: event.target.value })

  return (
    <Drawer anchor="right" open onClose={onClose} PaperProps={{ sx: { width: { xs: '100%', sm: 360 }, bgcolor: '#fff8ef', p: 3 } }}>
      <Box role="dialog" aria-modal="true" aria-labelledby="edit-title">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box><Typography sx={{ color: '#d8552f', textTransform: 'uppercase', letterSpacing: 1.6, fontSize: 10 }}>your little love story</Typography><Typography id="edit-title" variant="h2" sx={{ fontSize: 36, color: '#a83a1e' }}>Make it yours</Typography></Box>
          <IconButton onClick={onClose} aria-label="Close customize panel"><CloseIcon /></IconButton>
        </Box>
        <Stack spacing={2}>
          <TextField label="Birthday person" value={data.recipient} onChange={update('recipient')} fullWidth />
          <TextField label="Your name" value={data.sender} onChange={update('sender')} fullWidth />
          <TextField label="Date" value={data.date} onChange={update('date')} fullWidth />
          <TextField label="Wish text" value={data.wish} onChange={update('wish')} multiline rows={3} fullWidth />
          <TextField label="Letter" value={data.letter} onChange={update('letter')} multiline rows={5} fullWidth />
        </Stack>
        <Typography sx={{ borderTop: '1px solid #ead7c7', mt: 2, pt: 2, fontSize: 12, lineHeight: 1.5, color: '#816a5b' }}>Tap any photo frame in the story to upload a picture from this device.</Typography>
      </Box>
    </Drawer>
  )
}
