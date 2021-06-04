import React from 'react'

import '../styles/global.css'

// type AppProps = {
//     Component: React.FC,
//     pageProps: any
// }

export default function MyApp({ Component, pageProps }: any) {
    return <>
        <Component {...pageProps} />
    </>
  }