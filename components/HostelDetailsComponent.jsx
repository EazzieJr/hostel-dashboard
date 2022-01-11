import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percent = 36;

const HostelDetailsComponent = ({detail}) =>{
    console.log(detail)
    return(
        <div className='bg-primary-Lightest flex flex-col gap-y-8 rounded-lg px-3 py-4 w-w-3/10'>
            <div className='flex justify-between items-center'>
                <h5>Hostel Details</h5>
                <h5 className='text-primary-Default'>{detail.percent}</h5>
            </div>
            <div className='flex justify-between items-center'> 
                <div>
                    <h2>{detail.occupants}</h2>
                    <p className="body1 text-Neutral-gray">Occupants</p>
                </div>
                <div className='w-16 h-16'>
                    <CircularProgressbar value={detail.occupantsPercent} text={`${detail.occupantsPercent}%`} />
                </div>
            </div>
        </div>        
    )
}


export default HostelDetailsComponent;