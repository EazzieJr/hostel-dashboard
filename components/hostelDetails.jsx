import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 36;

const hostelDetails = () =>(
    <div className="text-black bg-yellow-300 p-3 rounded-xl flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
            <h5>Hostel Name</h5>
            <h5>+27%</h5>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col ">
                <h2>1023</h2>
                <p className="body1">Occupants</p>
            </div>
            <div className="flex justify-center items-center ">
                <div className="w-16 h-16 flex justify-center items-center">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{text:{fontSize:"1.5rem"}}}/>
                </div>
            </div>
        </div>
    </div>
)


export default hostelDetails;