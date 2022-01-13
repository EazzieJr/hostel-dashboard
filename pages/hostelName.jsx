import Navigation from '../components/Navigation'
import { Check } from '../components/SVGIcons'

import LayoutLogin from '../components/LayoutLogin'
import Link from 'next/link'

const listings = [
  {
    listItem: 'Keep it short and catchy',
  },

  {
    listItem: 'Be specific',
  },

  {
    listItem: 'Avoid abbreviations',
  },
]

const hostelName = () => {
  return (
    <LayoutLogin>
      <div>
        <section class="login flex justify-center bg-[#F8F9FA]">
          <div
            class="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex lg:flex-col justify-center items-center space-y-5"
            style={{ 'background-image': 'url(/images/Splash-bg.png)' }}
          >
            <Navigation />
            <div class="info py-10 space-y-4">
              <h1 class="text-4xl lg:text-5xl font-semibold text-center lg:text-left text-white leading-tight xl:leading-normal lg:pl-16 xl:px-20">
                What's the name of your hostel?
              </h1>

              <div class="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-32">
                This is the name that will appear as the title of your listing
                on our site.
              </div>
            </div>

            <div class="form flex lg:hidden justify-center items-center">
              <form
                class="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Hostel name
                </h2>

                <input
                  class="input w-full text-xs text-[#52575C] p-3 mt-5 border rounded-2xl flex justify-between items-center"
                  type="text"
                  placeholder="Cedric Weimann"
                />

                <p class="tips text-xs my-5 font-medium">Tips</p>

                <div class="details space-y-5 mt-8">
                  {listings.map(listing => (
                    <div class="flex items-center space-x-3">
                      <Check />

                      <p class="id text-left text-xs text-[#52575C] font-medium ml-1">
                        {listing.listItem}
                      </p>
                    </div>
                  ))}
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0]">
                    By continuing, you agree to let Booking.com email you
                    regarding your property registration.
                  </p>
                </div>

                <div class="continue mt-5">
                  <Link href="/hostelLocation">
                    <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Continue
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div class="right-container lg:w-[55%] hidden lg:flex justify-center items-center">
            <div class="form hidden lg:flex justify-center items-center">
              <form
                class="w-80 lg:w-[400px] p-8 xl:p-10 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Hostel name
                </h2>

                <input
                  class="input w-full text-xs text-[#52575C] p-3 mt-5 border rounded-2xl flex justify-between items-center"
                  type="text"
                  placeholder="Cedric Weimann"
                />

                <p class="tips text-xs my-5 font-medium">Tips</p>

                <div class="details space-y-5 mt-8">
                  {listings.map(listing => (
                    <div class="flex items-center space-x-3">
                      <Check />

                      <p class="id text-left text-xs text-[#52575C] font-medium ml-1">
                        {listing.listItem}
                      </p>
                    </div>
                  ))}
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0]">
                    By continuing, you agree to let Booking.com email you
                    regarding your property registration.
                  </p>
                </div>

                <div class="continue mt-7">
                  <Link href="/hostelLocation">
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

export default hostelName
