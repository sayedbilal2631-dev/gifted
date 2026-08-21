import SceneLetter from './scenes/SceneLetter.jsx'

export default function Frame8_Letter({ data, onUpdatePhoto, onBack, onNext }) {
  return <SceneLetter data={data} onUpdatePhoto={onUpdatePhoto} onReplay={() => onNext(0)} onBack={onBack} />
}
