import React from 'react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import theme from '@carbonplan/theme'

const App = ({ Component, pageProps }) => {
  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents())

  return (
    <PlausibleProvider domain='carbonplan.org'>
      <ThemeProvider theme={theme}>
        <MDXProvider components={componentsWithStyles}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default App
