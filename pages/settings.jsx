import React from 'react'
import Head from 'next/head'
import SettingDashboard from '../components/page-components/SettingDashboard'

import Layout from '../components/layout/index'

const Settings = () => {
  return(
    <div>
      <Head>
        <title>Settings | Hostel</title>
      </Head>

      <Layout>
        <SettingDashboard/>
      </Layout>
    </div>
  )
}

export default Settings
