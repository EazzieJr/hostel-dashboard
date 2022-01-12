import React from 'react'
import Head from 'next/head'


import PaymentDashboard from '../components/page-components/ReceiptsDashboard'
import Layout from '../components/layout/index'

const Payments = () => (
  <div>
    <Head>
      <title>Payments | Hostel</title>
    </Head>

    <Layout>
      <PaymentDashboard/>

    </Layout>
  </div>
)

export default Payments
