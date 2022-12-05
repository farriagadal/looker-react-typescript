import React from 'react'
import { HelloWorld } from './HelloWorld'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'

export const App = hot(() => {
  return (
    <ExtensionProvider>
      <HelloWorld />
    </ExtensionProvider>
  )
})
