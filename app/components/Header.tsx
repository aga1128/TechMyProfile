'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  }
  const handleMenuClose = () => {
    setOpen(false);
  }
  return (
    <header className="fixed z-50 flex justify-between items-center max-w-[1920px] w-full mx-auto px-6 shadow-xs bg-header-color shadow-bottom-lg">
      <h1>
        <a href="/" className="block flex items-center gap-5 text-xl">
          <Image         
            src="/images/icon.png"
            alt=""
            width={50}
            height={50} 
          />
          <p>It&apos;s&nbsp;Me</p>
        </a>
      </h1>
      <nav className="flex justify-end items-center">
        <ul className="flex justify-between items-center text-xl font-semibold">
          <li className="">
            <a href="/" className="inline-block w-28 px-5 py-7 bg-red-400 text-center">Top</a>             
          </li>
          <li className="">
            <a href="/my-apps" className="inline-block w-28 px-5 py-7 bg-red-300 text-center">Apps</a>              
          </li>
          <li className="">
            <a href="/my-jobs" className="inline-block w-28 px-5 py-7 bg-red-200 text-center">Jobs</a>               
          </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={ handleMenuOpen }>
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </header>
  )
}

export default Header