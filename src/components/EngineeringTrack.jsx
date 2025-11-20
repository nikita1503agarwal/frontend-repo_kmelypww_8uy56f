import React from 'react'
import { CircuitBoard, Ruler, Stopwatch } from 'lucide-react'

function EngineeringTrack() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">Engineering and Track Design</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">Tracks are designed by evil geniuses. Every bump tests your soul. Kerbs are fancy speed breakers for billionaires.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <CircuitBoard className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">80,000+ parts</h3>
          </div>
          <p className="mt-2 text-slate-600">Cars are insanely complex</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Ruler className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Tracks</h3>
          </div>
          <p className="mt-2 text-slate-600">Straights, corners, kerbs, elevation</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Stopwatch className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Milliseconds matter</h3>
          </div>
          <p className="mt-2 text-slate-600">0.001 sec can change everything</p>
        </div>
      </div>
    </div>
  )
}

export default EngineeringTrack
