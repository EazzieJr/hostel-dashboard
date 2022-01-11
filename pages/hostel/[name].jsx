import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/index'
import { MapOutline } from '../../components/SVGIcons'

const Hostel = () => {
  const { query } = useRouter()
  return (
    <Layout>
      <Head>
        <title>{query.name} | Hostel</title>
      </Head>

      <nav className="flex items-center space-x-3">
        <button className="bg-primary-Default text-white p-4 rounded-full"></button>
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

              <button className='subtitle1 text-primary-Default'>See all reviews</button>
            </div>
          </div>
        </div>

        <aside className="w-5/12">icijd</aside>
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

export default Hostel
