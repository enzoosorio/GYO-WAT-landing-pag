import React from 'react'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({children, className}: SectionProps) => {
  return (
    <section className={`relative w-full h-screen mx-auto ${className} flex items-center justify-center`}>
      {children}
    </section>
  )
}
