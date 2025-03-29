'use client'

import { ThemeProvider } from 'next-themes'

import React from 'react'

export default function Providers ({children}) {
  return (
    <ThemeProvider className="dark:bg-[#141414] bg-white min-h-screen transition-all duration-500 ease-in-out" 
    attribute="class" 
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
      <div>
        {children}
      </div>
    </ThemeProvider>
  )
}

