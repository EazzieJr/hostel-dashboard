const SettingDashboard= () =>{
    return(
      <div>
        <h3 className='text-primary-Default'>Settings</h3>
        <h5 className='py-4'>Security</h5>
        <p className='body2 pb-4 text-Neutral-gray'>Adjust your security settings and protect your account.</p>
        <div className='flex flex-col gap-y-4 py-2'>
          <div className='rounded-xl bg-primary-Lightest px-4 py-5 flex justify-between items-center'>
            <h6 className='basis-1/5'>Password</h6>
            <div className='basis-3/5'>
              <p className='body2'>To change your your password, we need to send a resent link to your email address.</p>
              <p>You can reset your password regularly to keep your account secure.</p>
            </div>
            <button className="btn bg-primary-Dark px-2 py-2 rounded-lg w-w-1/10">Send email</button>
          </div>

          <div className='rounded-xl bg-primary-Lightest px-4 py-5 flex justify-between items-center'>
            <h6 className='basis-1/5'>Two-factor authentication</h6>
            <div className='basis-3/5'>
              <p className='body2'>Add a recovery phone number to set up two-factor authentication.</p> 
              <p>Add an extra layer of security to your account.</p>
            </div>
            <button className="btn bg-primary-Dark px-2 py-2 rounded-lg w-w-1/10">Set up</button>
          </div>
          
          <div className='rounded-xl px-4 py-5 flex justify-between items-center b'>
            <h6 className="basis-1/5">Delete Account</h6>
            <div className='basis-3/5'>
              <p className='body2'>Permanently delete your hotels account.</p>
              <p>This action cant be reversed.</p>
            </div>
            <button className="btn bg-Red-default px-2 py-2 rounded-lg w-w-1/10">Delete Account</button>
          </div>
        </div>

        <h5 className='py-2'>Preference</h5>
        <p className='body2 text-Neutral-gray'>Adjust your security settings and protect your account.</p>
      </div>
    )
}

export default SettingDashboard