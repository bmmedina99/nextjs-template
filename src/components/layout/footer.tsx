import Icon from '../ui/icon'

const Footer = () => {
  return (
    <footer className='px-4 py-12 bg-slate-900 text-center'>
      <p className='mb-4 text-xs text-gray-300 md:text-sm'>
        src/components/layout/footer.tsx
      </p>
      <section className='container mx-auto flex flex-col items-center justify-between md:flex-row'>
        <div className='flex items-center mb-4 space-x-2 text-white md:mb-0'>
          <div className='flex items-center justify-center size-6 rounded bg-linear-to-r from-brandels-100 to-aqua-100'>
            <Icon
              name='nextjs'
              width={12}
              height={12}
            />
          </div>
          <span className='font-semibold'>NextKit Template</span>
        </div>
        <p className='text-sm text-slate-300'>
          {new Date().getFullYear()} | Desarrollador y diseñado por
          <a
            href='https://bmmedina.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='underline transition-colors hover:text-brandels-100 text-sky-400'
          >
            @bmmedina99
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
