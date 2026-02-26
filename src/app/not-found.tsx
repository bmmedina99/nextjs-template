'use client'

import Main from '@/components/layout/main'

export default function notFound() {
  return (
    <Main className='flex items-center justify-center grow overflow-hidden'>
      <div className='relative z-10 max-w-4xl mx-auto space-y-4 text-center'>
        <p className='mb-4 text-xs text-gray-300 md:text-sm'>
          src/app/not-found.tsx
        </p>
        <p className='text-6xl font-bold leading-none text-transparent sm:text-8xl bg-clip-text bg-linear-to-t from-brandels-blue via-aquamarine to-brandels-blue'>
          404
        </p>
        <section className='space-y-6'>
          <h1 className='font-bold text-white'>Página no encontrada</h1>
          <p className='max-w-2xl mx-auto text-xl leading-relaxed text-slate-300 text-pretty'>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida. Pero no te preocupes, hay muchas otras cosas increíbles que
            puedes explorar.
          </p>
        </section>
        <div className='flex items-center justify-center'>
          <button
            type='button'
            onClick={() => window.history.back()}
            className='flex gap-4 px-4 py-3 text-white border-0 rounded-md bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          >
            Volver a la página anterior
          </button>
        </div>
      </div>
    </Main>
  )
}
