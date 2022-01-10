import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  )
}

export default index
