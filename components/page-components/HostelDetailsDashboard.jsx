import OverallGraph from '../OverallGraph.jsx'

import CircularProgressBar from '../CircularProgressBar'
import UserComponent from '../UserComponent'
import { useRouter } from 'next/router'
import { ArrowLeft, Calender } from '../SVGIcons'
import Link from 'next/link'

const points = [900, 800, 600, 200, 500, 400, 700, 300, 900, 500, 1200, 700]

const HostelRevenue = () => {
  const { query } = useRouter()
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-4">
          <Link href="/myHostel">
            <a className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-Default">
              <ArrowLeft />
            </a>
          </Link>
          <h3 className="text-primary-Default text-sm md:text-md">
            {query.name}
          </h3>
        </div>
        <div>
          <UserComponent />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 md:flex-row justify-between mt-4">
        <div className="p-4 w-full md:w-3/5 bg-white rounded-xl">
          <OverallGraph points={points} name="Hostel Revenue " />
        </div>
        <div className="md:w-2/6 w-full bg-white px-2 py-4 rounded-xl">
          <CircularProgressBar />
        </div>
      </div>
    </div>
  )
}

export default HostelRevenue
