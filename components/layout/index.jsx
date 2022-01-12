import Image from 'next/image'
import { useState } from 'react'
import { Hamburger } from '../SVGIcons.jsx'
import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  const [sideBarOpened, setSideBarOpened] = useState(false)
  return (
    <div className="">
      <nav className="flex items-center justify-between px-4 pt-4 xl:hidden md:px-10 md:pt-6">
        <div className="flex items-center space-x-2 lg:hidden">
          <div className="relative w-6 h-6">
            <Image src="/images/userPic.png" layout="fill" />
          </div>

          <p className="small1 text-Neutral-Dark">Hello, Sally👋</p>
        </div>
        <button onClick={() => setSideBarOpened(!sideBarOpened)}>
          <Hamburger />
        </button>
      </nav>
      <div className="">
        <SideBar
          sideBarOpened={sideBarOpened}
          setSideBarOpened={setSideBarOpened}
        />
        <main className="xl:ml-[236px] p-4 sm:p-10">{children}</main>
      </div>
    </div>
  )
}

export default index
