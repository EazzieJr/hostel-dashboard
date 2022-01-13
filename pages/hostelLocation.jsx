import Link from 'next/link'
import Navigation from '../components/Navigation'
import { Check } from '../components/SVGIcons'

import LayoutLogin from '../components/LayoutLogin'

const listings = [
  {
    listItem: 'Enter steet name and house number',
  },

  {
    listItem: 'Spell street name correctly',
  },
]

const HostelAmount = () => {
  return (
    <LayoutLogin>
      <div>
        <section className="login flex justify-center`bg-[#F8F9FA]">
          <div
            className="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex flex-col justify-center items-center space-y-5"
            style={{ 'background-image': 'url(/images/Splash-bg.png)' }}
          >
            <Navigation />
            <div className="info py-10 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left text-white leading-tight lg:leading-snug lg:pl-16 xl:px-20">
                Where’s your hostel located?
              </h1>

              <div className="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-32">
                Once a customer books your hostel, this is the address that will
                be shared with them.
              </div>
            </div>

            <div className="form lg:hidden flex justify-center items-center">
              <form
                className="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Hostel address
                </h2>

                <input
                  className="input w-full text-xs text-[#52575C] p-3 mt-5 border rounded-2xl flex justify-between items-center"
                  type="text"
                  placeholder="5007 Moore Motorway"
                />

                <p className="tips text-xs my-5 font-medium">Tips</p>

                <div className="details space-y-5 mt-8">
                  {listings.map(listing => (
                    <div className="flex items-center space-x-3">
                      <Check />

                      <p className="id text-left text-xs text-[#52575C] font-medium ml-1">
                        {listing.listItem}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="terms mt-7">
                  <p className="text-xs text-[#A0AEC0]">
                    It's important that it's correct so our customers can easily
                    find your property.
                  </p>
                </div>

                <div className="continue mt-5">
                  <Link href="/hostelType">
                    <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Continue
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="right-container hidden lg:w-[55%] lg:flex justify-center items-center">
            <div className="form flex justify-center items-center">
              <form
                className="w-80 lg:w-[400px] p-8 xl:p-10 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Hostel address
                </h2>

                <input
                  className="input w-full text-xs text-[#52575C] p-3 mt-5 border rounded-2xl flex justify-between items-center"
                  type="text"
                  placeholder="5007 Moore Motorway"
                />

                <p className="tips text-xs my-5 font-medium">Tips</p>

                <div className="details space-y-5 mt-8">
                  {listings.map(listing => (
                    <div className="flex items-center space-x-3">
                      <Check />

                      <p className="id text-left text-xs text-[#52575C] font-medium ml-1">
                        {listing.listItem}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="terms mt-7">
                  <p className="text-xs text-[#A0AEC0]">
                    It's important that it's correct so our customers can easily
                    find your property.
                  </p>
                </div>

                <div className="continue mt-5">
                  <Link href="/hostelType">
                    <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Continue
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </LayoutLogin>
  )
}

export default HostelAmount
