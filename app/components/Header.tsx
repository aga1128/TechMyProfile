import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed z-50 flex justify-between items-center max-w-[1920px] w-full mx-auto px-6 shadow-xs bg-header-color shadow-bottom-lg">
      <h1 className="flex items-center gap-5 text-black text-xl">
        <Image         
          src="/images/icon.png"
          alt=""
          width={50}
          height={50} 
        />
        <p>It's&nbsp;Me</p>
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
    </header>
  )
}

export default Header