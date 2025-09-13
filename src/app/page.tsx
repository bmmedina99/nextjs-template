import Main from '@/components/layout/main'
import Features from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import Started from '@/components/sections/started'

export default function Home() {
  return (
    <Main>
      <p className='mt-6 text-xs text-center text-gray-300 md:text-sm'>
        src/components/layout/Main.astro
      </p>
      <Hero />
      <Features />
      <Started />
    </Main>
  )
}
