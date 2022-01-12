import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import store from '../features/store'

import '../styles/global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Provider store={store}>
      <NextNProgress height={5} color="#03B575" />
      <Component {...pageProps} />
    </Provider>
  </>
)

export default App
