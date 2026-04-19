'use client'

import Main from '@/components/layout/main'

export default function notFound() {
  return (
    <Main className='pt-16'>
      <section className='container grid w-full grid-cols-1 gap-16 px-4 mx-auto items-centers lg:grid-cols-2'>
        <div className='flex flex-col justify-center space-y-4'>
          <p className='mb-4 text-xs text-gray-300 md:text-sm'>
            src/app/not-found.tsx
          </p>
          <h1 className='font-bold text-white'>Página no encontrada</h1>
          <p className='max-w-xl text-xl leading-relaxed text-slate-300 text-pretty'>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida. Pero no te preocupes, hay muchas otras cosas increíbles que
            puedes explorar.
          </p>
          <nav
            className='flex flex-wrap'
            aria-label='Acciones'
          >
            <button
              type='button'
              onClick={() => window.history.back()}
              className='flex gap-4 px-4 py-3 transition-colors border-0 rounded-md text-slate-300 bg-linear-to-r from-blue-800 to-purple-800 hover:from-purple-800 hover:to-blue-800'
            >
              Volver a la página anterior
            </button>
          </nav>
        </div>
      </section>
    </Main>
  )
}
