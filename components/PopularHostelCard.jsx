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

const PopularHostelCard = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {hostels.slice(0, 4).map(({ name, location, img, price, favorite }, index) => {
        return (
          <div key= {index} className="flex gap-y-6 p-4 min-w-[350px] bg-white rounded-3xl space-x-4">
            <div className="relative min-w-[80px] min-h-[80px] rounded-xl overflow-hidden">
              <Image
                src={img}
                alt="hostelimage"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-Neutral-black subtitle1">{name}</p>
                <button
                  className={`${
                    favorite ? 'text-Red-default' : 'text-Neutral-gray'
                  } fill-current`}
                >
                  <Heart />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <i>
                  <Map />
                </i>
                <div className="flex items-center justify-between w-full">
                  <div className="gap-y-2.5">
                    <p className="body1 text-Neutral-gray">{location}</p>
                    <p className="small1 text-primary-Default">Show on Map</p>
                  </div>
                </div>

                <p className="subtitle1 text-Neutral-black">N{price}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PopularHostelCard
