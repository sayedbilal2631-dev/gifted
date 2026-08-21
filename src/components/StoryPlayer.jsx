import { useState } from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import EditPanel from './EditPanel.jsx'
import Frame1_Special from './Frame1_Special.jsx'
import Frame2_Birthday from './Frame2_Birthday.jsx'
import Frame3_Wish from './Frame3_Wish.jsx'
import Frame4_WillYou from './Frame4_WillYou.jsx'
import Frame5_Gifts from './Frame5_Gifts.jsx'
import Frame6_Beautifully from './Frame6_Beautifully.jsx'
import Frame8_Letter from './Frame8_Letter.jsx'

export const FRAMES = [
  { name: 'Special', Component: Frame1_Special },
  { name: 'Birthday', Component: Frame2_Birthday },
  { name: 'Wish', Component: Frame3_Wish },
  { name: 'Will you', Component: Frame4_WillYou },
  { name: 'Gifts', Component: Frame5_Gifts },
  { name: 'Beautifully', Component: Frame6_Beautifully },
  { name: 'Letter', Component: Frame8_Letter },
]

const initialData = {
  recipient: 'my love',
  sender: 'someone who loves you',
  date: '22/08/2008',
  wish: 'If I could love you for one more day, I would love you for one more day. If I could look at you one more time, I would look at you one more time. If you want me to be by your side for a lifetime, then first you have to show me that I will be by your side for a lifetime. I just want to thank you for always carrying all of my worries, even though me that I will be by your side for a lifetime. I wish for you to be like anyone your own life has not been easy at all, do not wish for you to be like anyone else. I only wish for you to be yourself, just as a better version of yourself. And finally, happy birthday to my love! I wish you lots of joy and happiness and gratitude on time, and I hope that someday I will be able to celebrate your birthday together with you. I LOVE YOU',
  letter: 'To the woman who has stolen my heart and made my world so much brighter. Happy birthday baby! There are no enough words to describe how much you mean to me.',
  photos: {},
}

export default function StoryPlayer() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [data, setData] = useState(initialData)
  const [isEditing, setIsEditing] = useState(false)
  const frame = FRAMES[currentFrame] || FRAMES[0]
  const ActiveFrame = frame.Component

  const next = (index = currentFrame + 1) => {
    const target = Number.isInteger(index) ? index : currentFrame + 1
    setCurrentFrame(Math.max(0, Math.min(target, FRAMES.length - 1)))
  }
  const back = () => setCurrentFrame((index) => Math.max(0, index - 1))
  const updatePhoto = (key, photo) => setData((current) => ({ ...current, photos: { ...current.photos, [key]: photo } }))

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'absolute', inset: '12px 14px auto', zIndex: 10, display: 'flex', justifyContent: 'space-between', pointerEvents: 'none' }}>
        <Tooltip title="Previous frame"><span><IconButton size="small" onClick={back} disabled={currentFrame === 0} aria-label="Previous frame" sx={{ pointerEvents: 'auto', bgcolor: 'rgba(255,255,255,.72)', color: '#7b4436' }}><ArrowBackIosNewIcon fontSize="inherit" /></IconButton></span></Tooltip>
        <Tooltip title="Customize story"><IconButton size="small" onClick={() => setIsEditing(true)} aria-label="Customize story" sx={{ pointerEvents: 'auto', bgcolor: 'rgba(255,255,255,.72)', color: '#7b4436' }}><EditIcon fontSize="small" /></IconButton></Tooltip>
      </Box>
      <Box sx={{ position: 'relative', flex: '1 1 auto', minHeight: 0, overflow: 'hidden' }}>
        <Box component="section" key={currentFrame} sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: { xs: 1, sm: 2 }, textAlign: 'center', animation: 'frame-in .45s ease both', '@keyframes frame-in': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
          <ActiveFrame
            data={data}
            onUpdatePhoto={updatePhoto}
            onNext={(index) => next(index)}
            onBack={back}
            onGift={(gift) => next(4 + gift)}
          />
        </Box>
      </Box>
      <Box aria-label={`Frame ${currentFrame + 1} of ${FRAMES.length}`} sx={{ position: 'absolute', zIndex: 10, bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: .6, alignItems: 'center' }}>
        {FRAMES.map((item, index) => <Box component="span" key={item.name} sx={{ width: index === currentFrame ? 20 : 6, height: 6, borderRadius: 99, bgcolor: index === currentFrame ? '#a83a1e' : 'rgba(122,68,54,.35)', transition: 'width .3s ease' }} />)}
      </Box>
      {isEditing && <EditPanel data={data} onChange={(patch) => setData((current) => ({ ...current, ...patch }))} onClose={() => setIsEditing(false)} />}
    </Box>
  )
}