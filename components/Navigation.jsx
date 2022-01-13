import Link from 'next/link'
import { Logo } from './SVGIcons'

const Navigation = () => {
  return (
    <div>
      <nav className="w-full top-0 left-0 lg:absolute">
        <div className="nav-container py-6 xl:py-8 px-5 xl:px-14 flex justify-between items-center">
          <div className="left-container">
            <Link href="/">
              <a className="logo space-x-3 xl:space-x-5 flex justify-center items-center">
                <Logo />
              </a>
            </Link>
          </div>

          <div className="right-container flex justify-center items-center space-x-3 xl:space-x-5">
            <div className="avatar">
              <img className="w-10 xl:w-12" src="/images/Avatar.png" alt="" />
            </div>

            <button className="register-btn px-6 lg:px-8 py-2 xl:py-3 text-white text-xs font-normal bg-[#03A86B] rounded-lg xl:rounded-xl">
              Help
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
