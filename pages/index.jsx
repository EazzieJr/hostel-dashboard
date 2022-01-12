import { LogoWhite } from '../components/SVGIcons'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <div>
      <div>
        <section
          class="splash w-screen h-screen flex justify-center items-center text-center bg-center bg-cover lg:bg-cover bg-no-repeat"
          style={{ 'backgroundImage': 'url(/images/Splash-bg.png)' }}
        >
          <div class="splash-container flex flex-col justify-center items-center text-center space-y-5 md:space-y-7 xl:space-y-10">
            <LogoWhite />

            <p class="hostel text-4xl xl:text-5xl font-bold font-mono text-white text-center">
              Hostels
            </p>

            <Link href="/accountType">
              <a class="text-sm text-[#03A86B] hover:text-white font-medium py-2.5 md:py-3 xl:py-4 px-7 md:px-10 xl:px-14 bg-white hover:bg-[#03A86B] transition duration-700 rounded-full">
                Get started
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default IndexPage
