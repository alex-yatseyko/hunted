import * as React from 'react'
import Head from 'next/head'

type LayoutProps = {
  title?: string
}
const layoutStyle = {
  backgroundColor: '#f3f4f6',
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div 
    style={layoutStyle}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)
export default Layout