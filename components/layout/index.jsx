import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="xl:ml-[236px] xl:p-10 w-11/12">{children}</main>
    </div>
  )
}

export default index
