import { Search } from '../SVGIcons'
import RatedHostelCard from '../Hostels'

const FavouritesDashboard = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <h3 className="text-primary-Default">Favorites</h3>

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

            {/* button */}
          </div>
          <button className="btn">Search</button>
        </div>
      </nav>

      {/* This month */}
      <div className="my-8 space-y-4 overflow-x-hidden">
        <h5>This month</h5>

        {/* Rated hostels panel */}
        <RatedHostelCard />
      </div>

      {/* Ealier */}
      <div className="my-8 space-y-4 overflow-x-hidden">
        <h5>Earlier</h5>

        {/* Rated hostels panel */}
        <RatedHostelCard />
      </div>
    </div>
  )
}

export default FavouritesDashboard
