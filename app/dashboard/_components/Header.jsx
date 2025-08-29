"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

function Header() {

  const path = usePathname()
  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <Image src={'/logo.svg'} width={120} height={100} alt='logo' />
        <ul className='flex items-center space-x-8 mx-4'>
        <li className={`text-gray-600 hover:text-gray-900 transition-all cursor-pointer 
            ${path== '/dashboard' ? 'text-gray-900 font-semibold' : ''}`}>
          Dashboard
        </li>
        <li className={`text-gray-600 hover:text-gray-900 transition-all cursor-pointer 
            ${path== '/questions' ? 'text-gray-900 font-semibold' : ''}`}>
          Questions
        </li>
        <li className={`text-gray-600 hover:text-gray-900 transition-all cursor-pointer 
            ${path== '/upgrade' ? 'text-gray-900 font-semibold' : ''}`}>
          Upgrade
        </li>
        <li className={`text-gray-600 hover:text-gray-900 transition-all cursor-pointer 
            ${path== '/how-it-works' ? 'text-gray-900 font-semibold' : ''}`}>
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
