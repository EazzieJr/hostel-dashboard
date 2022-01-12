import { useState } from "react"
import { Apple, Facebook, Google } from "./SVGIcons"

const inputs= [
        {
          name: 'Email',
          placeHolder: 'Your email address',
          type: 'email',
        },

        {
          name: 'Password',
          placeHolder: 'Your password',
          type: 'password',
        },
      ],

const LoginWith = () => {
  const [remembered, setRemembered] = useState(false)

  const toggle = () => {
      const control = document.querySelector('.control, .control-big')
      const rememberBtn = document.querySelector('.remember-me-button')

      if (remembered) {
        control.classList.add('move')
        rememberBtn.classList.add('invert-color')
        setRemembered(true)
      } else {
        control.classList.remove('move')
        rememberBtn.classList.remove('invert-color')
        setRemembered(false)
      }
    }
  
  return (
    <div>
  <section class="login flex justify-center bg-[#F8F9FA]">
    <div
      class="login-container w-screen lg:w-2/5 h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat space-y-5"
      style="background-image: url(/images/Splash-bg.png)"
    >
      <form
        class="w-80 lg:w-[400px] sm:w-96 lg:hidden px-8 py-8 bg-white rounded-2xl shadow-xl"
        action=""
      >
        <h2
          class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg"
        >
          Login with
        </h2>

        <div class="social-medias-container flex space-x-5 mt-5">
          <button
            class="social-media p-4 border rounded-xl"
          >
            <Facebook />
          </button>
        </div>

        <p class="or text-base text-[#A0AEC0] font-bold my-7">or</p>

        <div class="details space-y-5">
          <div>
            <p
              class="id text-left text-xs text-[#52575C] font-medium mb-2 ml-1"
            >
              Email
            </p>

            <input
              class="input w-full text-xs text-[#52575C] p-3 border rounded-2xl flex justify-between items-center"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <p
              class="id text-left text-xs text-[#52575C] font-medium mb-2 ml-1"
            >
              Password
            </p>

            <input
              class="input w-full text-xs text-[#52575C] p-3 border rounded-2xl flex justify-between items-center"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
        </div>

        <div class="remember-me my-5 flex items-center space-x-3">
          <div
            class="remember-me-button w-10 p-[3px] bg-gray-300 rounded-full focus:outline-none transition duration-500"
            onClick={toggle}
          >
            <div
              class="control w-4 h-4 rounded-full bg-white transition duration-500"
            ></div>
          </div>

          <p class="remember-me text-xs font-medium" onClick={toggle}>
            Remember me
          </p>
        </div>

        <button
          class="register-btn px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg"
        >
          Login
        </button>

        <div class="already-have-an-account mt-5">
          <p class="text-xs text-[#A0AEC0]">
            Don't have an account?
            <nuxt-link to="/register" class="text-[#03A86B] font-medium"
              >Register</nuxt-link
            >
          </p>
        </div>
      </form>

      <div
        class="splash-container hidden lg:flex flex-col justify-center items-center text-center space-y-5 md:space-y-7"
      >
        <img class="w-24 xl:w-32" src="/svg/logo.svg" alt="" />

        <p
          class="hostel text-4xl xl:text-5xl font-bold font-mono text-white text-center"
        >
          Hostels
        </p>
      </div>
    </div>

    <div
      class="right-container lg:w-3/5 hidden lg:flex justify-center items-center"
    >
      <form
        class="w-80 lg:w-[400px] sm:w-96 px-8 py-8 bg-white rounded-2xl shadow-xl"
        action=""
      >
        <h2
          class="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg"
        >
          Login with
        </h2>

        <div class="social-medias-container flex space-x-5 mt-5">
          <button
            class="social-media p-4 border rounded-xl"
          >
            <Facebook />
          </button>
        </div>

        <p class="or text-base text-[#A0AEC0] font-bold my-7">or</p>

        <div class="details space-y-5">
          <div>
            <p
              class="id text-left text-xs text-[#52575C] font-medium mb-2 ml-1"
            >
              Email
            </p>

            <input
              class="input w-full text-xs text-[#52575C] p-3 border rounded-2xl flex justify-between items-center"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <p
              class="id text-left text-xs text-[#52575C] font-medium mb-2 ml-1"
            >
              Password
            </p>

            <input
              class="input w-full text-xs text-[#52575C] p-3 border rounded-2xl flex justify-between items-center"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
        </div>

        <div class="remember-me my-5 flex items-center space-x-3">
          <div
            class="remember-me-button w-10 p-[3px] bg-gray-300 rounded-full focus:outline-none transition duration-500" onClick={toggle}
          >
            <div
              class="control-big w-4 h-4 rounded-full bg-white transition duration-500"
            ></div>
          </div>

          <p class="remember-me text-xs font-medium" onClick={toggle}>
            Remember me
          </p>
        </div>

        <button
          class="register-btn px-7 py-2.5 text-white text-xs font-medium bg-[#03A86B] rounded-lg"
        >
          Login
        </button>

        <div class="already-have-an-account mt-5">
          <p class="text-xs text-[#A0AEC0]">
            Don't have an account?
            <nuxt-link to="/register" class="text-[#03A86B] font-medium"
              >Register</nuxt-link
            >
          </p>
        </div>
      </form>
    </div>
  </section>
</div>
  )
}

export default LoginWith
