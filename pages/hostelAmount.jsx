import Link from 'next/link'

import LayoutLogin from '../components/LayoutLogin'
import Navigation from '../components/Navigation'

const HostelAmount = () => {
  return (
    <LayoutLogin>
      <section class="login flex justify-center bg-[#F8F9FA]">
        <div
          class="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex flex-col justify-center items-center space-y-5"
          style={{ 'background-image': 'url(/images/Splash-bg.png)' }}
        >
          <Navigation />
          <div class="info py-10 space-y-4">
            <h1 class="text-4xl lg:text-5xl font-semibold text-center lg:text-left text-white leading-tight xl:leading-snug lg:px-16 xl:px-20">
              How much do you want to charge?
            </h1>

            <div class="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-32">
              The price you would want our customers to book your hostel per
              room or apartment.
            </div>
          </div>

          <div class="form lg:hidden flex justify-center items-center">
            <form
              class="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
              action=""
            >
              <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                Price
              </h2>

              <div class="pricing w-full p-3 mt-5 flex justify-between items-center border rounded-2xl">
                <img src="/svg/naira.svg" alt="" />

                <input
                  class="input w-48 px-3 text-xs text-[#52575C] flex justify-between items-center"
                  type="text"
                  placeholder="130,000"
                />

                <img src="/svg/pen.svg" alt="" />
              </div>

              <div class="terms mt-7">
                <p class="text-xs text-[#A0AEC0] font-bold">
                  You can always change this later in the settings so feel free.
                </p>
              </div>

              <div class="continue mt-7">
                <Link href="/hostelPhotos">
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
                Price
              </h2>

              <div class="pricing w-full p-3 mt-5 flex justify-between items-center border rounded-2xl">
                <img src="/svg/naira.svg" alt="" />

                <input
                  class="input w-48 px-3 text-xs text-[#52575C] flex justify-between items-center"
                  type="text"
                  placeholder="130,000"
                />

                <img src="/svg/pen.svg" alt="" />
              </div>

              <div class="terms mt-7">
                <p class="text-xs text-[#A0AEC0] font-bold">
                  You can always change this later in the settings so feel free.
                </p>
              </div>

              <div class="continue mt-7">
                <Link href="/hostelPhotos">
                  <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                    Continue
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayoutLogin>
  )
}

export default HostelAmount
