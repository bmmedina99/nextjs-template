import Link from 'next/link'
import { configSite, navLinks } from '@/site.config'
import Icon from '../ui/icon'

const Header = () => {
  return (
    <header className='border-b border-gray-800 bg-stone-950/50 backdrop-blur-sm sticky top-0 z-50'>
      <div className='container px-4 py-4 mx-auto'>
        <p className='mb-2 text-xs text-center text-zinc-200 md:text-sm'>
          src/components/layout/header.tsx
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-white'>
            <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-tr from-brandels-blue to-aquamarine'>
              <Icon
                name='nextjs'
                classes=''
              />
            </div>
            <span className='text-xl font-bold'>{configSite.title}</span>
          </div>
          <nav className='items-center hidden space-x-6 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className='text-gray-300 hover:text-white transition-colors'
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <a
            href='https://github.com/bmmedina99/nextkit'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center rounded-lg border-2 border-gray-700 bg-transparent px-4 py-2 text-white transition-colors hover:bg-gray-800 '
          >
            <Icon
              name='github'
              classes='mr-2'
            />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
