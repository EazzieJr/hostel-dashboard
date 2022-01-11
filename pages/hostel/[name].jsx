import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/index'
import { ArrowLeft, MapOutline, Star } from '../../components/SVGIcons'

const Hostel = () => {
  const { query } = useRouter()
  return (
    <Layout>
      <Head>
        <title>{query.name} | Hostel</title>
      </Head>

      <nav className="flex items-center space-x-3">
        <button className="btn p-0 bg-primary-Default text-white h-10 w-10 flex items-center justify-center rounded-full">
          <ArrowLeft />
        </button>
        <h3 className="text-primary-Default">Favorites</h3>
      </nav>

      <div className="mt-7 flex items-center justify-between">
        <div>
          <h3>{query.name}</h3>
          <p className="body1 flex items-center space-x-3 my-3 text-Neutral-gray ">
            <MapOutline />
            <span> 819 Boyd Garden Nebraska Pitcairn Islands </span>
          </p>
        </div>

        <div>
          <h4 className="text-right">130K</h4>
          <button className="btn ml-0 mt-3 py-2 px-7 text-sm rounded-xl">
            Book Now
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex space-x-8 my-10">
        <div className="w-7/12">
          {/* picture gallery */}
          <div>
            <div className="w-fill h-[333px] relative rounded-[32px] overflow-hidden">
              <Image
                src="/images/unsplash_iqeG5xA96M4.png"
                layout="fill"
                objectFit="cover"
                alt="wowo"
              />
            </div>

            <div className="flex items-center overflow-x-scroll mt-4 space-x-4 hostelPanel">
              <div className="min-w-[160px] h-[137px] relative">
                <Image
                  src="/images/unsplash_eDMQgYbKhiU.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wowo"
                />
              </div>
              <div className="min-w-[160px] h-[137px] relative">
                <Image
                  src="/images/unsplash_koH7IVuwRLw.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wowo"
                />
              </div>
              <div className="min-w-[160px] h-[137px] relative">
                <Image
                  src="/images/unsplash_jj3PpeBIlLA.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wowo"
                />
              </div>
              <div className="min-w-[160px] h-[137px] relative">
                <Image
                  src="/images/unsplash_koH7IVuwRLw.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wowo"
                />
              </div>
            </div>
          </div>

          {/* Hostel Info */}
          <div>
            <p className="subtitle1 mt-6">Feature Highlights</p>

            {/* info */}
            <div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 my-4">
                <HostelFeatures label="Wardrobe" />
                <HostelFeatures label="Free Wifi" />
                <HostelFeatures label="24hr Water Supply" />
                <HostelFeatures label="Common Room" />
                <HostelFeatures label="Stable Electricity" />
                <HostelFeatures label="Quiet Environment" />
              </div>

              <button className="subtitle1 text-primary-Default">
                See all reviews
              </button>
            </div>
          </div>
        </div>

        <aside className="w-5/12">
          {/* map */}
          <div className="relative rounded-[32px] h-[248px] overflow-hidden">
            <div className="w-full bg-gray-200 "></div>
            <div className="absolute top-0 bg-black bg-opacity-60 h-full w-full flex items-center justify-center flex-col">
              <button className="btn rounded-full">See on map</button>
            </div>
          </div>

          {/* rating */}
          <div className="flex items-center space-x-2 mt-6">
            <i className="fill-current text-yellow-Dark">
              <Star />
            </i>
            <i className="fill-current text-yellow-Dark">
              <Star />
            </i>
            <i className="fill-current text-yellow-Dark">
              <Star />
            </i>
            <i className="fill-current text-yellow-Dark">
              <Star />
            </i>
            <i className="fill-current text-Neutral-gray">
              <Star />
            </i>
          </div>

          {/* About */}
          <div className="mt-9">
            <p className="subtitle1">About</p>
            <p className="body1 mt-2">
              This is the hostel caption, it is fully customizable and any
              hostel owner can set this to whatever they want
            </p>
          </div>

          {/* Reviews */}
          <div className="mt-9">
            <p className="subtitle1">Reviews</p>
            <div className="space-y-5">
              <Reviews review="Best customer service!" date="December 2020" />
              <Reviews
                review="The hostel is super easy to access!"
                date="November 2020"
              />
            </div>
          </div>

          <button className="subtitle1 text-primary-Default mt-2">
            See all reviews
          </button>
        </aside>
      </div>
    </Layout>
  )
}

const HostelFeatures = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-2.5 h-2.5 rounded-full bg-primary-Default"></div>
      <p className="body2">{label}</p>
    </div>
  )
}

const Reviews = ({ review, date }) => {
  return (
    <div>
      <p className="body1 mt-2">"{review}"</p>
      <p className="small1 text-Neutral-gray mt-1">{date}</p>
    </div>
  )
}

export default Hostel
