import { Heart, Map } from './SVGIcons'
import Image from 'next/image'

const hostels = [
  {
    name: 'Best Place Hostel',
    price: '5,000',
    location: 'Unilorin',
    favorite: true,
    img: '/images/hostelImage.png',
  },
  {
    name: 'Best Place Hostel',
    price: '15,000',
    location: 'Unilorin',
    favorite: false,
    img: '/images/hostelImage.png',
  },
  {
    name: 'Best Place Hostel',
    price: '2,000',
    location: 'Unilorin',
    favorite: true,
    img: '/images/hostelImage.png',
  },

  {
    name: 'Best Place Hostel',
    price: '2,000',
    location: 'Unilorin',
    favorite: true,
    img: '/images/hostelImage.png',
  },
]

const Hostel = () => {
  return (
    <div className="flex items-center space-x-6 overflow-x-scroll py-4 hostelPanel">
      {hostels.slice(0, 3).map(({ name, location, img, price, favorite }) => {
        return (
          <div className="flex flex-col gap-y-6 p-4 min-w-[255px] w-[255px] bg-white rounded-3xl">
            <div className="relative h-[150px]">
              <Image
                src={img}
                alt="hostelimage"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between items-center ">
              <h5 className="text-Neutral-black">{name}</h5>
              <button
                className={`${
                  favorite ? 'text-Red-default' : 'text-Neutral-gray'
                } fill-current`}
              >
                <Heart />
              </button>
            </div>
            <div className="flex justify-start items-center gap-x-2.5">
              <Map />
              <p className="body1 text-Neutral-gray">{location}</p>
              <p className="small1 text-primary-Default">Show Map</p>
            </div>
            <div>
              <p className="subtitle1 text-Neutral-black">N{price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Hostel
