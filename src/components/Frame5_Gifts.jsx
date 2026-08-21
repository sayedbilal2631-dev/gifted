import SceneGifts from './scenes/SceneGifts.jsx'

export default function Frame5_Gifts({ onGift, onNext }) {
  return <SceneGifts onFirstGift={() => onGift(1)} onSecondGift={() => onGift(2)} onNext={onNext} />
}
