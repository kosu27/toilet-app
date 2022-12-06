/* eslint-disable import/no-default-export */
/* eslint-disable react/destructuring-assignment */
import '../styles/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MantineProvider } from '@mantine/core'
import { DAppProvider, Hardhat } from '@usedapp/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const config = {
  multicallAddresses: {
    [Hardhat.chainId]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DAppProvider config={config}>
      <Head>
        <title>Toilet App</title>
        <meta name="description" content="Toilet App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </DAppProvider>
  )
}

export default App
