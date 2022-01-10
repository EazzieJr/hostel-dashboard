import {
  Logo,
  Home,
  Favorites,
  Notification,
  Settings,
  Payment,
  Logout,
} from '../SVGIcons'

const SideBar = () => {
  return (
    <nav className="w-[236px] bg-white h-screen sideBarShadow fixed top-0 left-0 xl:py-9 px-6">
      <Logo />

      {/* Nav list */}
      <ul className="mt-14">
        <NavItem label="Home" logo={<Home />} />
        <NavItem label="Favorites" logo={<Favorites />} />
        <NavItem label="Notification" logo={<Notification />} />
        <NavItem label="Settings" logo={<Settings />} />
        <NavItem label="Payments" logo={<Payment />} />

        {/* divider */}
        <div></div>

        <NavItem label="Help" logo={<Home />} />
        <NavItem label="Logout" logo={<Logout />} />
      </ul>
    </nav>
  )
}

const NavItem = ({ label, logo }) => {
  return (
    <li>
      <button className="bg-primary-Lightest w-full p-[18px] text-left rounded-lg flex item-center space-x-4">
        {logo}
        <span>{label}</span>
      </button>
    </li>
  )
}

export default SideBar
