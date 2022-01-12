import Link from 'next/link'

import LayoutLogin from '../components/LayoutLogin'
import Navigation from '../components/Navigation'

const HostelAmount = () => {
  return (
    <LayoutLogin>
      <section className="login flex justify-center bg-[#F8F9FA]">
        <div
          className="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex flex-col justify-center items-center space-y-5"
          style={{ 'backgroundImage': 'url(/images/Splash-bg.png)' }}
        >
          <Navigation />
          <div className="info py-10 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left text-white leading-tight xl:leading-snug lg:px-16 xl:px-20">
              How much do you want to charge?
            </h1>

            <div className="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-32">
              The price you would want our customers to book your hostel per
              room or apartment.
            </div>
          </div>

          <div className="form lg:hidden flex justify-center items-center">
            <form
              className="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
              action=""
            >
              <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                Price
              </h2>

              <div className="pricing w-full p-3 mt-5 flex justify-between items-center border rounded-2xl">
                <img src="/svg/naira.svg" alt="" />

                <input
                  className="input w-48 px-3 text-xs text-[#52575C] flex justify-between items-center"
                  type="text"
                  placeholder="130,000"
                />

                <img src="/svg/pen.svg" alt="" />
              </div>

              <div className="terms mt-7">
                <p className="text-xs text-[#A0AEC0] font-bold">
                  You can always change this later in the settings so feel free.
                </p>
              </div>

              <div className="continue mt-7">
                <Link href="/hostelPhotos">
                  <a className="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                    Continue
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="right-container lg:w-[55%] hidden lg:flex justify-center items-center">
          <div className="form hidden lg:flex justify-center items-center">
            <form
              className="w-80 lg:w-[400px] p-8 xl:p-10 bg-white rounded-2xl shadow-xl"
              action=""
            >
              <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                Price
              </h2>

              <div className="pricing w-full p-3 mt-5 flex justify-between items-center border rounded-2xl">
                <img src="/svg/naira.svg" alt="" />

                <input
                  className="input w-48 px-3 text-xs text-[#52575C] flex justify-between items-center"
                  type="text"
                  placeholder="130,000"
                />

                <img src="/svg/pen.svg" alt="" />
              </div>

              <div className="terms mt-7">
                <p className="text-xs text-[#A0AEC0] font-bold">
                  You can always change this later in the settings so feel free.
                </p>
              </div>

              <div className="continue mt-7">
                <Link href="/hostelPhotos">
                  <a className="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
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
