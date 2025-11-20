import React, { useCallback, useEffect, useMemo, useState } from 'react'
import SlideWrapper from './components/SlideWrapper'
import TitleSlide from './components/TitleSlide'
import VideoSlide from './components/VideoSlide'
import RaceWeekend from './components/RaceWeekend'
import Aero from './components/Aero'
import TyresPitstops from './components/TyresPitstops'
import EngineeringTrack from './components/EngineeringTrack'
import DriverFitness from './components/DriverFitness'
import IndiaF1 from './components/IndiaF1'
import GrandFinish from './components/GrandFinish'

function App() {
  const slides = useMemo(() => [
    { key: 'title', node: <TitleSlide /> },
    { key: 'video-1', node: <VideoSlide /> },
    { key: 'race-weekend', node: <RaceWeekend /> },
    { key: 'aero', node: <Aero /> },
    { key: 'video-2', node: <VideoSlide /> },
    { key: 'tyres', node: <TyresPitstops /> },
    { key: 'engineering', node: <EngineeringTrack /> },
    { key: 'fitness', node: <DriverFitness /> },
    { key: 'video-3', node: <VideoSlide /> },
    { key: 'india', node: <IndiaF1 /> },
    { key: 'finish', node: <GrandFinish /> },
    { key: 'video-4', node: <VideoSlide /> },
  ], [])

  const [index, setIndex] = useState(0)
  const total = slides.length

  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex(i => (i + 1) % total), [total])
  const set = useCallback((i) => setIndex(() => i), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') next()
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <SlideWrapper index={index} total={total} onPrev={prev} onNext={next} onSet={set}>
      {slides[index].node}
    </SlideWrapper>
  )
}

export default App
