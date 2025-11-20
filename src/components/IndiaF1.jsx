import React from 'react'
import { Map, FileWarning, Route } from 'lucide-react'

function IndiaF1() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-8">
      <h2 className="text-4xl font-bold tracking-tight">India in Formula 1</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">India had F1 — then lost it to paperwork. Fastest cars on Earth stopped by the slowest government files. Classic India.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Map className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">BIC, 2011–2013</h3>
          </div>
          <p className="mt-2 text-slate-600">Buddh International Circuit</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Route className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">5.1 km, 16 turns</h3>
          </div>
          <p className="mt-2 text-slate-600">1.2 km back straight</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <FileWarning className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold">Cancelled</h3>
          </div>
          <p className="mt-2 text-slate-600">Tax + bureaucracy, hope for return</p>
        </div>
      </div>
    </div>
  )
}

export default IndiaF1
