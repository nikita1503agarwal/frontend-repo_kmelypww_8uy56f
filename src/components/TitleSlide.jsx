import React from 'react'
import Spline from '@splinetool/react-spline'

function TitleSlide() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
      <div className="h-[52vh] w-full">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="px-8 py-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Formula 1
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl">
          “Welcome to Formula 1 — the sport where 20 rich guys drive science projects that scream louder than your science teacher.”
        </p>
      </div>
    </div>
  )
}

export default TitleSlide
