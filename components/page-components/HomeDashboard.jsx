import { Search, ArrowDown, MapOutline } from '../SVGIcons'
import RatedHostelCard from '../Hostels'
import PopularHostelCard from '../PopularHostelCard.jsx'

const HomeDashboard = () => {
  return (
    <div className="flex space-x-[30px]">
      {/* Main section */}
      <section className="w-8/12">
        {/* Banner */}
        <div className="bg-banner rounded-[32px] px-[30px] space-y-8 py-[32px]">
          <h4 className="text-white">
            Stay with us, and feel like home. Stay you🙂
          </h4>

          {/* Search  panel*/}
          <div className="flex items-center">
            {/* search box */}
            <div className="flex bg-white px-5 py-3.5 rounded-[16px] space-x-4 w-[340px]">
              <Search />
              <input
                type="text"
                name="search"
                placeholder="Search hostels"
                className="bg-transparent focus:outline-none text-Neutral-Dark w-full body1"
              />
            </div>

            {/* Dropdown */}
            <div className="flex bg-white px-5 py-3.5 rounded-[16px] space-x-4 ml-2 w-[190px]">
              <MapOutline />
              <p className="focus:outline-none text-Neutral-Dark body1">
                Unilorin
              </p>
            </div>

            {/* button */}
            <button className="btn">Search</button>
          </div>
        </div>

        {/* Most Rated Hostels */}
        <div className="my-8 space-y-4 overflow-x-hidden">
          <div className="flex items-center justify-between">
            <h5>Most Rated Hostels</h5>
            <button className="text-primary-Default body2">View all</button>
          </div>

          {/* Rated hostels panel */}
          <RatedHostelCard />
        </div>

        {/* Popular Hostels panel */}
        <div className="my-8 space-y-4">
          <div className="flex items-center justify-between">
            <h5>Popular Hostels</h5>
            <button className="text-primary-Default body2">View all</button>
          </div>

          {/* Rated hostels panel */}
          <PopularHostelCard />
        </div>
      </section>

      {/* Aside secction */}
      <aside className="w-4/12">rr</aside>
    </div>
  )
}

export default HomeDashboard
