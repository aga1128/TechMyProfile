'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  }
  const handleMenuClose = () => {
    setOpen(false);
  }
  return (
    <header className="py-6 px-4 fixed z-20 w-full bg-gray-50 flex justify-between items-center shadow-md">
      <div>
        <Link className="z-50 block flex items-center gap-5 text-xl" href="/" onClick={ handleMenuClose }>
          <Image         
            src="/images/icon.png"
            alt=""
            width={50}
            height={50} 
          />
          <p className="font-bold">It&apos;s&nbsp;Me</p>
        </Link>
      </div>
      <nav
        className={
          isOpen
            ? "z-40 bg-gray-50 fixed top-[98px] right-0 flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex justify-center items-center flex-col text-xl"
              : "block md:flex md:items-center gap-6"
          }
        >
          <li>
            <Link 
              onClick={ handleMenuClose } 
              href="/" 
              className="flex justify-center items-center w-[80px] h-[80px] md:p-10 max-md:w-[100px] max-md:h-[100px] text-center text-gray-50 bg-sub-color transition-all duration-200 ease-out hover:bg-red-400 p-4 font-bold"
            >
              Top
            </Link>
          </li>
          <li>
            <Link 
              onClick={ handleMenuClose } 
              href="/my-apps" 
              className="flex justify-center items-center w-[80px] h-[80px] md:p-10 max-md:w-[100px] max-md:h-[100px] text-center text-gray-50 bg-sub-color transition-all duration-200 ease-out hover:bg-red-400  p-4 font-bold"
            >
              Apps
            </Link>
          </li>
          <li>
            <Link 
              onClick={ handleMenuClose } 
              href="/my-jobs" 
              className="flex justify-center items-center w-[80px] h-[80px] md:p-10 max-md:w-[100px] max-md:h-[100px] text-center text-gray-50 bg-sub-color transition-all duration-200 ease-out hover:bg-red-400  p-4 font-bold"
            >
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 p-1 md:hidden" onClick={ handleMenuOpen }>
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