import Navigation from '../components/Navigation'
import LayoutLogin from '../components/LayoutLogin'
import Link from 'next/link'
import { Check } from '../components/SVGIcons'

const listings = [
  {
    listItem: 'Listing is totally free',
  },

  {
    listItem: '24/7 costomer support',
  },

  {
    listItem: 'Set rules on property',
  },
]

const registerClients = () => {
  return (
    <LayoutLogin>
      <div>
        <section class="login flex justify-center bg-[#F8F9FA]">
          <div
            class="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex flex-col justify-center space-y-5"
            style={{ 'background-image': 'url(/images/Splash-bg.png)' }}
          >
            <Navigation />
            <div class="info py-10 space-y-4">
              <h1 class="text-4xl lg:hidden font-semibold text-center lg:text-left text-white leading-tight lg:px-10">
                Hello, list your property on Hostel.com
              </h1>

              <h1 class="text-4xl xl:text-5xl hidden lg:block font-semibold text-center lg:text-left text-white leading-tight lg:pl-16 xl:px-20 xl:leading-snug">
                Hello, <br />
                list your property on Hostel.com
              </h1>

              <div class="deats text-lg text-white font-semibold lg:text-left text-center px-16 xl:px-20">
                Registration can take as little as 15 minutes to complete – get
                started today
              </div>
            </div>

            <div class="form flex lg:hidden justify-center items-center">
              <form
                class="w-80 sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Create new listing
                </h2>

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

                <div class="mt-7">
                  <Link href="/registerClients">
                    <a class="register-btn px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Get Started
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div class="right-container lg:w-[55%] hidden lg:flex justify-center items-center">
            <div class="form hidden lg:flex justify-center items-center">
              <form
                class="w-80 lg:w-[350px] p-8 xl:p-10 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Create new listing
                </h2>

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

                <div class="mt-7">
                  <Link href="/hostelName">
                    <a class="register-btn px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Get Started
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

export default registerClients
