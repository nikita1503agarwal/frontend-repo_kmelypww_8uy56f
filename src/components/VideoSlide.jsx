import React from 'react'

function VideoSlide() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
      <div className="aspect-video w-full bg-slate-50 grid place-items-center text-slate-400">
        <div className="text-center p-8">
          <div className="text-5xl">🎬</div>
          <p className="mt-3">Video placeholder — drop your clip here</p>
        </div>
      </div>
    </div>
  )
}

export default VideoSlide
