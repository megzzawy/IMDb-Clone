'use client'

import {MdLightMode, MdDarkMode} from 'react-icons/md'
import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'


export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return (
        <div className="text-xl">
          <MdDarkMode className="opacity-0" />
        </div>
      )
    }
  
    const currentTheme = theme === 'system' ? systemTheme : theme
  
    return (
      <div>
        {currentTheme === 'dark' ? (
          <MdLightMode 
            onClick={() => setTheme('light')}
            className="text-xl hover:text-amber-500 cursor-pointer"
          />
        ) : (
          <MdDarkMode 
            onClick={() => setTheme('dark')}
            className="text-xl hover:text-amber-500 cursor-pointer"
          />
        )}
      </div>
    )
  }

