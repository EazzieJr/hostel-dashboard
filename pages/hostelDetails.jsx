import React from 'react'
import Head from 'next/head'

import HostelDetailsDashboard from '../components/page-components/HostelDetailsDashboard.jsx'
import Layout from '../components/layout/index'

const HostelDetails = () => (
  <div>
    <Head>
      <title>Hostel Details | Hostel</title>
    </Head>

    <Layout>
      <HostelDetailsDashboard />
    </Layout>
  </div>
)

export default HostelDetails
