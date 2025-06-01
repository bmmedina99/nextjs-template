import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-periwinkle text-2xl font-bold'>Next.js App Router</h1>
          <nav className='space-x-6'>
            <Link
              href='#features'
              className='text-gray-400 hover:text-gray-100'
            >
              Funcionalidades
            </Link>
            <Link
              href='/contacto'
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex flex-col min-h-dvh'>
        <section className='bg-gradient-to-tr from-russian-violet to-rebecca-purple text-white'>
          <div className='container mx-auto px-4 py-20 text-center'>
            <h2 className='text-periwinkle text-4xl font-extrabold mb-4'>
              Next.js Template
            </h2>
            <p className='text-xl mb-8'>
              Plantilla base de Next.js App Router con TailwindCSS y TypeScript
              preconfigurados
            </p>
            <Link
              href='#features'
              className='inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition'
            >
              Conoce más
            </Link>
          </div>
        </section>
        <section
          id='features'
          className='container mx-auto px-4 py-16'
        >
          <h3 className='text-periwinkle text-3xl font-bold text-center mb-12'>
            Funcionalidades Principales
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow p-6 text-center'>
              <Image
                src='/window.svg'
                alt='Rápido'
                width={64}
                height={64}
                className='mx-auto mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>Rendimiento</h4>
              <p className='text-gray-600'>
                Con Next.js App Router optimizas la carga y obtienes SSR/SSG sin
                esfuerzo.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-6 text-center'>
              <Image
                src='/file.svg'
                alt='Código'
                width={64}
                height={64}
                className='mx-auto mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>TypeScript</h4>
              <p className='text-gray-600'>
                Tipado estricto desde el inicio para evitar errores en tiempo de
                desarrollo.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow p-6 text-center'>
              <Image
                src='/globe.svg'
                alt='Tailwind'
                width={64}
                height={64}
                className='mx-auto mb-4'
              />
              <h4 className='text-xl font-semibold mb-2'>TailwindCSS</h4>
              <p className='text-gray-600'>
                Utiliza utilidades de Tailwind para estilizar sin escribir CSS
                extra.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-gradient-to-tr from-russian-violet to-rebecca-purple text-periwinkle border-t'>
        <div className='container mx-auto px-4 py-8 text-center'>
          © {new Date().getFullYear()}. Todos los derechos reservados.
        </div>
      </footer>
    </>
  )
}
