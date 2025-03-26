import React from 'react'
import Link from 'next/link'

export default function MenuItem( {title, address, Icon} ) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className='sm:hidden text-2xl'/>
        <p className='uppercase text-sm hidden sm:inline'>{title}</p>
    </Link>
  )
}
