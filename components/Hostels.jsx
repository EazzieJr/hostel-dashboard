import { Heart, Map } from './SVGIcons'

import { useState } from 'react'

const Hostel = () => {
  const [iconClick, setIconClick] = useState(false)
  function iconColorChanger() {
    setIconClick(!iconClick)
  }
  return (
    <div className="flex flex-col gap-y-6 p-4  w-2/5">
      <div>
        <img
          className="w-full"
          src="./images/hotelImage.png"
          alt="hostelimage"
        />
      </div>
      <div className="flex justify-between items-center ">
        <h5>BEST PLACE HOSTEL</h5>
        <p onClick={iconColorChanger}>
          <Heart />
        </p>
      </div>
      <div className="flex justify-start items-center gap-x-4">
        <p>
          <Map />
        </p>
        <p className="body1">Unilorin</p>
        <p className="small1">Show Map</p>
      </div>
      <div>
        <p className="subtitle1">N130k</p>
      </div>
    </div>
  )
}

export default Hostel
