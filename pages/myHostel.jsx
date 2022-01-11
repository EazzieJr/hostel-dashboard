import React from 'react'
import Head from 'next/head'

import MyHostelDashboard from '../components/page-components/MyHostelDashboard.jsx'
import Layout from '../components/layout/index'

const MyHostel = () => (
  <div>
    <Head>
      <title>My Hostel | Hostel</title>
    </Head>

    <Layout>
      <MyHostelDashboard />
    </Layout>
  </div>
)

export default MyHostel
