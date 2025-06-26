'use client'

const notFound = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen p-4 overflow-hidden'>
      <div className='relative z-10 w-full max-w-4xl space-y-12 text-center'>
        <p className='mb-4 text-xs text-gray-300 md:text-sm'>
          src/app/not-found.tsx
        </p>
        <div className='text-6xl sm:text-8xl font-bold leading-none'>
          <span className='text-transparent bg-gradient-to-r from-brandels-blue via-aquamarine to-brandels-blue bg-clip-text'>
            404
          </span>
        </div>

        <div className='space-y-6'>
          <h1 className='text-4xl font-bold text-gray-500 sm:text-5xl'>
            Página no encontrada
          </h1>
          <p className='max-w-2xl mx-auto text-xl leading-relaxed text-gray-200'>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida. Pero no te preocupes, hay muchas otras cosas increíbles que
            puedes explorar.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <button
            type='button'
            onClick={() => window.history.back()}
            className='flex items-center justify-center gap-4 px-4 py-3 text-white border-0 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          >
            Volver a la página anterior
          </button>
        </div>
      </div>
    </div>
  )
}

export default notFound
