import NextNProgress from 'nextjs-progressbar'

import '../styles/global.css'

const App = ({ Component, pageProps }) => (
  <>
    <NextNProgress height={5} color="#03B575" />
    <Component {...pageProps} />
  </>
)

export default App
