const SettingDashboard = () => {
  return (
    <div>
      <h3 className="text-primary-Default">Settings</h3>
      <h5 className="py-4">Security</h5>
      <p className="body2 pb-4 text-Neutral-gray">
        Adjust your security settings and protect your account.
      </p>
      <div className="flex flex-col gap-y-4 py-2">
        <div className="rounded-xl bg-primary-Lightest px-10 sm:px-5 lg:px-4 py-5 space-y-4 lg:space-y-0 flex flex-col sm:flex-row justify-between items-center text-Neutral-black">
          <h6 className="basis-1/5 text-base font-medium">Password</h6>
          <div className="basis-3/5">
            <p className="body2 text-center lg:text-left">
              To change your your password, we need to send a resent link to
              your email address. You can reset your password regularly to keep
              your account secure.
            </p>
          </div>
          <button className="btn bg-primary-Dark p-2 rounded-lg lg:w-[12%] text-white">
            Send email
          </button>
        </div>

        <div className="rounded-xl bg-primary-Lightest px-10 sm:px-5 lg:px-4 py-5 flex flex-col sm:flex-row space-y-4 lg:space-y-0 justify-between items-center text-Neutral-black">
          <h6 className="basis-1/5 text-base font-medium">
            Two-factor authentication
          </h6>
          <div className="basis-3/5">
            <p className="body2 text-center lg:text-left">
              Add a recovery phone number to set up two-factor
              authentication.Add an extra layer of security to your account.
            </p>
          </div>
          <button className="btn bg-primary-Dark p-2 rounded-lg lg:w-[12%] text-white">
            Set up
          </button>
        </div>

        <div className="rounded-xl px-10 sm:px-5 lg:px-4 py-5 flex flex-col sm:flex-row space-y-4 lg:space-y-0 justify-between items-center text-Neutral-black">
          <h6 className="basis-1/5 text-base font-medium">Delete Account</h6>

          <div className="basis-3/5">
            <p className="body2 text-center lg:text-left">
              Permanently delete your hotels account. This action cant be
              reversed.
            </p>
          </div>

          <button className="btn bg-Red-default p-2 rounded-lg lg:w-[12%] text-white">
            Delete Account
          </button>
        </div>
      </div>

      <h5 className="py-2">Preference</h5>
      <p className="body2 text-Neutral-gray">
        Adjust your security settings and protect your account.
      </p>
    </div>
  )
}

export default SettingDashboard
