import React from 'react'
import { CalendarDays, Flag, Timer } from 'lucide-react'

function RaceWeekend() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">The Race Weekend</h2>
      <p className="mt-3 text-slate-600 max-w-2xl">Practice, Qualifying, Race — a.k.a. Try, Fly, and Cry. Drivers fight for the best grid spot… and then crash anyway.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Friday: Practice</h3>
          </div>
          <p className="mt-2 text-slate-600">Learning the track</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Saturday: Qualifying</h3>
          </div>
          <p className="mt-2 text-slate-600">Fastest lap gets pole position</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Flag className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Sunday: Race</h3>
          </div>
          <p className="mt-2 text-slate-600">Chaos + strategy + drama</p>
        </div>
      </div>
    </div>
  )
}

export default RaceWeekend
