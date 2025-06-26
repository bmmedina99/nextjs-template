import Icon from '../ui/icon'

const Features = () => {
  return (
    <section
      id='features'
      className='px-4 py-20 bg-slate-900/50'
    >
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <p className='mb-2 text-xs text-gray-300 md:text-sm'>
            src/components/sections/features.tsx
          </p>
          <h2 className='mb-4 text-4xl font-bold text-white'>
            Características
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-slate-300 text-pretty'>
            Todo lo que necesitas para comenzar tu próximo proyecto con{' '}
            <span className='relative inline-block before:absolute before:-inset-1 before:block before:skew-y-3 before:bg-gradient-to-r before:from-brandels-blue before:to-aquamarine'>
              <span className='relative font-semibold text-white'>
                {' '}
                Next.js
              </span>
            </span>{' '}
            de forma rápida y eficiente
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <div className='p-6 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700 hover:border-zinc-500 hover:shadow-lg hover:shadow-zinc-500/10'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 text-white rounded-lg bg-gradient-to-r from-zinc-500 to-zinc-600'>
              <Icon name='nextjs' />
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>
              Next.js v15
            </h3>
            <p className='text-sm text-slate-400'>
              App Router configurado para contenido dinámico con las últimas
              características
            </p>
          </div>
          <div className='p-6 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 text-white rounded-lg bg-gradient-to-r from-purple-500 to-purple-600'>
              <Icon name='tailwindcss' />
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>
              TailwindCSS v4
            </h3>
            <p className='text-sm text-slate-400'>
              Estilos rápidos y modernos con la última versión.
            </p>
          </div>
          <div className='p-6 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-600'>
              <Icon name='typescript' />
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>
              TypeScript v5
            </h3>
            <p className='text-sm text-slate-400'>
              Configuración optimizada con tsconfig.json para mejor desarrollo.
            </p>
          </div>

          <div className='p-6 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 text-white rounded-lg bg-gradient-to-r from-green-500 to-green-600'>
              <Icon name='biome' />
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>Biome v2</h3>
            <p className='text-sm text-slate-400'>
              Para lintear y formatear el código.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
