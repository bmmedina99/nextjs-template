import Icon from '../ui/icon'

const hero = () => {
  return (
    <section className='px-4 py-24'>
      <div className='container mx-auto text-center'>
        <p className='mb-4 text-xs text-gray-300 md:text-sm'>
          src/components/sections/hero.tsx
        </p>
        <h1 className='mb-6 text-5xl font-bold leading-tight text-white md:text-7xl'>
          NextKit
          <span className='block text-transparent bg-clip-text bg-gradient-to-t from-brandels-blue to-aquamarine'>
            Template
          </span>
        </h1>
        <p className='max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-400'>
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
            className='flex gap-4 px-4 py-3 text-white border-0 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          >
            <Icon name='template' />
            Usar Template
          </a>
        </div>
      </div>
    </section>
  )
}

export default hero
