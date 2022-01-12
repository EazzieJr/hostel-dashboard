import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import {
  Logo,
  Home,
  Favorites,
  Notification,
  Settings,
  Payment,
  Help,
  Overview,
  Receipts,
  Logout,
} from '../SVGIcons'

const user = {
  name: 'Joey',
  image: '/images/userPic.png',
  role: 'Client',
}

const SideBar = ({ sideBarOpened, setSideBarOpened }) => {
  const { asPath } = useRouter()

  const NavItem = ({ label, logo, link }) => {
    return (
      <li>
        <Link href={link}>
          <a
            className={`${
              asPath === link
                ? 'bg-primary-Lightest text-primary-Dark'
                : 'text-Neutral-gray hover:bg-Neutral-Lightest'
            }  w-full p-[18px] text-left fill-current rounded-lg flex item-center space-x-4 transition-colors duration-500`}
          >
            {logo}
            <span>{label}</span>
          </a>
        </Link>
      </li>
    )
  }

  const backdropref = useRef(null)

  const handleOnBlurClick = e => {
    const backdrop = backdropref.current

    if (backdrop === e.target) {
      setSideBarOpened(false)
    }
  }

  return (
    <>
      <nav
        className={`${
          sideBarOpened ? 'translate-x-0' : '-translate-x-full'
        } transform xl:transform-none w-[236px] transition-transform bg-white h-screen h-[100%] sideBarShadow fixed top-0 py-10 z-40`}
      >
        {/* Logo */}
        <div className="px-8">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        {/* Nav list */}
        <ul className="mt-14">
          <div className="px-6">
            {user.role === 'Client' && (
              <NavItem label="Overview" logo={<Overview />} link="/overview" />
            )}

            {/* home */}
            {user.role === 'Student' && (
              <NavItem label="Home" logo={<Home />} link="/" />
            )}

            {/* favorites */}
            {user.role === 'Student' && (
              <NavItem
                label="Favorites"
                logo={<Favorites />}
                link="/favorites"
              />
            )}

            {/* my hostel */}
            {user.role === 'Client' && (
              <NavItem
                label="My Hostel"
                logo={<Favorites />}
                link="/myHostel"
              />
            )}

            <NavItem
              label="Notification"
              logo={<Notification />}
              link="/notification"
            />

            <NavItem label="Settings" logo={<Settings />} link="/settings" />

            {user.role === 'Student' && (
              <NavItem label="Payments" logo={<Payment />} link="/payments" />
            )}

            {user.role === 'Client' && (
              <NavItem label="Receipts" logo={<Receipts />} link="/receipts" />
            )}
          </div>

          {/* divider */}
          <div className="w-full bg-Neutral-Divider h-px my-10"></div>

          <div className="px-6">
            <NavItem label="Help" logo={<Help />} link="/help" />
            <NavItem label="Logout" logo={<Logout />} link="/logout" />
          </div>
        </ul>
      </nav>

      {/* backdrop */}
      {sideBarOpened && (
        <div
          onClick={handleOnBlurClick}
          ref={backdropref}
          className="h-full w-full absolute top-0 left-0 z-10 bg-opacity-50 bg-black"
        ></div>
      )}
    </>
  )
}

export default SideBar
