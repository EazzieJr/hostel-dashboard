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
                    <button className="btn flex items-center bg-primary-Default px-3 py-1 rounded-lg">
                        <Read/>
                        <span className="subtitle2 pl-2">Mark as read</span>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <div className="text-Neutral-gray flex items-center justify-between py-4">
                        <h5>Details</h5>
                        <h5>Date</h5>
                        <h5>Task</h5>
                    </div>
                </div>
                {
                    notifications.map(notification =>{
                        return(
                            <div>
                                <img src={notification.image}/>
                                <div>
                                    <p className="subtitle1">Hostel Support</p>
                                    <div>
                                        <p className="body2"></p>
                                    </div>
                                </div>
                                <div>
                                    <p className="body2">{notification.date}</p>
                                </div>
                                <div>
                                    <div>
                                        <Archive/>
                                    </div>
                                    <div>
                                        <Cancel/>
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