import React from 'react'
import { Activity, Brain, Dumbbell } from 'lucide-react'

function DriverFitness() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">Driver Training & Fitness</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">They train their necks like Thor. Meanwhile, we get tired scrolling Instagram.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">5G forces</h3>
          </div>
          <p className="mt-2 text-slate-600">Insane loads in corners</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Neck + reflex</h3>
          </div>
          <p className="mt-2 text-slate-600">Constant strength work</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Elite focus</h3>
          </div>
          <p className="mt-2 text-slate-600">Physical + mental game</p>
        </div>
      </div>
    </div>
  )
}

export default DriverFitness
