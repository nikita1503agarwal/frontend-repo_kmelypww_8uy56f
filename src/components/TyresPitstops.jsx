import React from 'react'
import { TimerReset, Gauge, Zap } from 'lucide-react'

function TyresPitstops() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">Tyres and Pit Stops</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">Tyres decide everything. Softs = sprint shoes, hards = slippers. Pit stops are faster than your Wi-Fi.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Soft</h3>
          </div>
          <p className="mt-2 text-slate-600">Fast but short life</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Hard</h3>
          </div>
          <p className="mt-2 text-slate-600">Slow but durable</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <TimerReset className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Pit stop</h3>
          </div>
          <p className="mt-2 text-slate-600">Tyre change in ≈2 seconds</p>
        </div>
      </div>
    </div>
  )
}

export default TyresPitstops
