import Image from 'next/image'
import { useState } from 'react'
import { Hamburger } from '../SVGIcons.jsx'
import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  const [sideBarOpened, setSideBarOpened] = useState(false)
  return (
    <div className="container mx-auto max-w-screen-2xl relative">
      <nav className="xl:hidden px-4 pt-4 md:px-10 md:pt-6 flex justify-between items-center">
        <div className="lg:hidden flex items-center space-x-2">
          <div className="h-6 w-6 relative">
            <Image src="/images/userPic.png" layout="fill" />
          </div>

          <p className="small1 text-Neutral-Dark">Hello, Sally👋</p>
        </div>
        <button onClick={() => setSideBarOpened(!sideBarOpened)}>
          <Hamburger />
        </button>
      </nav>
      <div className="lg:flex">
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
