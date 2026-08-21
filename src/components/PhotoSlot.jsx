import { useRef } from 'react'
import { ButtonBase, Box } from '@mui/material'

export default function PhotoSlot({ photo, label, sx = {}, onUpdate }) {
  const inputRef = useRef(null)

  const handleChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onUpdate(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <ButtonBase
      type="button"
      sx={{ ...sx, width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'inherit', color: 'inherit', textAlign: 'center' }}
      onClick={() => inputRef.current?.click()}
      aria-label={`Upload ${label}`}
    >
      {photo ? <Box component="img" src={photo} alt={label} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : <span>{label}</span>}
      <Box component="input" ref={inputRef} type="file" accept="image/*" onChange={handleChange} sx={{ display: 'none' }} />
    </ButtonBase>
  )
}
