import Link from 'next/link'

const accountTypes = [
  {
    name: 'Student',
  },

  {
    name: 'Client',
  },

  {
    name: 'Admin',
  },
]

const AccountTypeComp = () => {
  return (
    <div>
      <section className="login flex justify-center bg-[#F8F9FA]">
        <div
          className="login-container w-screen lg:w-2/5 h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat space-y-5"
          style={{ backgroundImage: 'url(/images/Splash-bg.png)' }}
        >
          <form
            className="w-80 lg:w-[400px] sm:w-96 lg:hidden px-8 py-8 bg-white rounded-2xl shadow-xl"
            action=""
          >
            <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
              Choose account type
            </h2>

            <div className="account-types space-y-5 mt-7">
              {accountTypes.map(accountType => {
                return (
                  <Link href="/login">
                    <a>
                      <div>
                        <div className="w-full input-for-account-type p-3 border rounded-2xl flex justify-between items-center">
                          <p className="input-name text-sm text-[#52575C]">
                            {accountType.name}
                          </p>

                          <input id="radio" type="radio" name="decision" />
                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })}
            </div>

            <div className="already-have-an-account mt-5">
              <p className="text-xs text-[#A0AEC0]">
                Already have an account?
                <Link href="/login">
                  <a className="text-[#03A86B] font-medium">Login</a>
                </Link>
              </p>
            </div>
          </form>

          <div className="splash-container hidden lg:flex flex-col justify-center items-center text-center space-y-5 md:space-y-7">
            <img className="w-24 xl:w-32" src="/svg/logo.svg" alt="" />

            <p className="hostel text-4xl xl:text-5xl font-bold font-mono text-white text-center">
              Hostels
            </p>
          </div>
        </div>

        <div className="right-container lg:w-3/5 hidden lg:flex justify-center items-center">
          <form
            className="w-80 lg:w-[400px] p-8 xl:p-10 bg-white rounded-2xl shadow-xl"
            action=""
          >
            <h2 className="header font-sans font-bold text-[#2D3748] text-left text-xl lg:text-lg">
              Choose account type
            </h2>

            <div className="account-types space-y-5 mt-7">
              {accountTypes.map(accountType => {
                return (
                  <div>
                    <div className="w-full input-for-account-type p-3 border rounded-2xl flex justify-between items-center">
                      <p className="input-name text-sm text-[#52575C]">
                        {accountType.name}
                      </p>

                      <input id="radio" type="radio" name="decision" />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="already-have-an-account mt-5">
              <p className="text-xs text-[#A0AEC0]">
                Already have an account?
                <Link href="/login">
                  <a>
                    <p className="text-[#03A86B] font-medium">Login</p>
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AccountTypeComp
