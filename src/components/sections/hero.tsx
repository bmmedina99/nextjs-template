import Icon from '../ui/icon'

const hero = () => {
  return (
    <section className='px-4 py-24 text-center'>
      <p className='mb-4 text-xs text-gray-300 md:text-sm'>
        src/components/sections/hero.tsx
      </p>
      <h1 className='mb-6 font-bold leading-tight text-white'>
        NextKit
        <span className='block text-transparent bg-clip-text bg-linear-to-t from-brandels-100 to-aqua-100'>
          Template
        </span>
      </h1>
      <p className='max-w-3xl mx-auto mb-8 text-xl text-slate-300 text-pretty'>
        Plantilla de inicio para proyectos con Next.js App Router,
        preconfigurada con
        <span className='font-semibold text-blue-400'> TypeScript</span> y
        <span className='font-semibold text-purple-400'> TailwindCSS</span>.
        Todo listo para que comiences a desarrollar de inmediato.
      </p>
      <div className='flex items-center justify-center'>
        <a
          href='https://github.com/new?template_name=nextkit&template_owner=bmmedina99'
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-4 px-4 py-3 text-white border-0 rounded-md bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        >
          <Icon name='template' />
          Usar Template
        </a>
      </div>
    </section>
  )
}

export default hero
