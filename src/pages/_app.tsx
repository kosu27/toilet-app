/* eslint-disable import/no-default-export */
/* eslint-disable react/destructuring-assignment */
import '../styles/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App
