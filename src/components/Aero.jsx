import React from 'react'
import { Wind, Rocket, BatteryCharging } from 'lucide-react'

function Aero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">Aerodynamics: How Air Makes You Fast</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">Air in F1 isn’t just wind — it’s a weapon. DRS is legal cheating, ERS is eco-turbo, and downforce glues your car like Fevicol.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Wind className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Downforce</h3>
          </div>
          <p className="mt-2 text-slate-600">Pushes car into the track</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">DRS</h3>
          </div>
          <p className="mt-2 text-slate-600">Opens the rear wing → speed boost</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <BatteryCharging className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">ERS</h3>
          </div>
          <p className="mt-2 text-slate-600">Stores energy from braking → extra power</p>
        </div>
      </div>
    </div>
  )
}

export default Aero
