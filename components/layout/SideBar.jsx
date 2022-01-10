import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Logo,
  Home,
  Favorites,
  Notification,
  Settings,
  Payment,
  Help,
  Logout,
} from '../SVGIcons'

const SideBar = () => {
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

  return (
    <nav className="w-[236px] bg-white h-screen sideBarShadow fixed top-0 left-0 xl:py-10">
      {/* Logo */}
      <div className="px-8">
        <Logo />
      </div>

      {/* Nav list */}
      <ul className="mt-14">
        <div className="px-6">
          <NavItem label="Home" logo={<Home />} link="/" />
          <NavItem label="Favorites" logo={<Favorites />} link="/favorites" />
          <NavItem
            label="Notification"
            logo={<Notification />}
            link="/notification"
          />
          <NavItem label="Settings" logo={<Settings />} link="/settings" />
          <NavItem label="Payments" logo={<Payment />} link="/payments" />
        </div>

        {/* divider */}
        <div className="w-full bg-Neutral-Divider h-px my-10"></div>

        <div className="px-6">
          <NavItem label="Help" logo={<Help />} link="/help" />
          <NavItem label="Logout" logo={<Logout />} link="/logout" />
        </div>
      </ul>
    </nav>
  )
}

export default SideBar
