import React from 'react'
import Head from 'next/head'

import OverviewDashboard from '../components/page-components/OverviewDashboard.jsx'
import Layout from '../components/layout/index'

const Overview = () => (
  <div>
    <Head>
      <title>Overview | Hostel</title>
    </Head>

    <Layout>
      <OverviewDashboard />
    </Layout>
  </div>
)

export default Overview
