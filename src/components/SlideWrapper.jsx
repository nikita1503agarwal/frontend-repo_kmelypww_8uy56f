import React from 'react'

function SlideWrapper({ children, index, total, onPrev, onNext, onSet }) {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl">{children}</div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <button onClick={onPrev} className="px-3 py-2 rounded-md border border-slate-300 hover:bg-slate-50 transition" aria-label="Previous slide">Prev</button>
            <button onClick={onNext} className="px-3 py-2 rounded-md border border-slate-300 hover:bg-slate-50 transition" aria-label="Next slide">Next</button>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onSet(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-red-600' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="text-sm text-slate-500">{index + 1} / {total}</div>
        </div>
      </div>
    </div>
  )
}

export default SlideWrapper
