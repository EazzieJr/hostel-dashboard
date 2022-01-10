import { Read,Archive,Cancel } from "../SVGIcons";

const notifications = [
    {
        image:"/images/unsplash_1OtUkD_8svc.png",
        message:"Voluptatem temporibus ea voluptas quia porro id deserunt doloremque quos. Debitis et molestias quam dolorem voluptas id atque sint. Non....",
        date:"Fri Nov 05 2021"
    },
    {
        image:"/Images/unsplash_DuBNA1QMpPA.png",
        message:"Voluptatem temporibus ea voluptas quia porro id deserunt doloremque quos. Debitis et molestias quam dolorem voluptas id atque sint. Non....",
        date:"Fri Nov 05 2021"
    },
    {
        image:"/Images/unsplash_LqKhnDzSF-8.png",
        message:"Voluptatem temporibus ea voluptas quia porro id deserunt doloremque quos. Debitis et molestias quam dolorem voluptas id atque sint. Non....",
        date:"Fri Nov 05 2021"
    },
    {
        image:"/Images/unsplash_ZXBPMnNVtlE.png",
        message:"Voluptatem temporibus ea voluptas quia porro id deserunt doloremque quos. Debitis et molestias quam dolorem voluptas id atque sint. Non....",
        date:"Fri Nov 05 2021"
    }
]

const NotificationDashboard = () => {
    return(
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-primary-Default">Notification</h3>
                <div>
                    <button className="btn flex items-center bg-primary-Default px-3 py-2 rounded-lg">
                        <Read/>
                        <span className="subtitle2 pl-2">Mark as read</span>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <div className="text-Neutral-gray flex items-center justify-between py-4">
                        <h5 className="w-1/2">Details</h5>
                        <h5 className="w-1/4">Date</h5>
                        <h5 className="w-1/5">Task</h5>
                    </div>
                </div>
                {
                    notifications.map(notification =>{
                        return(
                            <div className="flex justify-between items-center py-4 rounded-lg mb-4 bg-primary-Lightest">
                                <div className="flex items-center justify-between w-1/2 gap-x-2">
                                    <img className="pl-2" src={notification.image}/>
                                    <div>
                                        <p className="subtitle1">Hostel Support</p>
                                        <div className="text-Neutral-gray">
                                            <p className="text-xs leading-normal tracking-normal">{notification.message}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/4">
                                    <p className="body2">{notification.date}</p>
                                </div>
                                <div className="w-1/5 flex justify-between items-center">
                                    <div className="bg-yellow-default w-10 rounded-full h-10 flex items-center justify-center">
                                        <Archive/>
                                    </div>
                                    <div className="fill-current text-white bg-Red-default w-10 rounded-full h-10 flex items-center justify-center">
                                        <Cancel className="text-white"/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default NotificationDashboard;