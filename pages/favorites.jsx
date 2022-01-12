import React from 'react'
import Head from 'next/head'

import FavouritesDashboard from '../components/page-components/FavouritesDashboard.jsx'
import Layout from '../components/layout/index'

const Favorites = () => (
  <div>
    <Head>
      <title>Favorites | Hostel</title>
    </Head>

    <Layout>
      <FavouritesDashboard />
    </Layout>
  </div>
)

export default Favorites
