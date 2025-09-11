import type { PropsWithChildren } from 'react'

interface MainProps {
  children: React.ReactNode
  className?: string
}

export default function Main({
  children,
  className,
}: PropsWithChildren<MainProps>) {
  return (
    <main
      id='main-content'
      className={`relative ${className}`}
    >
      {children}
    </main>
  )
}
