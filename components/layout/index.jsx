import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="xl:ml-[236px] xl:p-10 w-full">{children}</main>
    </div>
  )
}

export default index
