import React from 'react'
import { AiFillHome} from 'react-icons/ai'
import { BsFillInfoCircleFill} from 'react-icons/bs'
import MenuItem from './MenuItem'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 max-w-6xl mx-auto'>
      <div className='flex gap-5'>
        <MenuItem title='home' address='/' Icon={AiFillHome}/>
        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex items-center gap-5'>
      <DarkModeSwitch/>
      <Link href="/" className='flex items-center gap-2'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </Link>
      </div>
    </div>
  )
}
