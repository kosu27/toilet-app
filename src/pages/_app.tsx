/* eslint-disable import/no-default-export */
/* eslint-disable react/destructuring-assignment */
import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
