import React from 'react'
import Head from 'next/head'

import NotificationDashboard from '../components/page-components/NotificationDashboard'
import Layout from '../components/layout/index'

const Notification = () => (
  <div>
    <Head>
      <title>Notification | Hostel</title>
    </Head>

    <Layout>
      <NotificationDashboard/>
    </Layout>
  </div>
)

export default Notification
