import OverallGraph from '../OverallGraph.jsx'

import CircularProgressBar from '../CircularProgressBar'
import UserComponent from '../UserComponent'
import { ArrowLeft, Calender } from '../SVGIcons'

const points = [900, 800, 600, 200, 500, 400, 700, 300, 900, 500, 1200, 700]

const HostelRevenue = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-4">
          <p className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-Default">
            <ArrowLeft />
          </p>
          <h3 className="text-primary-Default text-sm">Hostel Name</h3>
        </div>
        <div>
          <UserComponent />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="p-4 w-3/5 bg-white rounded-xl">
          <OverallGraph points={points} name="Hostel Revenue " />
        </div>
        <div className="w-2/6 bg-white px-2 py-4 rounded-xl">
          <CircularProgressBar />
        </div>
      </div>
    </div>
  )
}

export default HostelRevenue
