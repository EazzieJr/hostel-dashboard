import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

import Navigation from '../components/Navigation'
import LayoutLogin from '../components/LayoutLogin'
import Link from 'next/link'

const fileTypes = ['JPG', 'PNG', 'GIF']

const hostelPhotos = () => {
  const [file, setFile] = useState(null)
  const handleChange = file => {
    setFile(file)
  }
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
              <h1 class="text-4xl lg:text-5xl font-semibold text-center lg:text-left text-white leading-tight xl:leading-snug lg:px-16 xl:px-20">
                What does your hostel look like?
              </h1>

              <div class="deats text-white font-semibold text-center lg:text-left px-10 lg:px-16 xl:px-20 xl:pr-40">
                Add at least one photo, you can always come to add more later.
              </div>
            </div>

            <div class="form lg:hidden flex justify-center items-center">
              <form
                class="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
                action=""
              >
                <h2 class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
                  Photos
                </h2>
                <div class="div w-full h-40 border mt-7 rounded-2xl">
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    label="Drag and drop your files here"
                    hoverTitle="Drop your files here"
                    classes="file-drop"
                  />
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0] font-bold">or</p>
                </div>
                <div class="continue mt-7">
                  <Link href="/hostelPhotos">
                    <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Upload Photos
                    </a>
                  </Link>
                </div>
                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0] font-bold">
                    You can just use a smartphone or a digital camera here to
                    get the job done.
                  </p>
                </div>
                <div class="continue mt-7">
                  <Link href="/hostelVerification">
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
                  Photos
                </h2>

                <div class="div w-full h-40 mt-7 rounded-2xl">
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    label="Drag and drop your files here"
                    hoverTitle="Drop your files here"
                    classes="file-drop"
                  />
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0] font-bold">or</p>
                </div>

                <div class="continue mt-7">
                  <Link href="/hostelPhotos">
                    <a class="px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg">
                      Upload Photos
                    </a>
                  </Link>
                </div>

                <div class="terms mt-7">
                  <p class="text-xs text-[#A0AEC0] font-bold">
                    You can just use a smartphone or a digital camera here to
                    get the job done.
                  </p>
                </div>

                <div class="continue mt-7">
                  <Link href="/hostelVerification">
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

export default hostelPhotos