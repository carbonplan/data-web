import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import theme from '@carbonplan/theme'

const App = ({ Component, pageProps }) => {
  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents())

  return (
    <ThemeProvider theme={theme}>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <Script
          strategy='lazyOnload'
          data-domain='carbonplan.org'
          data-api='https://carbonplan.org/proxy/api/event'
          src='https://carbonplan.org/js/script.file-downloads.outbound-links.js'
        />
      )}
      <MDXProvider components={componentsWithStyles}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
