const Started = () => {
  return (
    <section
      id='started'
      className='px-4 py-20'
    >
      <div className='container max-w-6xl mx-auto'>
        <p className='mb-4 text-xs text-center text-gray-300 md:text-sm'>
          src/components/section/started.tsx
        </p>
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-4xl font-bold text-white'>
            Comienza tu proyecto
          </h2>
          <p className='text-lg text-gray-400'>
            Cuatro simples pasos para tener tu proyecto funcionando.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-4'>
          <div className='text-center'>
            <div className='flex items-center justify-center mx-auto mb-4 text-xl font-bold text-stone-950 rounded-full size-16 bg-linear-to-t from-brandels-100 to-aqua-100'>
              1
            </div>
            <h3 className='mb-2 text-xl font-semibold text-white'>
              Usa el Template
            </h3>
            <p className='mb-4 text-gray-400 text-pretty'>
              En GitHub, haz clic en{' '}
              <a
                href='https://github.com/new?template_name=nextkit&template_owner=bmmedina99'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-brandels-100 hover:text-blue-400'
              >
                Use this template
              </a>{' '}
              y crea tu repositorio nuevo.
            </p>
          </div>

          <div className='text-center'>
            <div className='flex items-center justify-center mx-auto mb-4 text-xl font-bold text-stone-950 rounded-full size-16 bg-linear-to-t from-brandels-100 to-aqua-100'>
              2
            </div>
            <h3 className='mb-2 text-xl font-semibold text-white'>
              Clona tu repositorio
            </h3>
            <p className='mb-4 text-gray-400'>
              Usa el template desde GitHub para crear tu nuevo repositorio
            </p>
            <div className='p-4 text-left bg-gray-900 rounded-lg'>
              <code className='text-sm break-all text-aqua-100'>
                git clone https://github.com/tu-usuario/nombre-proyecto.git
              </code>
            </div>
          </div>

          <div className='text-center'>
            <div className='flex items-center justify-center mx-auto mb-4 text-xl font-bold text-stone-950 rounded-full size-16 bg-linear-to-t from-brandels-100 to-aqua-100'>
              3
            </div>
            <h3 className='mb-2 text-xl font-semibold text-white'>
              Instala las dependencias
            </h3>
            <p className='mb-4 text-gray-400 text-pretty'>
              Instala todas las dependencias necesarias
            </p>
            <div className='p-4 text-left bg-gray-900 rounded-lg'>
              <code className='text-sm text-aqua-100'>
                cd mi-proyecto && pnpm install
              </code>
            </div>
          </div>

          <div className='text-center'>
            <div className='flex items-center justify-center mx-auto mb-4 text-xl font-bold text-stone-950 rounded-full size-16 bg-linear-to-t from-brandels-100 to-aqua-100'>
              4
            </div>
            <h3 className='mb-2 text-xl font-semibold text-white'>
              Comienza a desarrollar
            </h3>
            <p className='mb-4 text-gray-400'>
              Inicia el servidor de desarrollo y comienza a crear
            </p>
            <div className='p-4 text-left bg-gray-900 rounded-lg'>
              <code className='text-sm text-aqua-100'>pnpm run dev</code>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 text-sm text-center text-gray-400 '>
        <p>
          Y listo, accede a tu navegador y ve el resultado.{' '}
          <code className='px-2 py-1 rounded text-sky-200 bg-slate-700'>
            https://localhost:4000
          </code>
        </p>
        <p>Ahora queda que comiences a modificar a tu gusto.</p>
        <p className='text-sky-400'>¡Qué tengas un muy buen desarrollo!</p>
      </div>
    </section>
  )
}

export default Started
