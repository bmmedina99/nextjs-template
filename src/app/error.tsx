'use client'

import Main from '@/components/layout/main'

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Main className='relative flex items-center justify-center grow overflow-hidden'>
      <div className='max-w-2xl mx-auto space-y-4 text-center'>
        <p className='mb-4 text-xs text-gray-300 md:text-sm'>
          src/app/error.tsx
        </p>
        <section className='space-y-4'>
          <h1 className='font-bold text-transparent bg-linear-to-r from-brandels-100 to-aqua-100 bg-clip-text'>
            Oops!
          </h1>
          <h2 className='text-3xl font-semibold text-slate-300'>
            Algo salió mal
          </h2>
          <p className='max-w-md mx-auto text-lg leading-relaxed text-slate-300 text-pretty'>
            Ha ocurrido un error inesperado. No te preocupes, nuestro equipo ha
            sido notificado y está trabajando para solucionarlo.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className='max-w-lg p-4 mx-auto mt-6 text-left border border-red-200 rounded-lg bg-red-50'>
              <summary className='font-semibold text-red-700 cursor-pointer'>
                Detalles del error (desarrollo)
              </summary>
              <pre className='mt-2 text-sm text-red-600 wrap-break-word whitespace-pre-wrap'>
                {error.message}
              </pre>
            </details>
          )}
        </section>
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <button
            type='button'
            onClick={reset}
            className='flex items-center gap-3 px-8 py-4 font-semibold text-slate-300 transition-all duration-200 transform rounded-full shadow-lg group bg-linear-to-r from-brandels-100 to-aqua-100 hover:shadow-xl hover:scale-105'
          >
            Intentar de nuevo
          </button>

          <a
            href='/'
            className='flex items-center gap-3 px-8 py-4 font-semibold text-gray-700 transition-all duration-200 transform bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:border-brandels-100/30 hover:scale-105'
          >
            Volver al inicio
          </a>
        </div>
        <div className='absolute rounded-full size-20 top-20 left-10 bg-aqua-100/20 blur-xl' />
        <div className='absolute rounded-full size-32 bottom-20 right-10 bg-brandels-100/20 blur-xl' />
      </div>
    </Main>
  )
}
