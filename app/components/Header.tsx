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
    <header className="py-6 px-4 fixed z-20 w-full bg-header-color flex justify-between items-center">
      <h1>
        <Link className="z-50 block flex items-center gap-5 text-xl" href="/" onClick={handleMenuClose}>
          <Image         
                src="/images/icon.png"
                alt=""
                width={50}
                height={50} 
              />
          <p className="font-bold">It&apos;s&nbsp;Me</p>
        </Link>
      </h1>
      <nav
        className={
          isOpen
            ? "z-40 bg-header-color fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-12 text-xl"
              : "block md:flex"
          }
        >
          <li>
            <Link onClick={handleMenuClose} href="/" className="md:p-10 p-4 font-bold">
              Top
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/my-apps" className="md:p-10 p-4 font-bold">
              Apps
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/my-jobs" className="md:p-10 p-4 font-bold">
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
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