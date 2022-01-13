import Navigation from '../components/Navigation'
import LayoutLogin from '../components/LayoutLogin'
import { Check } from '../components/SVGIcons'
import Link from 'next/link'

const listings = [
  {
    listItem: 'Enter steet name and house number',
  },

  {
    listItem: 'Spell street name correctly',
  },
]

const hostelType = () => {
  return (
    <LayoutLogin>
      <div>
        <section class="login flex justify-center bg-[#F8F9FA]">
          <div
            class="login-container w-screen lg:w-[45%] h-screen bg-center bg-cover bg-no-repeat lg:flex flex-col justify-center items-center space-y-5"
            style={{ 'background-image': 'url(/images/Splash-bg.png)' }}
          >
            <Navigation />
            <div class="info py-10 space-y-4">
              <h1
                class="text-4xl lg:text-5xl font-semibold text-center xl:text-left lg:text-left text-white leading-tight xl:leading-snug
             lg:pl-16 xl:pl-20 lg:pr-32 xl:pr-60"
              >
                Type & Description
              </h1>

              <div class="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-32">
                The type of hostel you’re listing. Description is the catchy
                line after the name.
              </div>
            </div>

            <div class="form lg:hidden flex justify-center items-center">
              <form
                class="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Property
                </h2>

                <div class="select-containers space-y-5 mt-5">
                  <select
                    id="select"
                    class="w-full text-xs text-[#52575C] p-2 border bg-[#ffff0000] rounded-xl"
                    name="select"
                  >
                    <option value="text">Type</option>
                    <option value="text">Duplex</option>
                    <option value="text">Flat</option>
                    <option value="text">Hall</option>
                  </select>

                  <select
                    id="select"
                    class="w-full text-xs text-[#52575C] p-2 border bg-[#ffff0000] rounded-xl"
                    name="select"
                  >
                    <option value="text">No. of rooms</option>
                    <option value="text">1</option>
                    <option value="text">2</option>
                    <option value="text">3</option>
                  </select>
                </div>

                <div class="description mt-5">
                  <p class="text-xs text-[#A0AEC0] font-bold">
                    Write a catchy description for your hostel
                  </p>

                  <textarea
                    rows="5"
                    class="input w-full text-xs text-[#52575C] p-3 mt-3 border rounded-2xl flex justify-between items-center"
                    type="text"
                    placeholder="Write description"
                  />
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0] font-bold">
                    You can always change this later in the settings so feel
                    free.
                  </p>
                </div>

                <div class="continue mt-7">
                  <Link href="/hostelAmount">
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
                  Hostel address
                </h2>

                <input
                  class="input w-full text-xs text-[#52575C] p-3 mt-5 border rounded-2xl flex justify-between items-center"
                  type="text"
                  placeholder="5007 Moore Motorway"
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
                    It's important that it's correct so our customers can easily
                    find your property.
                  </p>
                </div>

                <div class="continue mt-7">
                  <Link href="/hostelAmount">
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

export default hostelType
