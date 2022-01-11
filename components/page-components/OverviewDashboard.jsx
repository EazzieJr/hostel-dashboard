import UserComponent from "../UserComponent"
import HostelDetailsComponent from "../HostelDetailsComponent";
import { RecentCircle ,Calender} from "../SVGIcons";
const Hosteldetails = [
    {
        name:"Hostelname1",
        percent:"+27%",
        occupants:"1023",
        occupantsPercent:"56"
    },
    {
        name:"Hostelname2",
        percent:"+30%",
        occupants:"507",
        occupantsPercent:"36"
    },
    {
        name:"Hostelname3",
        percent:"+27%",
        occupants:"765",
        occupantsPercent:"80"
    }
]

const OverviewComponent = () =>{
    return(
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-primary_default">Overview</h3>
                <UserComponent/>
            </div>
            <div className="flex justify-between items-center py-4">
                <h5 className="text-Neutral-black py-2">My Hostels</h5>
                <p className="body2 text-primary-Default">View All</p>
            </div>
            <div className="flex justify-between items-center ">
                {
                    Hosteldetails.map(hosteldetail =>{
                        return(
                            <HostelDetailsComponent detail={hosteldetail}/>
                        )
                    })
                }
            </div>
            <div className="flex py-4 justify-between">
                <div className="w-4/6 px-2 bg-white rounded-xl">
                    <div className="flex items-center justify-between py-5 px-4">
                        <div className="">
                            <h5>Overall Revenue</h5>
                        </div>
                        <div className="flex justify-between items-center border-2 py-2 px-3 rounded-xl gap-x-2">
                            <Calender/>
                            <select name="year">
                                <option className="body2" value="Year">Year</option>
                                <option className="body2" value="2021">2021</option>
                                <option className="body2" value="2020">2020</option>
                                <option className="body2" value="2019">2020</option>
                            </select>
                            <select>
                                <option className="body2" value="Month">Month</option>
                                <option className="body2" value="12">12</option>
                                <option className="body2" value="11">11</option>
                                <option className="body2" value="10">10</option>
                                <option className="body2" value="9">9</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-3/10 bg-white rounded-xl px-4 py-2 ">
                    <h5 className="py-2">Recent Activity</h5>
                    <div className="flex flex-col gap-y-6 py-4">
                        <div className="flex gap-x-4">
                            <RecentCircle/>
                            <div>
                                <p className="body2 text-Neutral-black">This is the detail for the notification, <br/>it can only be two lines.</p>
                                <p className="text-Neutral-gray">A few seconds ago</p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <RecentCircle/>
                            <div>
                                <p className="body2 text-Neutral-black">This is the detail for the notification, <br/>it can only be two lines.</p>
                                <p className="text-Neutral-gray">A few seconds ago</p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <RecentCircle/>
                            <div>
                                <p className="body2 text-Neutral-black">This is the detail for the notification, <br/>it can only be two lines.</p>
                                <p className="text-Neutral-gray">A few seconds ago</p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <RecentCircle/>
                            <div>
                                <p className="body2 text-Neutral-black">This is the detail for the notification, <br/>it can only be two lines.</p>
                                <p className="text-Neutral-gray">A few seconds ago</p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <RecentCircle/>
                            <div>
                                <p className="body2 text-Neutral-black">This is the detail for the notification, <br/>it can only be two lines.</p>
                                <p className="text-Neutral-gray">A few seconds ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverviewComponent;