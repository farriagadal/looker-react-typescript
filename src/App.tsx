import React from 'react'
import { HelloWorld } from './HelloWorld'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import Home from './views/Home'

export const App = hot(() => (
  <ExtensionProvider>
    <Layout>
      {/* <h1>Aquí debería ir el HEADER</h1>
      <HelloWorld /> */}
      <Home />
    </Layout>
  </ExtensionProvider>
))
