import 'react-circular-progressbar/dist/styles.css'
import UserComponent from '../UserComponent'
import HostelDetailsComponent from '../HostelDetailsComponent'
import Link from 'next/link'
const Hosteldetails = [
  {
    name: 'Hostelname1',
    percent: '+27%',
    occupants: '1023',
    occupantsPercent: '56',
  },
  {
    name: 'Hostelname2',
    percent: '+30%',
    occupants: '507',
    occupantsPercent: '36',
  },
  {
    name: 'Hostelname3',
    percent: '+27%',
    occupants: '765',
    occupantsPercent: '80',
  },
  {
    name: 'Hostelname4',
    percent: '+30%',
    occupants: '507',
    occupantsPercent: '36',
  },
  {
    name: 'Hostelname5',
    percent: '+27%',
    occupants: '765',
    occupantsPercent: '80',
  },
  {
    name: 'Hostelname6',
    percent: '+27%',
    occupants: '1023',
    occupantsPercent: '56',
  },
]

const MyHostelDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-primary-Default">My Hostel</h3>
        <UserComponent />
      </div>
      <div className="flex justify-between items-center py-4">
        <h5 className="text-Neutral-black">My Hostel</h5>
        <Link href="/registerClients">
          <a className="px-5 py-2 rounded-lg bg-primary-Default text-white">
            Add New
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-y-5">
        {Hosteldetails.map(hosteldetails => {
          return <HostelDetailsComponent detail={hosteldetails} />
        })}
      </div>
    </div>
  )
}

export default MyHostelDashboard
