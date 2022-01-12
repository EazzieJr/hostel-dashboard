import React from 'react'
import Head from 'next/head'

import HomeDashboard from '../components/page-components/HomeDashboard'
import Layout from '../components/layout/index'

const Home = () => (
  <div>
    <Head>
      <title>Home | Hostel</title>
    </Head>

    <Layout>
      <HomeDashboard />
    </Layout>
  </div>
)

export default Home
