import React from 'react'
import Head from 'next/head'

import ReceiptsDashboard from '../components/page-components/ReceiptsDashboard.jsx'
import Layout from '../components/layout/index'

const Receipts = () => (
  <div>
    <Head>
      <title>Receipts | Hostel</title>
    </Head>

    <Layout>
      <ReceiptsDashboard />
    </Layout>
  </div>
)

export default Receipts
